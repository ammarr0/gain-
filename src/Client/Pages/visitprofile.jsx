import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Loader
const PrimaryCircleLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
    <span
      className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      aria-label="Loading"
    />
  </div>
)

function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

const ProfileField = ({ label, value }) => (
  <div className="py-2 flex flex-wrap items-baseline gap-2">
    <span className="w-44 text-gray-500 font-semibold">{label}</span>
    <span className="font-medium text-gray-900 break-all">{value || <span className="text-gray-400">—</span>}</span>
  </div>
)

const ProfilePage = () => {
  const { id } = useParams()
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

  // Only extract the required fields
  const {
    image,
    last_name,
    // role, // removed
    first_name,
    email_verified,
    email_verified_at,
    biography,
    country,
    website,
    linkedin,
  } = user

  // Compose full name (first + last)
  const fullName = `${first_name || ''} ${last_name || ''}`.trim()

  // Avatar fallback
  const avatarSrc =
    image && image.startsWith('http') && image.length > 8
      ? image
      : 'https://via.placeholder.com/200'

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-10 px-2">
      {/* Profile Header */}
      <div className="w-full flex flex-col items-center">
        <div className="relative mb-4">
          <img
            src={avatarSrc}
            alt={`${first_name || 'User'} avatar`}
            className="w-36 h-36 rounded-full object-cover border-4 border-white shadow"
            onError={e => { e.currentTarget.src = 'https://via.placeholder.com/200' }}
          />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
          {fullName || 'Unnamed User'}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3 text-gray-600 mb-2">
          {/* Removed role badge */}
          {/* <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-base font-semibold text-blue-700 ring-1 ring-blue-200">
            {role || '—'}
          </span>
          <span className="hidden sm:inline text-xl">•</span> */}
          <span className="truncate text-base">{country || '—'}</span>
        </div>
      </div>
      {/* Bio on Top */}
      <div className="w-full max-w-3xl mt-6 mb-10 px-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-1 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
          Bio
        </h2>
        <div className="bg-white border border-blue-100 rounded-lg px-4 py-3 text-gray-800 min-h-[48px] shadow-sm">
          {biography ? (
            <span>{biography}</span>
          ) : (
            <span className="text-gray-400">No bio provided.</span>
          )}
        </div>
      </div>
      {/* Divider */}
      <div className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-8" />
      {/* Main Profile Fields */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 px-4">
        <ProfileField label="First Name" value={first_name} />
        <ProfileField label="Last Name" value={last_name} />
        {/* <ProfileField label="Role" value={role} /> */}
        <ProfileField label="Email Verified" value={email_verified ? 'Yes' : 'No'} />
        <ProfileField label="Email Verified At" value={email_verified_at} />
        <ProfileField label="Country" value={country} />
        <ProfileField
          label="Website"
          value={
            website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline break-all hover:text-blue-900 transition"
              >
                {website}
              </a>
            ) : null
          }
        />
        <ProfileField
          label="LinkedIn"
          value={
            linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline break-all hover:text-blue-900 transition"
              >
                {linkedin}
              </a>
            ) : null
          }
        />
      </div>
    </div>
  )
}

export default ProfilePage