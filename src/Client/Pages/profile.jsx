"use client";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaStar } from "react-icons/fa";
import { User as UserIcon, Edit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const defaultUserFields = {
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
  website: "",
  linkedin: "",
  is_disabled: false,
  is_deleted: false,
};

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultUserFields);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getCookie("access_token");
        if (!token) {
          setLoading(false);
          return;
        }
        const res = await fetch("https://gain-b7ea8e7de810.herokuapp.com/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        const fetchedUser = Array.isArray(data) ? data[0] : data;
        setUser({ ...defaultUserFields, ...(fetchedUser || {}) });
      } catch {
        setUser(defaultUserFields);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
    // eslint-disable-next-line
  }, []);

  // Move hooks to top-level, then handle loading and not-logged-in as conditional rendering below
  const {
    image = "",
    first_name = "",
    last_name = "",
    role = "",
    email = "",
    country = "",
    city = "",
    website = "",
    linkedin = "",
    fcm_token = "",
    country_code = "",
    phone_no = "",
    gender = "",
    biography = "",
    emergency_contact = "",
    street = "",
    suite = "",
    post_code = "",
    dob = "",
    is_disabled = false,
    is_deleted = false,
  } = user;

  const fullName = `${first_name} ${last_name}`.trim() || email;
  const rating = 5;
  const earned = "$0";
  const portfolio = [
    {
      title: "Portfolio Website",
      desc: "Personal website/portfolio",
      img: "/portfolio1.jpg",
    },
  ];
  const locations = [country, city, street, suite, post_code].filter(Boolean);
  const skills = [];
  const links = [
    {
      name: "LinkedIn",
      url: linkedin || "#",
      icon: <FaLinkedin className="text-gray-700" />,
    },
    ...(website
      ? [
          {
            name: "Website",
            url: website,
            icon: (
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="9" stroke="#555" strokeWidth="2" />
                <path d="M5 10h10M10 5v10" stroke="#555" strokeWidth="2" />
              </svg>
            ),
          },
        ]
      : []),
  ];
  const completedJobs = [];

  // Form state for editing all fields in one form
  const [form, setForm] = useState({ ...defaultUserFields, ...user });

  useEffect(() => {
    setForm({ ...defaultUserFields, ...user });
    // eslint-disable-next-line
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your API
    // For now, just update the user state to reflect changes
    setUser(form);
    alert("Profile updated (not actually saved to server in this demo).");
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white text-black">
        <span className="text-xl font-semibold">Loading...</span>
      </div>
    );
  }

  if (!user || (!user.email && !user.first_name && !user.last_name)) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white text-black">
        <span className="text-xl font-semibold">User not found or not logged in.</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white px-0 py-0 font-sans text-black">
      {/* Profile Header */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-6 border-b border-gray-200">
        <div className="flex items-center gap-8">
          <div className="relative">
            {form.image ? (
              <img
                src={form.image}
                alt={fullName}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-gray-200 shadow"
              />
            ) : (
              <div className="w-32 h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full border-4 border-gray-200 shadow bg-gray-100">
                <UserIcon size={72} className="text-gray-400" />
              </div>
            )}
            {/* Optionally, allow image upload */}
            {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-black flex items-center gap-3">
              {form.first_name} {form.last_name}
              {form.role && (
                <span className="ml-2 px-3 py-1 bg-gray-100 text-black text-sm rounded-full font-semibold border border-gray-300">
                  {form.role}
                </span>
              )}
            </h1>
            <div className="flex items-center gap-2 mt-3">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              <span className="text-gray-500 text-base ml-2 font-medium">{rating}.0</span>
            </div>
            <p className="text-gray-700 mt-2 text-lg font-medium">{form.role}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button
            type="button"
            className="flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-xl shadow font-semibold text-lg hover:scale-105 hover:shadow-lg transition"
            tabIndex={0}
          >
            <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow"></span>
            Available Now
          </button>
        </div>
      </div>

      {/* Unified Profile Form */}
      <form
        className="w-full max-w-3xl mx-auto mt-10 bg-white rounded-3xl shadow p-8 border border-gray-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Edit Profile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">First Name</label>
            <input
              type="text"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">Phone No</label>
            <input
              type="text"
              name="phone_no"
              value={form.phone_no}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">Country Code</label>
            <input
              type="text"
              name="country_code"
              value={form.country_code}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">Gender</label>
            <input
              type="text"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
          </div>

          {/* Address & Links */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">Street</label>
            <input
              type="text"
              name="street"
              value={form.street}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">Suite</label>
            <input
              type="text"
              name="suite"
              value={form.suite}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">Post Code</label>
            <input
              type="text"
              name="post_code"
              value={form.post_code}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">Website</label>
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />

            <label className="block text-gray-700 font-semibold mb-1">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            />
          </div>
        </div>

        {/* Biography, Emergency, FCM, etc. */}
        <div className="mt-6">
          <label className="block text-gray-700 font-semibold mb-1">Biography</label>
          <textarea
            name="biography"
            value={form.biography}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
            rows={3}
          />

          <label className="block text-gray-700 font-semibold mb-1">Emergency Contact</label>
          <input
            type="text"
            name="emergency_contact"
            value={form.emergency_contact}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          />

          <label className="block text-gray-700 font-semibold mb-1">FCM Token</label>
          <input
            type="text"
            name="fcm_token"
            value={form.fcm_token}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          />

          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="is_disabled"
                checked={form.is_disabled}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="text-gray-700">Is Disabled</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="is_deleted"
                checked={form.is_deleted}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="text-gray-700">Is Deleted</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-xl shadow font-semibold text-lg hover:scale-105 hover:shadow-lg transition"
        >
          Save Profile
        </button>
      </form>

      {/* Portfolio */}
      <div className="w-full max-w-3xl mx-auto mt-12 px-6">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Portfolio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="relative group h-56 bg-gray-100 rounded-2xl shadow overflow-hidden flex flex-col justify-end p-6 hover:scale-105 hover:shadow-lg transition border border-gray-200"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-black mb-1">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Locations */}
      {locations.length > 0 && (
        <div className="w-full max-w-3xl mx-auto mt-12 px-6">
          <div className="bg-white rounded-3xl shadow p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-black flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              Locations
            </h3>
            <div className="flex flex-wrap gap-4">
              {locations.map((loc, idx) => (
                <span
                  key={loc + idx}
                  className="bg-gray-100 text-black px-5 py-2 rounded-full text-base font-semibold shadow hover:bg-gray-200 transition border border-gray-300"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Skills */}
      <div className="w-full max-w-3xl mx-auto mt-12 px-6">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-black px-5 py-2 rounded-full text-base font-semibold shadow hover:bg-gray-200 transition border border-gray-300"
              >
                {skill}
              </span>
            ))
          ) : (
            <span className="text-gray-500">No skills listed.</span>
          )}
        </div>
      </div>

      {/* Linked Accounts */}
      <div className="w-full max-w-3xl mx-auto mt-12 px-6">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Linked Accounts
        </h3>
        <div className="flex gap-8">
          {links.map((site) => (
            <a
              key={site.name}
              href={site.url}
              className="flex items-center gap-2 text-gray-700 hover:text-black font-semibold text-lg transition hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.icon}
              {site.name}
            </a>
          ))}
        </div>
      </div>

      {/* Completed Jobs */}
      <div className="w-full max-w-3xl mx-auto mt-12 px-6 pb-20">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Completed Jobs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {completedJobs.length > 0 ? (
            completedJobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3 border border-gray-200 hover:scale-[1.02] hover:shadow-lg transition"
              >
                <p className="font-semibold text-black text-lg">{job.title}</p>
                <div className="flex items-center gap-1 text-yellow-500 text-xl">
                  {[...Array(job.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-gray-600 text-base ml-2">
                    - {job.reviews} review{job.reviews > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <span className="text-gray-500">No completed jobs.</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
