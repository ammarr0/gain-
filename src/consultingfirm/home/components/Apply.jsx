import React, { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  MapPinIcon,
  ClockIcon,
  CalendarIcon,
  TagIcon,
} from 'lucide-react'

const Apply = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [rateChoice, setRateChoice] = useState('')
  const [customRate, setCustomRate] = useState('')
  const [timezoneRequirement, setTimezoneRequirement] = useState('')
  const [availability, setAvailability] = useState('')
  const [calendarURL, setCalendarURL] = useState('')
  const [resumeFile, setResumeFile] = useState(null)
  const [attachedFiles, setAttachedFiles] = useState([])

  const [questionOne, setQuestionOne] = useState('')
  const [questionTwo, setQuestionTwo] = useState('')
  const [questionThree, setQuestionThree] = useState('')
  const [questionFour, setQuestionFour] = useState('')
  const [questionFive, setQuestionFive] = useState('')

  const [isFormValid, setIsFormValid] = useState(false)

  const fileInputRef = useRef(null)

  const { match } = location.state || {}
  const {
    company = 'Unknown Company',
    role = 'No role specified',
    projectLocation = 'No location specified',
    logo = '',
    location: jobLocation = 'Not specified',
    hours = 'N/A',
    projectType = 'N/A',
    rate = 'N/A',
    postedDaysAgo = 25,
    budgetRange = '$90 - $97/hr',
    predefinedRates = ['$90', '$95', '$100'],
    timezoneRequirementDescription = 'You must be able to overlap a full work day within PST/PDT timezones.',
    availabilityOptions = ['Right away', 'Two weeks after the offer', 'After a specific date'],
  } = match || {}

  useEffect(() => {
    if (
      questionOne &&
      questionTwo &&
      questionThree &&
      questionFour &&
      questionFive
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [questionOne, questionTwo, questionThree, questionFour, questionFive])

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      rateChoice: rateChoice === 'custom' ? customRate : rateChoice,
      timezoneRequirement,
      availability,
      calendarURL,
      resumeFile,
      attachedFiles,
      questionOne,
      questionTwo,
      questionThree,
      questionFour,
      questionFive,
    }
    console.log('Form submitted:', payload, match)
  }

  const handleResumeChange = (e) => {
    if (e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const removeResume = () => {
    setResumeFile(null)
  }

  const handleAdditionalFiles = (e) => {
    const files = Array.from(e.target.files)
    setAttachedFiles((prev) => [...prev, ...files])
  }

  const removeAttachedFile = (index) => {
    setAttachedFiles((prev) => {
      const updated = [...prev]
      updated.splice(index, 1)
      return updated
    })
  }

  // if (!match) {
  //   return (
  //     <div className="p-2">
  //       <p className="text-gray-700">No job data found.</p>
  //     </div>
  //   )
  // }

  // Make the white
  return (
    <div className="min-h-screen pt-12 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4">
        {/* Header Card */}
        <div className="rounded-2xl px-12 w-full py-6 mb-8 bg-white shadow-2xl border border-[#EDEEFF]">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
              >
                <span className="text-lg">&larr;</span> Back to Home
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-[#030923] text-white rounded-lg hover:bg-blue-600 transition-all duration-150 shadow"
              >
                Go back
              </button>
              <button
                onClick={handleSubmit}
                className={`px-4 py-2 bg-[#030923] text-white rounded-lg hover:bg-blue-600 transition-all duration-150 shadow ${
                  !isFormValid ? 'opacity-60 cursor-not-allowed' : ''
                }`}
                disabled={!isFormValid}
              >
                Send application
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {logo && (
              <img
                src={logo}
                alt={company}
                className="w-16 h-16 object-contain rounded-xl border border-[#EDEEFF] bg-white shadow"
              />
            )}
            <div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-gray-900">{company}</p>
                <span className="text-2xl text-gray-300 font-light">|</span>
                <h1 className="text-lg font-medium text-gray-700">{role}</h1>
              </div>
              <div className="flex items-center gap-6 mt-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{jobLocation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4" />
                  <span>{hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{projectType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TagIcon className="w-4 h-4" />
                  <span>{rate}</span>
                </div>
              </div>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <span className="text-xs text-gray-400">
                Posted {postedDaysAgo} days ago
              </span>
              <span className="text-xs text-gray-400">
                Budget: <span className="font-semibold">{budgetRange}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex w-full gap-8">
          {/* Sidebar */}
          <aside className="w-[400px] bg-white shadow-2xl p-6 rounded-2xl h-fit border border-[#EDEEFF]">
            {/* Hourly Rate */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-1">
                What is your hourly rate for this job?*
              </label>
              <p className="text-sm text-gray-500 mb-3">
                The client has input a budget of <span className="font-semibold">{budgetRange}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {predefinedRates.map((label) => (
                  <label key={label} className="cursor-pointer">
                    <input
                      type="radio"
                      name="hourlyRate"
                      value={label}
                      className="hidden"
                      checked={rateChoice === label}
                      onChange={() => {
                        setRateChoice(label)
                        setCustomRate('')
                      }}
                    />
                    <div
                      className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md border transition-all duration-150 ${
                        rateChoice === label
                          ? 'bg-blue-50 text-blue-600 border-blue-400 scale-105'
                          : 'bg-white text-gray-700 border-gray-200 hover:shadow-lg hover:border-blue-200'
                      }`}
                    >
                      {label}
                    </div>
                  </label>
                ))}
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="hourlyRate"
                    value="custom"
                    className="hidden"
                    checked={rateChoice === 'custom'}
                    onChange={() => setRateChoice('custom')}
                  />
                  <div
                    className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md border transition-all duration-150 ${
                      rateChoice === 'custom'
                        ? 'bg-blue-50 text-blue-600 border-blue-400 scale-105'
                        : 'bg-white text-gray-700 border-gray-200 hover:shadow-lg hover:border-blue-200'
                    }`}
                  >
                    Custom
                  </div>
                </label>
              </div>
              {rateChoice === 'custom' && (
                <div className="mt-3">
                  <input
                    type="number"
                    className="w-full px-4 py-2 rounded-lg text-sm border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter your custom rate"
                    value={customRate}
                    onChange={(e) => setCustomRate(e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Timezone Requirement */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-1">
                Do you meet the timezone requirement for this job?*
              </label>
              <p className="text-xs text-gray-500 mb-3">
                {timezoneRequirementDescription}
              </p>
              <div className="flex gap-4">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="cursor-pointer">
                    <input
                      type="radio"
                      name="timezoneRequirement"
                      value={option}
                      className="hidden"
                      checked={timezoneRequirement === option}
                      onChange={() => setTimezoneRequirement(option)}
                    />
                    <div
                      className={`px-5 py-2 rounded-lg text-sm font-medium shadow-md border transition-all duration-150 ${
                        timezoneRequirement === option
                          ? 'bg-blue-50 text-blue-600 border-blue-400 scale-105'
                          : 'bg-white text-gray-700 border-gray-200 hover:shadow-lg hover:border-blue-200'
                      }`}
                    >
                      {option}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-1">
                When are you available to start?*
              </label>
              <div className="flex flex-wrap gap-3">
                {availabilityOptions.map((option) => (
                  <label key={option} className="cursor-pointer">
                    <input
                      type="radio"
                      name="availability"
                      value={option}
                      className="hidden"
                      checked={availability === option}
                      onChange={() => setAvailability(option)}
                    />
                    <div
                      className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md border transition-all duration-150 ${
                        availability === option
                          ? 'bg-blue-50 text-blue-600 border-blue-400 scale-105'
                          : 'bg-white text-gray-700 border-gray-200 hover:shadow-lg hover:border-blue-200'
                      }`}
                    >
                      {option}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Calendar URL */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-1">
                Add your booking calendar URL
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 shadow-md rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="https://calendly.com/..."
                value={calendarURL}
                onChange={(e) => setCalendarURL(e.target.value)}
              />
            </div>

            {/* Resume Upload */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-1">
                Include your resume*
              </label>
              {resumeFile ? (
                <div className="bg-yellow-50 text-yellow-800 text-sm p-3 rounded-lg flex items-center justify-between shadow border border-yellow-200 mt-2">
                  <span className="truncate max-w-[180px]">{resumeFile.name}</span>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      className="text-blue-600 hover:underline text-xs"
                    >
                      Rename
                    </button>
                    <button
                      type="button"
                      className="text-red-600 hover:underline text-xs"
                      onClick={removeResume}
                    >
                      X
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-3">
                  <label className="block w-full cursor-pointer">
                    <div className="w-full px-4 py-2 border-2 border-dashed border-blue-200 rounded-lg text-center text-gray-500 hover:bg-blue-50 transition-all duration-150">
                      <span className="font-medium">Click to upload</span> or drag and drop
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleResumeChange}
                    />
                  </label>
                </div>
              )}
            </div>

            {/* Additional Files */}
            <div className="mb-2">
              <label className="block text-lg font-semibold mb-1">
                Would you like to attach any files?
              </label>
              <div
                className="mt-3 p-5 rounded-xl text-center text-sm text-gray-500 shadow-lg bg-[#EDEEFF] border-2 border-dotted border-[#B5B9FF] cursor-pointer relative"
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
              >
                <div className="mb-2 text-3xl text-blue-500 font-bold">+</div>
                <p className="mb-2">
                  Drag and Drop file or{' '}
                  <span className="text-blue-600 underline cursor-pointer">
                    Browse
                  </span>
                </p>
                <p className="text-xs text-gray-400">
                  Attach up to 3 files, max 10 MB each.
                </p>
                <p className="text-xs text-gray-400">
                  A cover letter is not required.
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleAdditionalFiles}
                />
              </div>
              {attachedFiles.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {attachedFiles.map((file, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between bg-[#B5B9FF] rounded-lg px-3 py-2 shadow"
                    >
                      <span className="truncate max-w-[180px]">{file.name}</span>
                      <button
                        type="button"
                        className="text-red-600 hover:underline text-xs"
                        onClick={() => removeAttachedFile(idx)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>

          {/* Main Form */}
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-2xl border border-[#EDEEFF]">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-3">
              Apply for this position
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  What makes you a great fit for this role? We’d love to hear about any experience you have that aligns with the job description!
                </label>
                <textarea
                  rows={5}
                  value={questionOne}
                  onChange={(e) => setQuestionOne(e.target.value)}
                  className="w-full rounded-xl p-4 text-sm shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Share your relevant experience and skills..."
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Please note: The maximum hourly rate may vary depending on the candidate’s country of residence due to Employer of Record (EOR) fees. These fees, which cover essential services such as payroll processing, benefits administration, and compliance with local employment laws, are country-specific and can impact the final MAX rate offered. Please see range in job description.
                </label>
                <textarea
                  rows={5}
                  value={questionTwo}
                  onChange={(e) => setQuestionTwo(e.target.value)}
                  className="w-full rounded-xl p-4 text-sm shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Acknowledge EOR fees and your understanding..."
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Please Note: This is a 4-month W2/EOR contract with the possibility of extension. All candidates must complete ID verification and a background check. The anticipated start date is the first week of January. Candidates must be able to overlap at least 5 hours with Pacific Time (PST).
                </label>
                <textarea
                  rows={5}
                  value={questionThree}
                  onChange={(e) => setQuestionThree(e.target.value)}
                  className="w-full rounded-xl p-4 text-sm shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Confirm your availability and compliance..."
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Reddit collaborates with VNDLY, their Vendor Management System (VMS), to gather essential candidate information. If you’re selected for this role, we’ll reach out to you via email to request any additional details needed. To ensure security, please make sure to reply only to emails from the @usebraintrust.com domain.
                </label>
                <textarea
                  rows={5}
                  value={questionFour}
                  onChange={(e) => setQuestionFour(e.target.value)}
                  className="w-full rounded-xl p-4 text-sm shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Acknowledge the process and security note..."
                />
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700 mb-2">
                  Please share your portfolio + password
                </label>
                <textarea
                  rows={5}
                  value={questionFive}
                  onChange={(e) => setQuestionFive(e.target.value)}
                  className="w-full rounded-xl p-4 text-sm shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  placeholder="Portfolio link and password (if any)..."
                />
              </div>
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className={`px-6 py-3 bg-[#030923] text-white rounded-lg hover:bg-blue-600 transition-all duration-150 shadow font-semibold text-lg ${
                    !isFormValid ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                  disabled={!isFormValid}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apply
