"use client";

import React, { useState } from "react";

const steps = [
  "Personal Information",
  "Resume & Cover Letter",
  "Additional Questions",
  "Review & Submit",
];

const initialForms = {
  "Personal Information": {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    profilePicture: null,
    profilePictureUrl: "/avatar.jpg",
  },
  "Resume & Cover Letter": {
    resume: null,
    resumeName: "",
    coverLetter: "",
  },
  "Additional Questions": {
    q1: "",
    q2: "",
    q3: "",
  },
};

const ApplyToJobPage = () => {
  const [activeStep, setActiveStep] = useState("Personal Information");
  const [forms, setForms] = useState(initialForms);

  // Handle input changes for all steps
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "profilePicture") {
        const file = files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          setForms((prev) => ({
            ...prev,
            [activeStep]: {
              ...prev[activeStep],
              profilePicture: file,
              profilePictureUrl: ev.target?.result,
            },
          }));
        };
        reader.readAsDataURL(file);
      } else if (name === "resume") {
        const file = files?.[0];
        setForms((prev) => ({
          ...prev,
          [activeStep]: {
            ...prev[activeStep],
            resume: file,
            resumeName: file ? file.name : "",
          },
        }));
      }
    } else {
      setForms((prev) => ({
        ...prev,
        [activeStep]: {
          ...prev[activeStep],
          [name]: value,
        },
      }));
    }
  };

  // Navigation
  const stepIndex = steps.indexOf(activeStep);
  const goToStep = (step) => setActiveStep(step);
  const goNext = () => {
    if (stepIndex < steps.length - 1) setActiveStep(steps[stepIndex + 1]);
  };
  const goBack = () => {
    if (stepIndex > 0) setActiveStep(steps[stepIndex - 1]);
  };

  // Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (activeStep !== "Review & Submit") {
      goNext();
      return;
    }
    // Final submission logic
    // Here you would send the forms data to your backend
    alert("Application submitted!");
    // Optionally reset form
    setForms(initialForms);
    setActiveStep(steps[0]);
  };

  // Render form fields for each step
  const renderFormFields = () => {
    switch (activeStep) {
      case "Personal Information":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={forms["Personal Information"].firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="given-name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={forms["Personal Information"].lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="family-name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                value={forms["Personal Information"].email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 234 567 8901"
                value={forms["Personal Information"].phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="tel"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="City, Country"
                value={forms["Personal Information"].location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white"
                autoComplete="address-level2"
                required
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-8 mt-4">
              <label htmlFor="profilePicture" className="cursor-pointer group relative">
                <img
                  src={forms["Personal Information"].profilePictureUrl}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-lg transition-transform group-hover:scale-105"
                />
                <input
                  id="profilePicture"
                  name="profilePicture"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
              <div>
                <p className="text-lg font-bold text-black bg-white">Profile Picture</p>
                <p className="text-xs text-gray-500 bg-white">Click the image to upload (optional)</p>
                {forms["Personal Information"].profilePicture && (
                  <span className="text-xs text-gray-500 bg-white">Image ready to upload</span>
                )}
              </div>
            </div>
          </div>
        );
      case "Resume & Cover Letter":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Upload Resume <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                required
              />
              {forms["Resume & Cover Letter"].resumeName && (
                <span className="text-xs text-gray-500 bg-white mt-1 inline-block">
                  {forms["Resume & Cover Letter"].resumeName}
                </span>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Cover Letter <span className="text-gray-400">(optional)</span>
              </label>
              <textarea
                name="coverLetter"
                placeholder="Write a brief cover letter..."
                value={forms["Resume & Cover Letter"].coverLetter}
                onChange={handleChange}
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white resize-none"
              />
            </div>
          </div>
        );
      case "Additional Questions":
        return (
          <div className="grid grid-cols-1 gap-8 w-full">
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Why are you interested in this position?
              </label>
              <textarea
                name="q1"
                placeholder="Your answer..."
                value={forms["Additional Questions"].q1}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white resize-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                What relevant experience do you have?
              </label>
              <textarea
                name="q2"
                placeholder="Your answer..."
                value={forms["Additional Questions"].q2}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white resize-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2 bg-white">
                Anything else you'd like us to know?
              </label>
              <textarea
                name="q3"
                placeholder="Your answer..."
                value={forms["Additional Questions"].q3}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow shadow-sm bg-white resize-none"
              />
            </div>
          </div>
        );
      case "Review & Submit":
        return (
          <div className="space-y-8 w-full">
            <div>
              <h3 className="text-lg font-bold mb-2">Personal Information</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <span className="font-semibold">Name:</span>{" "}
                  {forms["Personal Information"].firstName} {forms["Personal Information"].lastName}
                </li>
                <li>
                  <span className="font-semibold">Email:</span> {forms["Personal Information"].email}
                </li>
                <li>
                  <span className="font-semibold">Phone:</span> {forms["Personal Information"].phone}
                </li>
                <li>
                  <span className="font-semibold">Location:</span> {forms["Personal Information"].location}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Resume & Cover Letter</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <span className="font-semibold">Resume:</span>{" "}
                  {forms["Resume & Cover Letter"].resumeName || "Not uploaded"}
                </li>
                <li>
                  <span className="font-semibold">Cover Letter:</span>{" "}
                  {forms["Resume & Cover Letter"].coverLetter
                    ? <span className="text-gray-900">Provided</span>
                    : <span className="text-gray-400">Not provided</span>}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Additional Questions</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <span className="font-semibold">Interest:</span> {forms["Additional Questions"].q1}
                </li>
                <li>
                  <span className="font-semibold">Experience:</span> {forms["Additional Questions"].q2}
                </li>
                <li>
                  <span className="font-semibold">Other:</span> {forms["Additional Questions"].q3 || <span className="text-gray-400">N/A</span>}
                </li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white px-0 py-10 text-gray-900 font-sans w-full">
      <div className="w-full max-w-4xl mx-auto">
        <header className="mb-10 w-full">
          <h1 className="text-4xl font-extrabold text-black tracking-tight w-full bg-white">
            Apply to Job
          </h1>
          <p className="text-lg text-black mt-2 mb-8 w-full bg-white">
            Complete the application below to apply for this position.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <aside className="w-full lg:w-1/4 border rounded-2xl p-6 mb-8 lg:mb-0 bg-white shadow-md">
            <ul className="space-y-2 text-base font-semibold text-black">
              {steps.map((step, idx) => (
                <li
                  key={step}
                  onClick={() => {
                    // Only allow going back to previous steps or current
                    if (idx <= stepIndex) goToStep(step);
                  }}
                  className={`flex items-center gap-2 pl-4 py-3 rounded-lg transition-all duration-200 cursor-pointer w-full relative group
                    ${
                      step === activeStep
                        ? "bg-blue-600 text-white border-l-4 border-blue-700 shadow-lg"
                        : idx < stepIndex
                        ? "hover:bg-blue-100 border-l-4 border-blue-200 text-blue-700"
                        : "border-l-4 border-transparent text-gray-400 cursor-not-allowed"
                    }
                  `}
                  style={idx > stepIndex ? { pointerEvents: "none", opacity: 0.6 } : {}}
                >
                  {step === activeStep && (
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-1"></span>
                  )}
                  <span className="z-10">{step}</span>
                </li>
              ))}
            </ul>
          </aside>
          <main className="w-full lg:w-3/4 space-y-8">
            <form
              onSubmit={onSubmit}
              className="bg-white rounded-2xl p-10 shadow-md w-full animate-fade-in"
              autoComplete="off"
            >
              {renderFormFields()}
              <div className="mt-10 flex justify-between w-full gap-4">
                <button
                  type="button"
                  className="w-1/2 md:w-auto inline-flex items-center justify-center rounded-lg bg-gray-200 px-8 py-3 text-gray-700 text-lg font-bold shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition disabled:opacity-50"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 md:w-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-white text-lg font-bold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  {activeStep === "Review & Submit" ? (
                    <>
                      <svg className="w-6 h-6 mr-2 -ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Submit Application
                    </>
                  ) : (
                    <>
                      Next
                      <svg className="w-6 h-6 ml-2 -mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
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

export default ApplyToJobPage;