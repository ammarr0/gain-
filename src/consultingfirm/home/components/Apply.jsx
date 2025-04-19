import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  MapPinIcon,
  ClockIcon,
  CalendarIcon,
  TagIcon,
} from 'lucide-react'

const Apply = () => {
  // Hooks
  const location = useLocation()
  const navigate = useNavigate()

  // States for the sidebar and other logic
  const [rateChoice, setRateChoice] = useState('')
  const [customRate, setCustomRate] = useState('')
  const [timezoneRequirement, setTimezoneRequirement] = useState('')
  const [availability, setAvailability] = useState('')
  const [calendarURL, setCalendarURL] = useState('')
  const [resumeFile, setResumeFile] = useState(null)
  const [attachedFiles, setAttachedFiles] = useState([])

  // -- NEW MAIN FORM STATES (5 questions) --
  const [questionOne, setQuestionOne] = useState('')
  const [questionTwo, setQuestionTwo] = useState('')
  const [questionThree, setQuestionThree] = useState('')
  const [questionFour, setQuestionFour] = useState('')
  const [questionFive, setQuestionFive] = useState('')

  // Form Validity
  const [isFormValid, setIsFormValid] = useState(false)

  // Grab job data from route
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

  // Check form validity
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

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      // Sidebar data
      rateChoice: rateChoice === 'custom' ? customRate : rateChoice,
      timezoneRequirement,
      availability,
      calendarURL,
      resumeFile,
      attachedFiles,
      // New five questions
      questionOne,
      questionTwo,
      questionThree,
      questionFour,
      questionFive,
    }
    console.log('Form submitted:', payload, match)
  }

  // Resume logic
  const handleResumeChange = (e) => {
    if (e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const removeResume = () => {
    setResumeFile(null)
  }

  // Additional file attachments
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

  if (!match) {
    return (
      <div className="p-2">
        <p className="text-gray-700">No job data found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-12">
      <div className="mx-auto w-full px-4">

        {/* ---------- JOB DETAILS CARD ---------- */}
        <div className="rounded-lg px-24 w-full p-3 h-[250px] mb-4 ">
          {/* Back Button */}
          <div className="mb-2">
            <button
              onClick={() => navigate(-1)}
              className="text-blue-600 hover:underline mb-8"
            >
              &larr; Back to Home
            </button>
          </div>

          <div className="flex justify-between items-start gap-4 mb-4">
            <div className="flex items-center gap-4">
              {logo && (
                <img
                  src={logo}
                  alt={company}
                  className="w-12 h-12 object-contain"
                />
              )}
              <p className="text-md text-gray-700">{company}</p>
              <h1 className="text-xl font-semibold text-gray-900 mb-1">
                | {role}
              </h1>
            </div>

            <div className="flex">
              <button
                onClick={() => navigate(-1)}
                className="mr-2 px-4 py-2 bg-[#030923] text-white rounded-lg hover:bg-blue-600"
              >
                Go back
              </button>
              <button
                onClick={handleSubmit}
                className="px-3 py-2 bg-[#030923] text-white  rounded-lg rounded hover:bg-blue-600"
              >
                Send application
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-7 text-sm text-gray-700">
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

        {/* ---------- BELOW JOB DATA: SIDEBAR LEFT, FORM RIGHT ---------- */}
        <div className="flex w-full gap-4">
          {/* SIDEBAR */}
          <aside className="w-[380px] bg-white shadow-xl p-3 rounded-2xl h-fit">

            {/* Hourly Rate */}
            <div className="mb-6 ">
              <label className="block text-lg font-semibold mb-1">
                What is your hourly rate for this job?*
              </label>
              <p className="text-sm text-gray-500 mb-2">
                The client has input a budget of {budgetRange}
              </p>
              <div className="flex flex-wrap gap-2">
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
                      className={`px-3 py-2 rounded text-sm shadow-lg ${
                        rateChoice === label
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-white text-gray-700 hover:shadow-md'
                      }`}
                    >
                      {label}
                    </div>
                  </label>
                ))}
                {/* Custom Option */}
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
                    className={`px-3 py-2 rounded text-sm shadow-lg ${
                      rateChoice === 'custom'
                        ? 'bg-blue-50 text-blue-600'
                        : 'bg-white text-gray-700 hover:shadow-md'
                    }`}
                  >
                    Custom
                  </div>
                </label>
              </div>
              {rateChoice === 'custom' && (
                <div className="mt-2">
                  <input
                    type="number"
                    className="w-full px-3 py-2 rounded text-sm"
                    placeholder="Enter your custom rate"
                    value={customRate}
                    onChange={(e) => setCustomRate(e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Timezone Requirement */}
            <div className="mb-6 ">
              <label className="block text-lg font-semibold mb-1">
                Do you meet the timezone requirement for this job?*
              </label>
              <p className="text-xs text-gray-500 mb-2">
                {timezoneRequirementDescription}
              </p>
              <div className="flex gap-3">
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
                      className={`px-4 py-2 rounded text-sm shadow-lg ${
                        timezoneRequirement === option
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-white text-gray-700 hover:shadow-md'
                      }`}
                    >
                      {option}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mb-6 ">
              <label className="block text-lg font-semibold mb-1">
                When are you available to start?*
              </label>
              <div className="flex flex-wrap gap-2">
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
                      className={`px-3 py-2 rounded text-sm shadow-lg ${
                        availability === option
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-white text-gray-700 hover:shadow-md'
                      }`}
                    >
                      {option}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Booking Calendar URL */}
            <div className="mb-6 ">
              <label className="block text-lg font-semibold mb-1">
                Add your booking calendar URL
              </label>
              <input
                type="url"
                className="w-full px-3 py-2 shadow-md rounded text-sm"
                placeholder="https://calendly.com/..."
                value={calendarURL}
                onChange={(e) => setCalendarURL(e.target.value)}
              />
            </div>

            {/* Resume Upload */}
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-1">
                Include your resume*
              </label>
              {resumeFile ? (
                <div className="bg-yellow-50 text-yellow-800 text-sm p-2 rounded flex items-center justify-between">
                  <span>{resumeFile.name}</span>
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
                <div className="mt-2">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="text-sm text-gray-600"
                    onChange={handleResumeChange}
                  />
                </div>
              )}
            </div>

            {/* Additional Attachments */}
            <div className="mb-6 ">
              <label className="block text-lg font-semibold mb-1">
                Would you like to attach any files?
              </label>
              <div className="mt-2 p-4 rounded-lg text-center text-sm text-gray-500 shadow-lg bg-[#EDEEFF] border-2 border-dotted border-[#B5B9FF]">
                <div className="mb-2 text-xl text-blue-500">+</div>
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
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleAdditionalFiles}
                />
              </div>
              {attachedFiles.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-gray-600">
                  {attachedFiles.map((file, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between bg-[#B5B9FF] rounded px-2 py-1 shadow-lg"
                    >
                      <span>{file.name}</span>
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

          {/* MAIN FORM ON RIGHT (REPLACED WITH THE 5 NEW QUESTIONS) */}
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Apply for this position
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Question #1 */}
              <div className="">
                <label className="block text-md font-medium text-gray-700 mb-1">
                  What makes you a great fit for this role? We’d love to hear about any experience you have that aligns with the job description!
                </label>
                <textarea
                  rows={5}
                  value={questionOne}
                  onChange={(e) => setQuestionOne(e.target.value)}
                  className="w-full rounded-xl p-3 text-sm shadow-md"
                />
              </div>

              {/* Question #2 */}
              <div className="">
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Please note: The maximum hourly rate may vary depending on the candidate’s country of residence due to Employer of Record (EOR) fees. These fees, which cover essential services such as payroll processing, benefits administration, and compliance with local employment laws, are country-specific and can impact the final MAX rate offered. Please see range in job description.
                </label>
                <textarea
                  rows={5}
                  value={questionTwo}
                  onChange={(e) => setQuestionTwo(e.target.value)}
                  className="w-full rounded-xl p-3 text-sm shadow-md"
                />
              </div>

              {/* Question #3 */}
              <div className="">
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Please Note: This is a 4-month W2/EOR contract with the possibility of extension. All candidates must complete ID verification and a background check. The anticipated start date is the first week of January. Candidates must be able to overlap at least 5 hours with Pacific Time (PST).
                </label>
                <textarea
                  rows={5}
                  value={questionThree}
                  onChange={(e) => setQuestionThree(e.target.value)}
                  className="w-full rounded-xl p-3 text-sm shadow-md"
                />
              </div>

              {/* Question #4 */}
              <div className="">
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Reddit collaborates with VNDLY, their Vendor Management System (VMS), to gather essential candidate information. If you’re selected for this role, we’ll reach out to you via email to request any additional details needed. To ensure security, please make sure to reply only to emails from the @usebraintrust.com domain.
                </label>
                <textarea
                  rows={5}
                  value={questionFour}
                  onChange={(e) => setQuestionFour(e.target.value)}
                  className="w-full rounded-xl p-3 text-sm shadow-md"
                />
              </div>

              {/* Question #5 */}
              <div className="">
                <label className="block text-md font-medium text-gray-700 mb-1">
                  Please share your portfolio + password
                </label>
                <textarea
                  rows={5}
                  value={questionFive}
                  onChange={(e) => setQuestionFive(e.target.value)}
                  className="w-full rounded-xl p-3 text-sm shadow-md"
                />
              </div>

              

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apply
