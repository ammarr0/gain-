"use client";

import React, { useState, useEffect } from "react";

// Improved getCookie: works for both client and SSR, and checks for token existence
function getCookie(name) {
  if (typeof window === "undefined" || typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

const SIDEBAR_ITEMS = [
  "Basic Information",
  "About",
  "Preferences",
  "Billing and Payment",
  "Account Settings",
];

const INITIAL_FORM = {
  image: "",
  first_name: "",
  last_name: "",
  fcm_token: "",
  email: "",
  country_code: "",
  phone_no: "",
  gender: "",
  biography: "",
  emergency_contact: "",
  country: "",
  street: "",
  suite: "",
  city: "",
  post_code: "",
  dob: "",
  is_disabled: false,
  is_deleted: false,
  website: "",
  linkedin: "",
};

const UserIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="32" cy="32" r="32" fill="#E5E7EB" />
    <circle cx="32" cy="26" r="12" fill="#9CA3AF" />
    <path d="M16 50c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#9CA3AF" />
  </svg>
);

const MAX_IMAGE_SIZE = 1024 * 1024; // 1MB

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(SIDEBAR_ITEMS[0]);
  const [avatar, setAvatar] = useState("/avatar.jpg");
  const [avatarFile, setAvatarFile] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [avatarError, setAvatarError] = useState(false);
  const [imageTooLarge, setImageTooLarge] = useState(false);

  // Track token error state
  const [tokenError, setTokenError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      setTokenError(false);
      try {
        const accessToken = getCookie("access_token");
        if (!accessToken) {
          setTokenError(true);
          setFetching(false);
          return;
        }
        const response = await fetch(
          "https://gain-b7ea8e7de810.herokuapp.com/users",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.status === 401 || response.status === 400) {
          setTokenError(true);
          setFetching(false);
          return;
        }
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();

        setForm((prev) => ({
          ...prev,
          image: data.image || "",
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          fcm_token: data.fcm_token || "",
          email: data.email || "",
          country_code: data.country_code || "",
          phone_no: data.phone_no || "",
          gender: data.gender || "",
          biography: data.biography || "",
          emergency_contact: data.emergency_contact || "",
          country: data.country || "",
          street: data.street || "",
          suite: data.suite || "",
          city: data.city || "",
          post_code: data.post_code || "",
          dob: data.dob || "",
          is_disabled: !!data.is_disabled,
          is_deleted: !!data.is_deleted,
          website: data.website || "",
          linkedin: data.linkedin || "",
        }));

        if (data.image) {
          setAvatar(data.image);
          setAvatarError(false);
        } else {
          setAvatar("/avatar.jpg");
          setAvatarError(false);
        }
      } catch {
        // Optionally handle error
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Helper to compress image to JPEG and limit size
  const compressImage = (file, maxSize = MAX_IMAGE_SIZE, callback) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new window.Image();
      img.onload = () => {
        // Create canvas
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        // Optionally resize if too large
        const maxDim = 512;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        // Try compressing to JPEG, reducing quality if needed
        let quality = 0.8;
        let dataUrl = canvas.toDataURL("image/jpeg", quality);
        while (dataUrl.length > maxSize * 1.37 && quality > 0.3) {
          quality -= 0.1;
          dataUrl = canvas.toDataURL("image/jpeg", quality);
        }
        callback(dataUrl, dataUrl.length > maxSize * 1.37);
      };
      img.onerror = () => callback(null, true);
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE * 2) {
      setImageTooLarge(true);
      setAvatarFile(null);
      setAvatarError(false);
      setForm((prev) => ({
        ...prev,
        image: "",
      }));
      setAvatar("/avatar.jpg");
      return;
    }
    setImageTooLarge(false);
    setAvatarFile(file);
    setAvatarError(false);

    compressImage(file, MAX_IMAGE_SIZE, (dataUrl, tooLarge) => {
      if (tooLarge) {
        setImageTooLarge(true);
        setAvatar("/avatar.jpg");
        setForm((prev) => ({
          ...prev,
          image: "",
        }));
        return;
      }
      setAvatar(dataUrl);
      setForm((prev) => ({
        ...prev,
        image: dataUrl || "",
      }));
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Remove image from payload if it's too large or not changed
    let payload = { ...form };
    if (imageTooLarge) {
      alert("Image is too large. Please select an image under 1MB.");
      setLoading(false);
      return;
    }
    // If avatar is default and no file, don't send image
    if ((!avatarFile && avatar === "/avatar.jpg") || imageTooLarge) {
      delete payload.image;
    }
    // If image is present, check its size
    if (payload.image && payload.image.length > MAX_IMAGE_SIZE * 1.37) {
      alert("Image is too large. Please select an image under 1MB.");
      setLoading(false);
      return;
    }

    // Check for access token before making request
    const accessToken = getCookie("access_token");
    if (!accessToken) {
      alert("You are not logged in or your session has expired. Please log in again.");
      setLoading(false);
      setTokenError(true);
      return;
    }

    try {
      const response = await fetch(
        "https://gain-b7ea8e7de810.herokuapp.com/users",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(payload),
        }
      );
      if (response.status === 401 || response.status === 400) {
        // Try to parse error message
        let errMsg = "Invalid or expired token. Please log in again.";
        try {
          const errData = await response.json();
          if (errData && errData.message) {
            errMsg = errData.message;
          }
        } catch {}
        setTokenError(true);
        alert(errMsg);
        setLoading(false);
        return;
      }
      if (!response.ok) {
        let msg = "Failed to update profile";
        try {
          const errData = await response.json();
          if (errData && errData.message) {
            msg = errData.message;
          }
        } catch {}
        throw new Error(msg);
      }
      alert("Profile updated successfully!");
    } catch (err) {
      if (
        err.message &&
        (err.message.includes("413") ||
          err.message.toLowerCase().includes("entity too large"))
      ) {
        alert(
          "Your request is too large. Please use a smaller profile image (under 1MB)."
        );
      } else {
        alert("Error updating profile: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const renderFormFields = () => {
    switch (activeTab) {
      case "Basic Information":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <InputField
              label="First Name"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              autoComplete="given-name"
            />
            <InputField
              label="Last Name"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              autoComplete="family-name"
            />
            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="jondoe@abcd.com"
            />
            <InputField
              label="Phone Number"
              name="phone_no"
              type="tel"
              value={form.phone_no}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="+12 345 67890943"
            />
            <InputField
              label="Country Code"
              name="country_code"
              value={form.country_code}
              onChange={handleChange}
              placeholder="+1"
            />
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Gender
              </label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <InputField
              label="Date of Birth"
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
            />
            <InputField
              label="Emergency Contact"
              name="emergency_contact"
              value={form.emergency_contact}
              onChange={handleChange}
              placeholder="Emergency Contact"
            />
          </div>
        );
      case "About":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Biography
              </label>
              <textarea
                name="biography"
                placeholder="Tell us about yourself..."
                value={form.biography}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white resize-none"
              />
            </div>
            <InputField
              label="Website"
              name="website"
              type="url"
              value={form.website}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
            />
            <InputField
              label="LinkedIn"
              name="linkedin"
              type="url"
              value={form.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
        );
      case "Preferences":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <InputField
              label="FCM Token"
              name="fcm_token"
              value={form.fcm_token}
              onChange={handleChange}
              placeholder="FCM Token"
            />
            <div className="flex flex-col gap-4">
              <CheckboxField
                label="Is Disabled"
                name="is_disabled"
                checked={form.is_disabled}
                onChange={handleChange}
              />
              <CheckboxField
                label="Is Deleted"
                name="is_deleted"
                checked={form.is_deleted}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case "Billing and Payment":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <InputField
              label="Country"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
            />
            <InputField
              label="City"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
            />
            <InputField
              label="Street"
              name="street"
              value={form.street}
              onChange={handleChange}
              placeholder="Street"
            />
            <InputField
              label="Suite"
              name="suite"
              value={form.suite}
              onChange={handleChange}
              placeholder="Suite"
            />
            <InputField
              label="Post Code"
              name="post_code"
              value={form.post_code}
              onChange={handleChange}
              placeholder="Post Code"
            />
          </div>
        );
      case "Account Settings":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <CheckboxField
              label="Is Disabled"
              name="is_disabled"
              checked={form.is_disabled}
              onChange={handleChange}
            />
            <CheckboxField
              label="Is Deleted"
              name="is_deleted"
              checked={form.is_deleted}
              onChange={handleChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const isAvatarAvailable = avatar && !avatarError && avatar !== "/avatar.jpg";

  return (
    <div className="min-h-screen bg-white px-0 py-10 text-gray-900 font-sans w-full">
      <div className="w-full max-w-6xl mx-auto">
        <header className="mb-10 w-full">
          <h1 className="text-4xl font-extrabold text-black tracking-tight w-full bg-white">
            Your Profile
          </h1>
          <p className="text-lg text-black mt-2 mb-8 w-full bg-white">
            Manage your profile and settings to maximize your experience on the platform.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <aside className="w-full lg:w-1/4 border rounded-2xl p-6 mb-8 lg:mb-0 bg-white shadow-md">
            <ul className="space-y-2 text-base font-semibold text-black">
              {SIDEBAR_ITEMS.map((item) => (
                <li
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`flex items-center gap-2 pl-4 py-3 rounded-lg transition-all duration-200 cursor-pointer w-full relative group
                    ${item === activeTab
                      ? "bg-blue-600 text-white border-l-4 border-blue-700 shadow-lg"
                      : "hover:bg-blue-100 border-l-4 border-transparent"
                    }
                  `}
                >
                  {item === activeTab && (
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-1"></span>
                  )}
                  <span className="z-10">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
          <main className="w-full lg:w-3/4 space-y-8">
            {activeTab === "Basic Information" && (
              <div className="flex items-center gap-8 bg-white rounded-2xl p-8 shadow-md w-full relative">
                <label htmlFor="avatar" className="cursor-pointer group relative w-28 h-28">
                  {isAvatarAvailable ? (
                    <img
                      src={avatar}
                      alt=""
                      className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 shadow-lg transition-transform group-hover:scale-105"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <span className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-lg flex items-center justify-center bg-gray-100 transition-transform group-hover:scale-105">
                      <UserIcon className="w-20 h-20 text-gray-400" />
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-white text-xs font-semibold">Click to Update</span>
                  </div>
                  <input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
                <div>
                  <p className="text-lg font-bold text-black bg-white">Profile Picture</p>
                  <p className="text-xs text-gray-500 bg-white">Click the image to change</p>
                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      className="px-4 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow hover:bg-blue-700 transition"
                      onClick={() => {
                        setAvatar("/avatar.jpg");
                        setAvatarFile(null);
                        setAvatarError(false);
                        setImageTooLarge(false);
                        setForm((prev) => ({
                          ...prev,
                          image: "",
                        }));
                      }}
                      disabled={!avatarFile && !imageTooLarge}
                    >
                      Reset
                    </button>
                    {avatarFile && !imageTooLarge && (
                      <span className="text-xs text-gray-500 bg-white">Image ready to upload</span>
                    )}
                    {imageTooLarge && (
                      <span className="text-xs text-red-500 bg-white">Image too large (max 1MB)</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            <form
              onSubmit={onSubmit}
              className="bg-white rounded-2xl p-10 shadow-md w-full animate-fade-in"
              autoComplete="off"
            >
              {fetching ? (
                <div className="text-center text-gray-500 py-10">
                  <span className="loader-blue-circle"></span>
                  <div className="mt-4">Loading profile...</div>
                </div>
              ) : tokenError ? (
                <div className="text-center text-red-600 py-10 font-semibold">
                  Invalid or expired session. Please log in again to update your profile.
                </div>
              ) : (
                <>
                  {renderFormFields()}
                  <div className="mt-10 flex justify-end w-full">
                    <button
                      type="submit"
                      className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-white text-lg font-bold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      disabled={loading}
                    >
                      <svg className="w-6 h-6 mr-2 -ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </>
              )}
            </form>
          </main>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.5s cubic-bezier(.4,0,.2,1);
        }
        .loader-blue-circle {
          display: inline-block;
          width: 48px;
          height: 48px;
          border: 5px solid #3B82F6;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin-blue 1s linear infinite;
        }
        @keyframes spin-blue {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Reusable input field component
function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  autoComplete,
  placeholder,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-black mb-2 bg-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
        autoComplete={autoComplete}
      />
    </div>
  );
}

// Reusable checkbox field component
function CheckboxField({ label, name, checked, onChange }) {
  return (
    <div>
      <label className="flex items-center gap-2 text-black font-semibold bg-white">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="accent-blue-600"
        />
        {label}
      </label>
    </div>
  );
}

export default ProfilePage;