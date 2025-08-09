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

// Helper to read a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

// Helper to pretty print JSON (for fallback)
const PrettyJSON = ({ data }) => (
  <pre className="bg-gray-100 rounded p-4 text-xs overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
)

const ProfileField = ({ label, value }) => (
  <div className="py-2 flex flex-wrap items-baseline gap-2">
    <span className="w-44 text-gray-500">{label}</span>
    <span className="font-medium text-gray-900 break-all">{value || <span className="text-gray-400">—</span>}</span>
  </div>
)

const ProfileSection = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
    {children}
  </section>
)

const ListSection = ({ title, items, renderItem, emptyText }) => (
  <ProfileSection title={title}>
    {items && items.length > 0 ? (
      <ul className="space-y-2">{items.map(renderItem)}</ul>
    ) : (
      <div className="text-gray-400 text-sm">{emptyText || 'None'}</div>
    )}
  </ProfileSection>
)

const ProfilePage = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [rawJson, setRawJson] = useState(null)

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
        setRawJson(json)
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

  // Destructure all fields from the data structure
  const {
    _id,
    image,
    apple_id,
    last_name,
    role,
    first_name,
    fcm_token,
    email,
    email_verified,
    email_verified_at,
    password,
    country_code,
    phone_no,
    gender,
    biography,
    emergency_contact,
    country,
    street,
    suite,
    city,
    post_code,
    dob,
    uuid,
    website,
    linkedin,
    is_disabled,
    is_deleted,
    created_at,
    updated_at,
    __v,
    portfolio = {},
  } = user

  // Portfolio fields
  const {
    skills = [],
    projects = [],
    education = [],
    certifications = [],
  } = portfolio || {}

  // Compose full name
  const fullName = `${first_name || ''} ${last_name || ''}`.trim() || email

  // Avatar fallback
  const avatarSrc =
    image && image.startsWith('http') && image.length > 8
      ? image
      : 'https://via.placeholder.com/200'

  return (
    <div className="w-full">
      <div className="w-full p-0">
        <div className="w-full p-6 sm:p-8 bg-white rounded-2xl shadow">
          {/* Header */}
          <div className="flex items-center gap-6 mb-6 sm:mb-8">
            <img
              src={avatarSrc}
              alt={`${first_name || 'User'} avatar`}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-gray-200"
              onError={e => { e.currentTarget.src = 'https://via.placeholder.com/200' }}
            />
            <div className="min-w-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 truncate">
                {fullName}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-gray-600">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
                  {role}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="truncate">{city || country || '—'}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-6 sm:mb-8" />

          {/* Main Profile Fields */}
          <ProfileSection title="Basic Information">
            <ProfileField label="User ID" value={_id} />
            <ProfileField label="First Name" value={first_name} />
            <ProfileField label="Last Name" value={last_name} />
            <ProfileField label="Role" value={role} />
            <ProfileField label="Email" value={email} />
            <ProfileField label="Email Verified" value={email_verified ? 'Yes' : 'No'} />
            <ProfileField label="Email Verified At" value={email_verified_at} />
            <ProfileField label="Phone" value={`${country_code || ''} ${phone_no || ''}`} />
            <ProfileField label="Gender" value={gender} />
            <ProfileField label="Biography" value={biography} />
            <ProfileField label="Emergency Contact" value={emergency_contact} />
            <ProfileField label="Country" value={country} />
            <ProfileField label="City" value={city} />
            <ProfileField label="Street" value={street} />
            <ProfileField label="Suite" value={suite} />
            <ProfileField label="Post Code" value={post_code} />
            <ProfileField label="Date of Birth" value={dob} />
            <ProfileField label="UUID" value={uuid} />
            <ProfileField label="Website" value={
              website ? (
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline break-all">{website}</a>
              ) : null
            } />
            <ProfileField label="LinkedIn" value={
              linkedin ? (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline break-all">{linkedin}</a>
              ) : null
            } />
            <ProfileField label="Apple ID" value={apple_id} />
            <ProfileField label="FCM Token" value={fcm_token} />
            <ProfileField label="Is Disabled" value={is_disabled ? 'Yes' : 'No'} />
            <ProfileField label="Is Deleted" value={is_deleted ? 'Yes' : 'No'} />
            <ProfileField label="Created At" value={created_at && new Date(created_at).toLocaleString()} />
            <ProfileField label="Updated At" value={updated_at && new Date(updated_at).toLocaleString()} />
            <ProfileField label="Version" value={__v} />
            {/* Password is not shown for security */}
          </ProfileSection>

          {/* Portfolio Section */}
          <ProfileSection title="Portfolio">
            <ProfileField label="Portfolio ID" value={portfolio._id} />
            <ListSection
              title="Skills"
              items={skills}
              renderItem={(skill, i) => <li key={i} className="ml-4 list-disc">{skill}</li>}
              emptyText="No skills listed."
            />
            <ListSection
              title="Projects"
              items={projects}
              renderItem={(project, i) => (
                <li key={i} className="ml-4 list-disc">
                  <div className="font-semibold">{project.title || 'Untitled Project'}</div>
                  {project.description && <div className="text-gray-600">{project.description}</div>}
                </li>
              )}
              emptyText="No projects listed."
            />
            <ListSection
              title="Education"
              items={education}
              renderItem={(edu, i) => (
                <li key={i} className="ml-4 list-disc">
                  <div className="font-semibold">{edu.degree || 'Degree'}</div>
                  <div>{edu.institution || ''} {edu.year ? `(${edu.year})` : ''}</div>
                  {edu.description && <div className="text-gray-600">{edu.description}</div>}
                </li>
              )}
              emptyText="No education listed."
            />
            <ListSection
              title="Certifications"
              items={certifications}
              renderItem={(cert, i) => (
                <li key={i} className="ml-4 list-disc">
                  <div className="font-semibold">{cert.name || 'Certification'}</div>
                  <div>{cert.issuer || ''} {cert.year ? `(${cert.year})` : ''}</div>
                  {cert.credential_id && <div className="text-gray-600">ID: {cert.credential_id}</div>}
                </li>
              )}
              emptyText="No certifications listed."
            />
          </ProfileSection>

          {/* Raw JSON for debugging */}
          <details className="mt-8">
            <summary className="cursor-pointer text-blue-700 underline">Show Raw JSON</summary>
            <PrettyJSON data={rawJson} />
          </details>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage