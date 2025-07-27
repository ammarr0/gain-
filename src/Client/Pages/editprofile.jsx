"use client";

import React, { useState } from "react";

const sidebarItems = [
  "Basic Information",
  "About",
  "Preferences",
  "Billing and Payment",
  "Account Settings",
];

const ProfilePage = () => {
  const [avatar, setAvatar] = useState("/avatar.jpg");
  const [form, setForm] = useState({
    company: "",
    location: "United States",
    phone: "+12 345 67890943",
    email: "jondoe@abcd.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setAvatar(ev.target?.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send to API
    console.log("Submitting:", { form });
    alert("Saved!");
  };

  return (
    <div className="min-h-screen bg-white px-0 py-10 text-gray-900 font-sans w-full">
      <div className="w-full mx-auto">
        {/* Page Title */}
        <header className="mb-10 w-full">
          <h1 className="text-3xl font-bold text-black tracking-tight w-full bg-white">Your Profile</h1>
          <p className="text-base text-black mt-2 mb-8 w-full bg-white">
            Manage your profile and settings to maximize your experience on the platform.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-10 w-full">
          {/* Sidebar Tabs */}
          <aside className="w-full lg:w-1/4 border rounded-xl p-6 mb-8 lg:mb-0 bg-white shadow-sm">
            <ul className="space-y-2 text-base font-medium text-black">
              {sidebarItems.map((item) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 pl-4 py-2 rounded-lg transition-colors duration-150 cursor-pointer w-full ${
                    item === "Basic Information"
                      ? "bg-blue-600 text-white border-l-4 border-blue-700 shadow"
                      : "hover:bg-blue-100 border-l-4 border-transparent"
                  }`}
                >
                  {item === "Basic Information" && (
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-1"></span>
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Form Section */}
          <main className="w-full lg:w-3/4 space-y-8">
            {/* Profile Picture */}
            <div className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-sm w-full">
              <label htmlFor="avatar" className="cursor-pointer group relative">
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-md transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 right-0 bg-black rounded-full p-1 border-2 border-white shadow group-hover:bg-gray-800 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2a2.828 2.828 0 11-4-4l6 6a2.828 2.828 0 01-4 4z" />
                  </svg>
                </div>
              </label>
              <div>
                <p className="text-base font-semibold text-black bg-white">Profile Picture</p>
                <p className="text-xs text-gray-500 bg-white">Click the image to change</p>
                <input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            </div>

            {/* Form Inputs */}
            <form onSubmit={onSubmit} className="bg-white rounded-xl p-8 shadow-sm w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2 bg-white">
                    Company/Organization Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your name"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black transition-shadow shadow-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2 bg-white">Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="United States"
                    value={form.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black transition-shadow shadow-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2 bg-white">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+12 345 67890943"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black transition-shadow shadow-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2 bg-white">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jondoe@abcd.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-black transition-shadow shadow-sm bg-white"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end w-full">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white text-base font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Save Changes
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
