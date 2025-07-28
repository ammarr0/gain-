"use client";

import React, { useState } from "react";

const sidebarItems = [
  "Basic Information",
  "About",
  "Preferences",
  "Billing and Payment",
  "Account Settings",
];

const initialForms = {
  "Basic Information": {
    company: "",
    location: "United States",
    phone: "+12 345 67890943",
    email: "jondoe@abcd.com",
  },
  "About": {
    bio: "",
    website: "",
    linkedin: "",
  },
  "Preferences": {
    notifications: true,
    newsletter: false,
    language: "English",
  },
  "Billing and Payment": {
    cardNumber: "",
    expiry: "",
    cvv: "",
    billingAddress: "",
  },
  "Account Settings": {
    password: "",
    confirmPassword: "",
    twoFactor: false,
  },
};

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Basic Information");
  const [avatar, setAvatar] = useState("/avatar.jpg");
  const [avatarFile, setAvatarFile] = useState(null);
  const [forms, setForms] = useState(initialForms);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForms((prev) => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setAvatar(ev.target?.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "Account Settings" && forms["Account Settings"].password !== forms["Account Settings"].confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (activeTab === "Basic Information" && avatarFile) {
      console.log("Uploading avatar:", avatarFile);
    }
    console.log("Submitting:", { [activeTab]: forms[activeTab] });
    alert("Saved!");
  };

  const renderFormFields = () => {
    switch (activeTab) {
      case "Basic Information":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div > 
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Company/Organization Name
              </label>
              <input
                type="text"
                name="company"
                placeholder="Your company"
                value={forms["Basic Information"].company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="organization"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">Location</label>
              <input
                type="text"
                name="location"
                placeholder="United States"
                value={forms["Basic Information"].location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="country"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+12 345 67890943"
                value={forms["Basic Information"].phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="tel"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="jondoe@abcd.com"
                value={forms["Basic Information"].email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="email"
              />
            </div>
          </div>
        );
      case "About":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2 bg-white">Bio</label>
              <textarea
                name="bio"
                placeholder="Tell us about yourself..."
                value={forms["About"].bio}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">Website</label>
              <input
                type="url"
                name="website"
                placeholder="https://yourwebsite.com"
                value={forms["About"].website}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
              />
            </div>
            <div >
              <label className="block text-sm font-semibold text-black mb-2 bg-white">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/yourprofile"
                value={forms["About"].linkedin}
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
              <label className="block text-sm font-semibold text-black mb-2 bg-white">Language</label>
              <select
                name="language"
                value={forms["Preferences"].language}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2 text-black font-semibold bg-white">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={forms["Preferences"].notifications}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Enable Notifications
              </label>
              <label className="flex items-center gap-2 text-black font-semibold bg-white">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={forms["Preferences"].newsletter}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Subscribe to Newsletter
              </label>
            </div>
          </div>
        );
      case "Billing and Payment":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={forms["Billing and Payment"].cardNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                maxLength={19}
                inputMode="numeric"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">Expiry</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={forms["Billing and Payment"].expiry}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                maxLength={5}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">CVV</label>
              <input
                type="password"
                name="cvv"
                placeholder="123"
                value={forms["Billing and Payment"].cvv}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                maxLength={4}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">Billing Address</label>
              <input
                type="text"
                name="billingAddress"
                placeholder="123 Main St, City, Country"
                value={forms["Billing and Payment"].billingAddress}
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
              <label className="block text-sm font-semibold text-black mb-2 bg-white">New Password</label>
              <input
                type="password"
                name="password"
                placeholder="New password"
                value={forms["Account Settings"].password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="new-password"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={forms["Account Settings"].confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="new-password"
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="twoFactor"
                checked={forms["Account Settings"].twoFactor}
                onChange={handleChange}
                className="accent-blue-600"
              />
              <span className="text-black font-semibold bg-white">Enable Two-Factor Authentication</span>
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
                >
                  <svg className="w-6 h-6 mr-2 -ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Save Changes
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