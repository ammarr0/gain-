"use client";

import React, { useState } from "react";

// Helper function to get a cookie value by name
function getCookie(name) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const sidebarItems = [
  "Basic Information",
  "About",
  "Preferences",
  "Billing and Payment",
  "Account Settings",
];

// Unified initial form state as per the provided schema
const initialForm = {
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

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Basic Information");
  const [avatar, setAvatar] = useState("/avatar.jpg");
  const [avatarFile, setAvatarFile] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle avatar image change
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setAvatar(ev.target?.result);
      setForm((prev) => ({
        ...prev,
        image: ev.target?.result || "",
      }));
    };
    reader.readAsDataURL(file);
  };

  // Handle form submit and PUT to API
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Optionally validate required fields here

    try {
      // Get access_token from cookies
      const accessToken = getCookie("access_token");

      const response = await fetch("https://gain-b7ea8e7de810.herokuapp.com/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      alert("Profile updated successfully!");
    } catch (err) {
      alert("Error updating profile: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Render form fields based on activeTab, but all fields are present in the form state
  const renderFormFields = () => {
    switch (activeTab) {
      case "Basic Information":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={form.first_name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="given-name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={form.last_name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="family-name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="jondoe@abcd.com"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone_no"
                placeholder="+12 345 67890943"
                value={form.phone_no}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="tel"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Country Code
              </label>
              <input
                type="text"
                name="country_code"
                placeholder="+1"
                value={form.country_code}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
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
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Emergency Contact
              </label>
              <input
                type="text"
                name="emergency_contact"
                placeholder="Emergency Contact"
                value={form.emergency_contact}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
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
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Website
              </label>
              <input
                type="url"
                name="website"
                placeholder="https://yourwebsite.com"
                value={form.website}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                LinkedIn
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/yourprofile"
                value={form.linkedin}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
          </div>
        );
      case "Preferences":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                FCM Token
              </label>
              <input
                type="text"
                name="fcm_token"
                placeholder="FCM Token"
                value={form.fcm_token}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2 text-black font-semibold bg-white">
                <input
                  type="checkbox"
                  name="is_disabled"
                  checked={form.is_disabled}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Is Disabled
              </label>
              <label className="flex items-center gap-2 text-black font-semibold bg-white">
                <input
                  type="checkbox"
                  name="is_deleted"
                  checked={form.is_deleted}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Is Deleted
              </label>
            </div>
          </div>
        );
      case "Billing and Payment":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Country
              </label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Street
              </label>
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={form.street}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Suite
              </label>
              <input
                type="text"
                name="suite"
                placeholder="Suite"
                value={form.suite}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Post Code
              </label>
              <input
                type="text"
                name="post_code"
                placeholder="Post Code"
                value={form.post_code}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
          </div>
        );
      case "Account Settings":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Is Disabled
              </label>
              <input
                type="checkbox"
                name="is_disabled"
                checked={form.is_disabled}
                onChange={handleChange}
                className="accent-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Is Deleted
              </label>
              <input
                type="checkbox"
                name="is_deleted"
                checked={form.is_deleted}
                onChange={handleChange}
                className="accent-blue-600"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white px-0 py-10 text-gray-900 font-sans w-full">
      <div className="w-full max-w-6xl mx-auto">
        <header className="mb-10 w-full">
          <h1 className="text-4xl font-extrabold text-black tracking-tight w-full bg-white">Your Profile</h1>
          <p className="text-lg text-black mt-2 mb-8 w-full bg-white">
            Manage your profile and settings to maximize your experience on the platform.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <aside className="w-full lg:w-1/4 border rounded-2xl p-6 mb-8 lg:mb-0 bg-white shadow-md">
            <ul className="space-y-2 text-base font-semibold text-black">
              {sidebarItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`flex items-center gap-2 pl-4 py-3 rounded-lg transition-all duration-200 cursor-pointer w-full relative group
                    ${
                      item === activeTab
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
                <label htmlFor="avatar" className="cursor-pointer group relative">
                  <img
                    src={avatar}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 shadow-lg transition-transform group-hover:scale-105"
                  />
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
                        setForm((prev) => ({
                          ...prev,
                          image: "",
                        }));
                      }}
                      disabled={!avatarFile}
                    >
                      Reset
                    </button>
                    {avatarFile && (
                      <span className="text-xs text-gray-500 bg-white">Image ready to upload</span>
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
      `}</style>
    </div>
  );
};

export default ProfilePage;