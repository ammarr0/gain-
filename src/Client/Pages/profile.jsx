"use client";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const ProfilePage = () => {
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const [tab, setTab] = useState("basic");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [form, setForm] = useState({
    basic: {
      avatarUrl: "",
      companyName: "",
      location: "",
      phone: "",
      email: "",
    },
    about: {
      aboutCompany: "",
      website: "",
      email: "",
    },
    preferences: {
      language: "",
      timezone: "",
      notifications: "",
      privacy: "",
    },
    billing: {
      billingName: "",
      country: "",
      address: "",
      city: "",
      zip: "",
      vat: "",
    },
    account: {
      fullName: "",
      username: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Fetch user data and populate form
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getCookie("access_token");
        if (!token) {
          setLoading(false);
          return;
        }
        const res = await fetch("https://gain-b7ea8e7de810.herokuapp.com/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        const userData = Array.isArray(data) ? data[0] : data;
        setUser(userData);
        setForm({
          basic: {
            avatarUrl: userData.image || "",
            companyName: userData.company_name || `${userData.first_name || ""} ${userData.last_name || ""}`.trim() || userData.email || "",
            location: userData.country || "",
            phone: userData.phone || "",
            email: userData.email || "",
          },
          about: {
            aboutCompany: userData.about || "",
            website: userData.website || "",
            email: userData.email || "",
          },
          preferences: {
            language: userData.language || "",
            timezone: userData.timezone || "",
            notifications: userData.notifications || "",
            privacy: userData.privacy || "",
          },
          billing: {
            billingName: userData.billing_name || "",
            country: userData.country || "",
            address: userData.address || "",
            city: userData.city || "",
            zip: userData.zip || "",
            vat: userData.vat || "",
          },
          account: {
            fullName: `${userData.first_name || ""} ${userData.last_name || ""}`.trim() || "",
            username: userData.username || "",
            newPassword: "",
            confirmPassword: "",
          },
        });
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleChange =
    (section, field) =>
    (e) => {
      const value = e.target.value;
      setForm((prev) => ({
        ...prev,
        [section]: { ...prev[section], [field]: value },
      }));
    };

  const handleAvatarPick = () => fileRef.current?.click();
  const onAvatarFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setForm((prev) => ({
      ...prev,
      basic: { ...prev.basic, avatarUrl: url },
    }));
  };

  const handleSave = () => {
    // TODO: send `form` to your backend
    console.log("Saving form payload:", form);
    alert("Saved (console has payload). Hook this to your API.");
  };

  const NavItem = ({ id, label }) => {
    const active = tab === id;
    return (
      <button
        onClick={() => setTab(id)}
        aria-current={active ? "page" : undefined}
        className={[
          "w-full text-left px-3 py-3 text-sm transition border-t last:border-b border-gray-200",
          active ? "font-semibold text-gray-900" : "text-gray-600 hover:text-gray-900",
        ].join(" ")}
      >
        {label}
      </button>
    );
  };

  const Input = ({ section, field, label, placeholder, type = "text" }) => (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-800">{label}</span>
      <input
        type={type}
        value={form[section][field]}
        onChange={handleChange(section, field)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );

  const Textarea = ({ section, field, label, placeholder, rows = 6 }) => (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-800">{label}</span>
      <textarea
        rows={rows}
        value={form[section][field]}
        onChange={handleChange(section, field)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 resize-none"
      />
    </label>
  );

  const Header = () => (
    <>
      <h1 className="text-[22px] sm:text-2xl font-semibold text-gray-900">Your Profile</h1>
      <p className="mt-1 text-sm text-gray-600">
        Manage your profile and settings to maximize your experience on the platform.
      </p>
    </>
  );

  const BasicInformation = () => (
    <div className="pt-6">
      {/* Avatar + label */}
      <div className="flex items-center gap-4 sm:gap-6">
        <img
          src={form.basic.avatarUrl}
          alt="Profile"
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-gray-300"
        />
        <div>
          <button onClick={handleAvatarPick} className="text-left">
            <p className="text-sm font-semibold text-gray-900">Profile Picture</p>
            <p className="text-xs text-gray-600 mt-1 underline">Click here to change</p>
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={onAvatarFile}
            className="hidden"
          />
        </div>
      </div>

      {/* Two-column form */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          section="basic"
          field="companyName"
          label="Company/Organization Name"
          placeholder=""
        />
        <Input section="basic" field="location" label="Location" placeholder="" />
        <Input section="basic" field="phone" label="Phone Number" placeholder="" />
        <Input
          section="basic"
          field="email"
          label="Email Address"
          type="email"
          placeholder=""
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );

  const About = () => (
    <div className="pt-6">
      <Textarea
        section="about"
        field="aboutCompany"
        label="About Company"
        placeholder=""
        rows={7}
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input section="about" field="website" label="Website" placeholder="" />
        <Input
          section="about"
          field="email"
          label="Email Address"
          type="email"
          placeholder=""
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );

  const Preferences = () => (
    <div className="pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input section="preferences" field="language" label="Language" placeholder="" />
        <Input section="preferences" field="timezone" label="Timezone" placeholder="" />
        <Input
          section="preferences"
          field="notifications"
          label="Notifications"
          placeholder=""
        />
        <Input section="preferences" field="privacy" label="Privacy" placeholder="" />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );

  const Billing = () => (
    <div className="pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input section="billing" field="billingName" label="Billing Name" placeholder="" />
        <Input section="billing" field="country" label="Country" placeholder="" />
        <Input section="billing" field="address" label="Address" placeholder="" />
        <Input section="billing" field="city" label="City" placeholder="" />
        <Input section="billing" field="zip" label="ZIP / Postal Code" placeholder="" />
        <Input section="billing" field="vat" label="VAT / Tax ID" placeholder="" />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );

  const Account = () => (
    <div className="pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input section="account" field="fullName" label="Full Name" placeholder="" />
        <Input section="account" field="username" label="Username" placeholder="" />
        <Input
          section="account"
          field="newPassword"
          label="New Password"
          placeholder=""
          type="password"
        />
        <Input
          section="account"
          field="confirmPassword"
          label="Confirm Password"
          placeholder=""
          type="password"
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSave}
          className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );

  const Content = () => {
    switch (tab) {
      case "basic":
        return <BasicInformation />;
      case "about":
        return <About />;
      case "preferences":
        return <Preferences />;
      case "billing":
        return <Billing />;
      case "account":
        return <Account />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white text-black">
        <span className="text-xl font-semibold">Loading...</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white text-black">
        <span className="text-xl font-semibold">User not found or not logged in.</span>
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
        <Header />
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-[220px,1fr] gap-8">
          {/* Left nav */}
          <nav className="md:pt-1">
            <div className="border-y border-gray-200">
              <NavItem id="basic" label="Basic Information" />
              <NavItem id="about" label="About" />
              <NavItem id="preferences" label="Preferences" />
              <NavItem id="billing" label="Billing and Payment" />
              <NavItem id="account" label="Account Settings" />
            </div>
          </nav>

          {/* Right panel */}
          <section>
            <Content />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
