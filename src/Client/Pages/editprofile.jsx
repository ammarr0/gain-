"use client";

import React, { useState, useEffect, useRef } from "react";


function getCookie(name) {
  if (typeof window === "undefined" || typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}


function Toast({ message, type = "info", onClose }) {
  return (
    <div
      className={`fixed z-50 top-6 right-6 min-w-[220px] max-w-xs px-5 py-3 rounded-lg shadow-lg flex items-center gap-3
        ${type === "success"
          ? "bg-green-600 text-white"
          : type === "error"
          ? "bg-red-600 text-white"
          : "bg-gray-800 text-white"
        }
      `}
      role="alert"
      style={{ animation: "fade-in-toast 0.2s" }}
    >
      {type === "success" && (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
      {type === "error" && (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}
      {type === "info" && (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" />
        </svg>
      )}
      <span className="flex-1">{message}</span>
      <button
        className="ml-2 text-white hover:text-gray-200 focus:outline-none"
        onClick={onClose}
        aria-label="Close"
        tabIndex={0}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <style>{`
        @keyframes fade-in-toast {
          from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}

const SIDEBAR_ITEMS = [
  "Basic Information",
  "About",
  "Preferences",
  "Billing and Payment",
  "Account Settings",
  "Portfolio",
];

const INITIAL_FORM = {
  image: "https://example.com/profiles/suleman-shakeel.jpg",
  first_name: "Suleman",
  last_name: "Shakeel",
  fcm_token: "fcm_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9_demo",
  email: "abc@gmail.com",
  country_code: "+92",
  phone_no: "03123456789",
  gender: "male",
  biography: "Data analyst & MERN enthusiast from Wah Cantt. I build dashboards, automations, and clean UIs.",
  emergency_contact: "923001112222",
  country: "Pakistan",
  street: "MR-2",
  suite: "Apt 3B",
  city: "Wah Cantt",
  post_code: "47000",
  dob: "2004-09-21",
  is_disabled: false,
  is_deleted: false,
  website: "https://chatgpt.com/",
  linkedin: "https://www.linkedin.com/in/suleman-shakeel",
  portfolio: {
    projects: [
      {
        title: "YouTube Stream Signal Detector",
        description: "Python + OpenCV/EasyOCR bot that reads live stream overlays to detect trade signals and sends instant alerts to Discord/Telegram.",
        technologies: [
          "Python",
          "OpenCV",
          "EasyOCR",
          "FFmpeg",
          "Multiprocessing"
        ],
        github_url: "https://github.com/programmer-blog/yt-signal-detector",
        live_url: "https://example.com/demos/yt-signal-detector",
        image_url: "https://example.com/images/yt-signal-detector.png"
      }
    ],
    skills: [
      "Excel",
      "Power BI",
      "Google Sheets",
      "Apps Script",
      "Python",
      "Pandas",
      "React",
      "Node.js",
      "MongoDB",
      "Docker"
    ],
    experience: "2+ years building dashboards and automations for global clients; 15+ dashboards delivered with measurable impact.",
    education: [
      {
        degree: "BS Computer Science",
        institution: "Air University",
        year: "2024",
        description: "Focused on data analysis, machine learning, and modern web development."
      }
    ],
    certifications: [
      {
        name: "Google Data Analytics Professional Certificate",
        issuer: "Coursera",
        year: "2023",
        credential_id: "ABC-123-XYZ"
      }
    ]
  }
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
  const [avatar, setAvatar] = useState(INITIAL_FORM.image || "/avatar.jpg");
  const [avatarFile, setAvatarFile] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false); // No need to fetch on mount, since we have all data
  const [avatarError, setAvatarError] = useState(false);
  const [imageTooLarge, setImageTooLarge] = useState(false);

  // Track token error state
  const [tokenError, setTokenError] = useState(false);

  // Toast state
  const [toast, setToast] = useState(null);
  const toastTimeoutRef = useRef(null);

  // Show toast helper
  const showToast = (message, type = "info", duration = 3500) => {
    setToast({ message, type });
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToast(null), duration);
  };

  // If you want to fetch from API, uncomment this effect and remove the hardcoded INITIAL_FORM
  /*
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
        if (response.status === 401) {
          setTokenError(true);
          setFetching(false);
          return;
        }
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();

        setForm((prev) => ({
          ...prev,
          ...data,
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
  */

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Sanitize input values
    let sanitizedValue = value;
    if (type !== "checkbox" && typeof value === "string") {
      sanitizedValue = value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
    }

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : sanitizedValue,
    }));
  };

  // Portfolio field change handler (for nested fields)
  const handlePortfolioChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      portfolio: {
        ...prev.portfolio,
        [field]: value,
      }
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
      showToast("Image is too large. Please select an image under 1MB.", "error");
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
        showToast("Image is too large. Please select an image under 1MB.", "error");
        return;
      }
      setAvatar(dataUrl);
      setForm((prev) => ({
        ...prev,
        image: dataUrl || "",
      }));
      showToast("Image ready to upload.", "success");
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate and sanitize the form data
    const sanitizedForm = { ...form };

    // Remove empty strings and convert them to null or remove the field entirely
    Object.keys(sanitizedForm).forEach(key => {
      if (typeof sanitizedForm[key] === 'string' && sanitizedForm[key].trim() === '') {
        delete sanitizedForm[key];
      }
    });

    // Validate required fields
    if (sanitizedForm.email && !sanitizedForm.email.trim()) {
      delete sanitizedForm.email;
    }

    // Validate email format if provided
    if (sanitizedForm.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedForm.email)) {
        showToast("Please enter a valid email address.", "error");
        setLoading(false);
        return;
      }
    }

    // Validate phone number format if provided
    if (sanitizedForm.phone_no) {
      const phoneRegex = /^\+?[\d\s\-()]+$/;
      const hasDigits = /\d/.test(sanitizedForm.phone_no);
      if (!phoneRegex.test(sanitizedForm.phone_no) || !hasDigits) {
        showToast("Please enter a valid phone number with digits.", "error");
        setLoading(false);
        return;
      }
    }

    // Validate country code format if provided
    if (sanitizedForm.country_code) {
      const countryCodeRegex = /^\+?\d{1,4}$/;
      if (!countryCodeRegex.test(sanitizedForm.country_code)) {
        showToast("Please enter a valid country code (e.g., +1, +44).", "error");
        setLoading(false);
        return;
      }
    }

    // Validate website URL if provided
    if (sanitizedForm.website) {
      try {
        new URL(sanitizedForm.website);
      } catch {
        showToast("Please enter a valid website URL (e.g., https://example.com).", "error");
        setLoading(false);
        return;
      }
    }

    // Validate LinkedIn URL if provided
    if (sanitizedForm.linkedin) {
      try {
        const url = new URL(sanitizedForm.linkedin);
        if (!url.hostname.includes('linkedin.com')) {
          throw new Error('Not a LinkedIn URL');
        }
      } catch {
        showToast("Please enter a valid LinkedIn URL (e.g., https://linkedin.com/in/yourprofile).", "error");
        setLoading(false);
        return;
      }
    }

    // Validate date of birth format if provided
    if (sanitizedForm.dob) {
      const dobDate = new Date(sanitizedForm.dob);
      if (isNaN(dobDate.getTime()) || dobDate > new Date()) {
        showToast("Please enter a valid date of birth.", "error");
        setLoading(false);
        return;
      }
    }

    // Handle image validation
    if (imageTooLarge) {
      showToast("Image is too large. Please select an image under 1MB.", "error");
      setLoading(false);
      return;
    }

    // If avatar is default and no file, don't send image
    if ((!avatarFile && avatar === "/avatar.jpg") || imageTooLarge) {
      delete sanitizedForm.image;
    }

    // If image is present, check its size
    if (sanitizedForm.image && sanitizedForm.image.length > MAX_IMAGE_SIZE * 1.37) {
      showToast("Image is too large. Please select an image under 1MB.", "error");
      setLoading(false);
      return;
    }

    // Check for access token before making request
    const accessToken = getCookie("access_token");
    if (!accessToken) {
      showToast("You are not logged in or your session has expired. Please log in again.", "error");
      setLoading(false);
      setTokenError(true);
      return;
    }

    // Remove fcm_token if it's empty as it might not be expected by the API
    if (!sanitizedForm.fcm_token || sanitizedForm.fcm_token.trim() === '') {
      delete sanitizedForm.fcm_token;
    }

    // Validate gender field
    if (sanitizedForm.gender && !['male', 'female', 'other'].includes(sanitizedForm.gender.toLowerCase())) {
      delete sanitizedForm.gender;
    }

    // Ensure boolean fields are proper booleans
    if ('is_disabled' in sanitizedForm) {
      sanitizedForm.is_disabled = Boolean(sanitizedForm.is_disabled);
    }
    if ('is_deleted' in sanitizedForm) {
      sanitizedForm.is_deleted = Boolean(sanitizedForm.is_deleted);
    }

    // Portfolio: remove empty strings in nested fields
    if (sanitizedForm.portfolio) {
      // Clean up projects
      if (Array.isArray(sanitizedForm.portfolio.projects)) {
        sanitizedForm.portfolio.projects = sanitizedForm.portfolio.projects.map(project => {
          const cleaned = { ...project };
          Object.keys(cleaned).forEach(key => {
            if (typeof cleaned[key] === 'string' && cleaned[key].trim() === '') {
              delete cleaned[key];
            }
          });
          return cleaned;
        });
      }
      // Clean up education
      if (Array.isArray(sanitizedForm.portfolio.education)) {
        sanitizedForm.portfolio.education = sanitizedForm.portfolio.education.map(edu => {
          const cleaned = { ...edu };
          Object.keys(cleaned).forEach(key => {
            if (typeof cleaned[key] === 'string' && cleaned[key].trim() === '') {
              delete cleaned[key];
            }
          });
          return cleaned;
        });
      }
      // Clean up certifications
      if (Array.isArray(sanitizedForm.portfolio.certifications)) {
        sanitizedForm.portfolio.certifications = sanitizedForm.portfolio.certifications.map(cert => {
          const cleaned = { ...cert };
          Object.keys(cleaned).forEach(key => {
            if (typeof cleaned[key] === 'string' && cleaned[key].trim() === '') {
              delete cleaned[key];
            }
          });
          return cleaned;
        });
      }
    }

    console.log('Sending payload:', sanitizedForm); // Debug log

    try {
      const response = await fetch(
        "https://gain-b7ea8e7de810.herokuapp.com/users",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(sanitizedForm),
        }
      );

      if (response.status === 401 || response.status === 400) {
        // Try to parse error message
        let errMsg = "Invalid or expired token. Please log in again.";
        try {
          const errData = await response.json();
          console.error('API Error Response:', errData); // Debug log
          if (errData && errData.message) {
            errMsg = errData.message;
          }
          // If it's a validation error, provide more specific feedback
          if (response.status === 400) {
            errMsg = `Validation Error: ${errData.message || 'Please check your input data.'}`;
          }
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
        }
        if (response.status === 401) {
          setTokenError(true);
        }
        showToast(errMsg, "error");
        setLoading(false);
        return;
      }

      if (!response.ok) {
        let msg = "Failed to update profile";
        try {
          const errData = await response.json();
          console.error('API Error Response:', errData); // Debug log
          if (errData && errData.message) {
            msg = errData.message;
          }
        } catch {}
        throw new Error(msg);
      }

      showToast("Profile updated successfully!", "success");
    } catch (err) {
      console.error('Network or other error:', err); // Debug log
      if (
        err.message &&
        (err.message.includes("413") ||
          err.message.toLowerCase().includes("entity too large"))
      ) {
        showToast(
          "Your request is too large. Please use a smaller profile image (under 1MB).",
          "error"
        );
      } else {
        showToast("Error updating profile: " + err.message, "error");
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
      case "Portfolio":
        return (
          <div className="space-y-8 w-full">
            <div>
              <label className="block text-lg font-bold text-black mb-2 bg-white">
                Projects
              </label>
              {form.portfolio?.projects?.map((project, idx) => (
                <div key={idx} className="mb-6 p-4 border rounded-lg bg-gray-50">
                  <InputField
                    label="Title"
                    name={`portfolio_project_title_${idx}`}
                    value={project.title}
                    onChange={e => {
                      const newProjects = [...form.portfolio.projects];
                      newProjects[idx] = { ...newProjects[idx], title: e.target.value };
                      handlePortfolioChange("projects", newProjects);
                    }}
                  />
                  <InputField
                    label="Description"
                    name={`portfolio_project_description_${idx}`}
                    value={project.description}
                    onChange={e => {
                      const newProjects = [...form.portfolio.projects];
                      newProjects[idx] = { ...newProjects[idx], description: e.target.value };
                      handlePortfolioChange("projects", newProjects);
                    }}
                  />
                  <InputField
                    label="GitHub URL"
                    name={`portfolio_project_github_url_${idx}`}
                    value={project.github_url}
                    onChange={e => {
                      const newProjects = [...form.portfolio.projects];
                      newProjects[idx] = { ...newProjects[idx], github_url: e.target.value };
                      handlePortfolioChange("projects", newProjects);
                    }}
                  />
                  <InputField
                    label="Live URL"
                    name={`portfolio_project_live_url_${idx}`}
                    value={project.live_url}
                    onChange={e => {
                      const newProjects = [...form.portfolio.projects];
                      newProjects[idx] = { ...newProjects[idx], live_url: e.target.value };
                      handlePortfolioChange("projects", newProjects);
                    }}
                  />
                  <InputField
                    label="Image URL"
                    name={`portfolio_project_image_url_${idx}`}
                    value={project.image_url}
                    onChange={e => {
                      const newProjects = [...form.portfolio.projects];
                      newProjects[idx] = { ...newProjects[idx], image_url: e.target.value };
                      handlePortfolioChange("projects", newProjects);
                    }}
                  />
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2 bg-white">
                      Technologies (comma separated)
                    </label>
                    <input
                      type="text"
                      name={`portfolio_project_technologies_${idx}`}
                      value={project.technologies?.join(", ") || ""}
                      onChange={e => {
                        const newProjects = [...form.portfolio.projects];
                        newProjects[idx] = {
                          ...newProjects[idx],
                          technologies: e.target.value.split(",").map(s => s.trim()).filter(Boolean)
                        };
                        handlePortfolioChange("projects", newProjects);
                      }}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <label className="block text-lg font-bold text-black mb-2 bg-white">
                Skills (comma separated)
              </label>
              <input
                type="text"
                name="portfolio_skills"
                value={form.portfolio?.skills?.join(", ") || ""}
                onChange={e => {
                  handlePortfolioChange(
                    "skills",
                    e.target.value.split(",").map(s => s.trim()).filter(Boolean)
                  );
                }}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
            <div>
              <InputField
                label="Experience"
                name="portfolio_experience"
                value={form.portfolio?.experience || ""}
                onChange={e => handlePortfolioChange("experience", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-black mb-2 bg-white">
                Education
              </label>
              {form.portfolio?.education?.map((edu, idx) => (
                <div key={idx} className="mb-6 p-4 border rounded-lg bg-gray-50">
                  <InputField
                    label="Degree"
                    name={`portfolio_education_degree_${idx}`}
                    value={edu.degree}
                    onChange={e => {
                      const newEdu = [...form.portfolio.education];
                      newEdu[idx] = { ...newEdu[idx], degree: e.target.value };
                      handlePortfolioChange("education", newEdu);
                    }}
                  />
                  <InputField
                    label="Institution"
                    name={`portfolio_education_institution_${idx}`}
                    value={edu.institution}
                    onChange={e => {
                      const newEdu = [...form.portfolio.education];
                      newEdu[idx] = { ...newEdu[idx], institution: e.target.value };
                      handlePortfolioChange("education", newEdu);
                    }}
                  />
                  <InputField
                    label="Year"
                    name={`portfolio_education_year_${idx}`}
                    value={edu.year}
                    onChange={e => {
                      const newEdu = [...form.portfolio.education];
                      newEdu[idx] = { ...newEdu[idx], year: e.target.value };
                      handlePortfolioChange("education", newEdu);
                    }}
                  />
                  <InputField
                    label="Description"
                    name={`portfolio_education_description_${idx}`}
                    value={edu.description}
                    onChange={e => {
                      const newEdu = [...form.portfolio.education];
                      newEdu[idx] = { ...newEdu[idx], description: e.target.value };
                      handlePortfolioChange("education", newEdu);
                    }}
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-lg font-bold text-black mb-2 bg-white">
                Certifications
              </label>
              {form.portfolio?.certifications?.map((cert, idx) => (
                <div key={idx} className="mb-6 p-4 border rounded-lg bg-gray-50">
                  <InputField
                    label="Name"
                    name={`portfolio_certifications_name_${idx}`}
                    value={cert.name}
                    onChange={e => {
                      const newCerts = [...form.portfolio.certifications];
                      newCerts[idx] = { ...newCerts[idx], name: e.target.value };
                      handlePortfolioChange("certifications", newCerts);
                    }}
                  />
                  <InputField
                    label="Issuer"
                    name={`portfolio_certifications_issuer_${idx}`}
                    value={cert.issuer}
                    onChange={e => {
                      const newCerts = [...form.portfolio.certifications];
                      newCerts[idx] = { ...newCerts[idx], issuer: e.target.value };
                      handlePortfolioChange("certifications", newCerts);
                    }}
                  />
                  <InputField
                    label="Year"
                    name={`portfolio_certifications_year_${idx}`}
                    value={cert.year}
                    onChange={e => {
                      const newCerts = [...form.portfolio.certifications];
                      newCerts[idx] = { ...newCerts[idx], year: e.target.value };
                      handlePortfolioChange("certifications", newCerts);
                    }}
                  />
                  <InputField
                    label="Credential ID"
                    name={`portfolio_certifications_credential_id_${idx}`}
                    value={cert.credential_id}
                    onChange={e => {
                      const newCerts = [...form.portfolio.certifications];
                      newCerts[idx] = { ...newCerts[idx], credential_id: e.target.value };
                      handlePortfolioChange("certifications", newCerts);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const isAvatarAvailable = avatar && !avatarError && avatar !== "/avatar.jpg";

  return (
    <div className="min-h-screen bg-white px-0 py-10 text-gray-900 font-sans w-full">
      <div className="section-container">
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
                        showToast("Profile picture reset.", "info");
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
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
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