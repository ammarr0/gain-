// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Simple circle loader centered on the page
const PrimaryCircleLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
    <span
      className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      aria-label="Loading"
    />
  </div>
)

// Helper to read a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

const ProfilePage = () => {
  const { id } = useParams()             // grab the user ID from URL
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchUser() {
      setLoading(true)
      setError(null)
      try {
        const token = getCookie('access_token')
        const res = await fetch(
          `https://gain-b7ea8e7de810.herokuapp.com/users/detail/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        )
        if (!res.ok) throw new Error('Failed to load profile')
        const json = await res.json()
        setUser(json.data || json)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    if (id) fetchUser()
  }, [id])

  if (loading) return <PrimaryCircleLoader />
  if (error)
    return (
      <div className="p-8 text-center text-red-600">
        Error: {error}
      </div>
    )
  if (!user)
    return (
      <div className="p-8 text-center text-gray-600">
        No profile found.
      </div>
    )

  const fullName = `${user.first_name || ''} ${user.last_name || ''}`.trim()
  const role = user.role || '—'
  const experience = user.experience ?? 'N/A'
  const rate =
    user.rate !== undefined && user.rate !== null
      ? `₹${user.rate}/hr`
      : 'N/A'
  const location = user.city || user.country || 'Unknown'
  const availability = user.availability || 'N/A'
  const about = user.description || user.email || 'No description.'

  return (
    <div className="w-full">
      <div className="mx-auto max-w-5xl p-6">
        <div className="w-full p-6 sm:p-8 bg-white rounded-2xl shadow">
          {/* Header */}
          <div className="flex items-center gap-6 mb-6 sm:mb-8">
            <img
              src={
                user.image?.startsWith('http')
                  ? user.image
                  : 'https://via.placeholder.com/200'
              }
              alt={`${user.first_name || 'User'} avatar`}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-gray-200"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/200'
              }}
            />
            <div className="min-w-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 truncate">
                {fullName || 'Unnamed Talent'}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-gray-600">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
                  {role}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="truncate">{location}</span>
              </div>
            </div>
          </div>

          {/* Subtle divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-6 sm:mb-8" />

          {/* Inline stats (no cards) */}
          <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 text-sm">
            <li className="flex items-baseline gap-2">
              <span className="text-gray-500">Experience:</span>
              <span className="font-semibold text-gray-900">{experience} yrs</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-gray-500">Rate:</span>
              <span className="font-semibold text-gray-900">{rate}</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-gray-500">Availability:</span>
              <span className="font-semibold text-gray-900">{availability}</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-gray-500">Location:</span>
              <span className="font-semibold text-gray-900">{location}</span>
            </li>
          </ul>

          {/* About */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900">About</h2>
            <p className="mt-2 leading-7 text-gray-700">
              {about}
            </p>
          </section>

          {/* Details (simple list, no cards) */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Details</h2>
            <div className="mt-2 divide-y divide-gray-100">
              <div className="py-3 flex flex-wrap items-baseline gap-2">
                <span className="w-40 text-gray-500">Experience</span>
                <span className="font-medium text-gray-900">{experience} yrs</span>
              </div>
              <div className="py-3 flex flex-wrap items-baseline gap-2">
                <span className="w-40 text-gray-500">Rate</span>
                <span className="font-medium text-gray-900">{rate}</span>
              </div>
              <div className="py-3 flex flex-wrap items-baseline gap-2">
                <span className="w-40 text-gray-500">Location</span>
                <span className="font-medium text-gray-900">{location}</span>
              </div>
              <div className="py-3 flex flex-wrap items-baseline gap-2">
                <span className="w-40 text-gray-500">Availability</span>
                <span className="font-medium text-gray-900">{availability}</span>
              </div>

              {/* Preserve original optional fields */}
              {user.linkedin && (
                <div className="py-3 flex flex-wrap items-baseline gap-2">
                  <span className="w-40 text-gray-500">LinkedIn</span>
                  <a
                    href={user.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 underline break-all hover:no-underline"
                  >
                    {user.linkedin}
                  </a>
                </div>
              )}

              {user.website && (
                <div className="py-3 flex flex-wrap items-baseline gap-2">
                  <span className="w-40 text-gray-500">Website</span>
                  <a
                    href={user.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 underline break-all hover:no-underline"
                  >
                    {user.website}
                  </a>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage