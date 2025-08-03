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
          `https://gain-b7ea8e7de810.herokuapp.com/users/${id}`,
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

  return (
    <div className="w-full p-6 bg-white rounded-xl shadow" >
      {/* Header */}
      <div className="flex items-center gap-6 mb-8" >
        <img
          src={
            user.image?.startsWith('http')
              ? user.image
              : 'https://via.placeholder.com/100'
          }
          alt={`${user.first_name} avatar`}
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
        />
        <div>
          <h1 className="text-3xl font-bold">
            {user.first_name} {user.last_name}
          </h1>
          <p className="text-gray-500">{user.role}</p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4 text-gray-700">
        <p>
          <span className="font-semibold">Experience:</span>{' '}
          {user.experience ?? 'N/A'} yrs
        </p>
        <p>
          <span className="font-semibold">Rate:</span>{' '}
          {user.rate ? `₹${user.rate}/hr` : 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Location:</span>{' '}
          {user.city || user.country || 'Unknown'}
        </p>
        <p>
          <span className="font-semibold">Availability:</span>{' '}
          {user.availability || 'N/A'}
        </p>
        <p>
          <span className="font-semibold">About:</span>{' '}
          {user.description || user.email || 'No description.'}
        </p>

        {user.linkedin && (
          <p>
            <span className="font-semibold">LinkedIn:</span>{' '}
            <a
              href={user.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {user.linkedin}
            </a>
          </p>
        )}

        {user.website && (
          <p>
            <span className="font-semibold">Website:</span>{' '}
            <a
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {user.website}
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
