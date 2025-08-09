"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FaLinkedin, FaStar } from "react-icons/fa";
import { User as UserIcon, Edit2, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const localTime = useMemo(
    () => new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    []
  );

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
        setUser(Array.isArray(data) ? data[0] : data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white text-black">
        <span className="text-lg font-semibold">Loading…</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white text-black">
        <span className="text-lg font-semibold">User not found or not logged in.</span>
      </div>
    );
  }

  // Derived fields
  const fullName = `${user.first_name || ""} ${user.last_name || ""}`.trim() || user.email;
  const avatar = user.image || "";
  const role = user.role || "";
  const locationLine = [user.city, user.country].filter(Boolean).join(", ");
  const earned = user.total_earned || user.earned || "";
  const rating = user.rating || user.average_rating || null;

  const projects = Array.isArray(user?.portfolio?.projects) ? user.portfolio.projects : [];
  const skills = Array.isArray(user?.portfolio?.skills) ? user.portfolio.skills : [];
  const testimonials = Array.isArray(user?.testimonials) ? user.testimonials : [];
  const certifications = Array.isArray(user?.certifications) ? user.certifications : [];
  const employment = Array.isArray(user?.employment_history || user?.work_history)
    ? (user.employment_history || user.work_history)
    : [];
  const education = Array.isArray(user?.education) ? user.education : [];
  const completedJobs = Array.isArray(user?.completed_jobs) ? user.completed_jobs : [];

  const linkedAccounts = [
    user.linkedin && { name: "LinkedIn", url: user.linkedin, icon: <FaLinkedin className="text-blue-700" /> },
    user.behance && {
      name: "Behance",
      url: user.behance,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="text-blue-700">
          <path fill="currentColor" d="M3 7h6.2c1.8 0 3.1 1 3.1 2.7c0 1.2-.6 2-1.6 2.4c1.3.3 2.1 1.3 2.1 2.7C12.8 17 11.3 18 9.4 18H3V7m3 2v2h3c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1H6m0 4v3h3.2c.9 0 1.4-.4 1.4-1s-.5-1-1.4-1H6zm10.3-4.8H21V9h-4.7V8.2m4.7 3.7c-2.7 0-4.7 1.6-4.7 4.1s2 4 4.6 4c2.6 0 4.2-1.2 4.4-3.2h-2.6c-.2.6-.9 1-1.8 1c-1.1 0-1.9-.6-2-1.7h6.4c.1-.2.1-.6.1-.9c0-2.6-1.8-3.3-3.9-3.3m-2.1 3h3.9c-.1-.9-.9-1.5-1.9-1.5c-1.1 0-1.8.6-2 1.5Z"/>
        </svg>
      ),
    },
    user.dribbble && {
      name: "Dribbble",
      url: user.dribbble,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="text-blue-700">
          <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m6.5 9h-3.8a18 18 0 0 0-.8-2a15 15 0 0 0 4.6 2M12 4a8 8 0 0 1 5 1.7a13 13 0 0 1-4 3.4a24 24 0 0 0-3.2-5.3A8 8 0 0 1 12 4M9.6 4.7A22 22 0 0 1 12.8 10c-2.7.7-5.9.8-9.2.8a8 8 0 0 1 6-6.1M4.1 12.8c3.7 0 7-.1 10-.9c.2.6.4 1.1.5 1.7c-2.6.6-4.8 2.4-6.5 4.7a8 8 0 0 1-4-5.5m6.7 7.1c1.6-2.2 3.6-3.9 6-4.4c.3 1.7.3 3.5.2 5.4a8 8 0 0 1-6.2-1m7.9.5c.1-1.8 0-3.4-.2-4.9c1.2-.2 2.4 0 3.7.6a8 8 0 0 1-3.5 4.3Z"/>
        </svg>
      ),
    },
    user.website && {
      name: "Website",
      url: user.website,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="text-blue-700">
          <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m0 2c1.5 0 2.8 2.3 3.4 5.5H8.6C9.2 6.3 10.5 4 12 4m-4 6h8c.1.6.1 1.3.1 2s0 1.4-.1 2H8a17 17 0 0 1 0-4m.6 6.5h6.8C14.8 17.7 13.5 20 12 20s-2.8-2.3-3.4-5.5M18 12c0-.7 0-1.4-.1-2h3c.7 0 1.1.9.6 1.5a9 9 0 0 1-2.2 2.2c-.6.5-1.3.1-1.3-.7m-14 0c0 .8-.7 1.2-1.3.7A9 9 0 0 1 .5 11.5C0 10.9.4 10 1 10h3c-.1.6-.1 1.3-.1 2Z"/>
        </svg>
      ),
    },
  ].filter(Boolean);

  return (
    <div className="min-h-screen w-full bg-white text-black font-sans">
      {/* HERO */}
      <header className="relative border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-white pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-5">
              {avatar ? (
                <img
                  src={avatar}
                  alt={fullName}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow"
                />
              ) : (
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-4 border-white shadow bg-gray-100">
                  <UserIcon size={38} className="text-gray-400" />
                </div>
              )}
              <div>
                <h1 className="text-2xl md:text-[28px] font-extrabold text-gray-900">{fullName}</h1>
                {role && <p className="text-sm text-gray-700 mt-0.5">{role}</p>}
                {rating && (
                  <div className="flex items-center gap-1 mt-1 text-yellow-400">
                    {[...Array(Math.round(rating))].map((_, i) => <FaStar key={i} />)}
                    <span className="ml-2 text-sm text-gray-700">{Number(rating).toFixed(1)}</span>
                  </div>
                )}
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  {locationLine && <span>{locationLine}</span>}
                  {locationLine && <span>•</span>}
                  <span>{localTime} local time</span>
                </div>
                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
                >
                  <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
                  Available Now
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3 self-end md:self-auto">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-black"
              >
                <Share2 size={18} className="text-gray-700" />
                Share
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition"
                onClick={() => navigate("/talent/edit-profile")}
              >
                <Edit2 size={18} className="text-gray-700" />
                Edit Profile
              </button>
            </div>
          </div>
          <div className="mt-6 h-px bg-gray-200" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-6 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-10">
          {/* LEFT COLUMN */}
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-[18px] font-semibold text-gray-900">{role || "—"}</h2>
              </div>
              <div className="text-right">
                <div className="text-[18px] font-semibold text-gray-900">
                  {earned ? `${earned}+` : ""}
                </div>
                {earned && <div className="text-sm text-gray-600">Earned</div>}
              </div>
            </div>
            <p className="mt-3 text-[15px] leading-7 text-gray-800">
              {user.description || user.about || "No description yet."}
            </p>
            <div className="mt-4 h-px bg-gray-200" />

            {/* Portfolio */}
            <section className="mt-6">
              <h3 className="text-[16px] font-semibold text-gray-900">Portfolio</h3>
              {projects.length ? (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {projects.map((p, idx) => (
                    <div key={idx} className="group">
                      <a
                        href={p.live_url || p.github_url || "#"}
                        target={p.live_url || p.github_url ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="block h-[140px] rounded-xl bg-blue-100/60 border border-blue-100 overflow-hidden relative"
                      >
                        {p.image_url && (
                          <img
                            src={p.image_url}
                            alt={p.title || "Project"}
                            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition"
                          />
                        )}
                      </a>
                      <a
                        href={p.live_url || p.github_url || "#"}
                        target={p.live_url || p.github_url ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-2 block text-[13px] font-medium text-blue-700 hover:underline leading-snug"
                      >
                        {p.title || "Untitled Project"}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[0, 1, 2].map((i) => (
                    <div key={i}>
                      <div className="h-[140px] rounded-xl bg-blue-100/60 border border-blue-100" />
                      <div className="mt-2 h-4 w-48 bg-blue-50 rounded" />
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Skills */}
            <section className="mt-8">
              <h3 className="text-[16px] font-semibold text-gray-900">Skills</h3>
              {skills.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((s, i) => (
                    <span
                      key={`${s}-${i}`}
                      className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1 text-[12px] font-medium text-gray-800 bg-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-3 text-sm text-gray-500">No skills added yet.</div>
              )}
            </section>

            {/* Completed Jobs */}
            <section className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-semibold text-gray-900">Completed Jobs</h3>
                <button type="button" className="text-sm text-gray-500 hover:text-gray-700">
                  See all
                </button>
              </div>
              {completedJobs.length ? (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {completedJobs.map((job, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-200" />
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 leading-snug">
                            {job.title}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-3 text-[12px] text-gray-600">
                            {job.location && <span>{job.location}</span>}
                            {job.rate && <span>• {job.rate}</span>}
                            {job.type && <span>• {job.type}</span>}
                          </div>
                          {job.summary && (
                            <p className="mt-2 text-sm text-gray-700">{job.summary}</p>
                          )}
                          <div className="mt-3">
                            <a
                              href={job.detail_url || "#"}
                              className="inline-flex items-center rounded-full border border-gray-300 px-3 py-1.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                              target={job.detail_url ? "_blank" : undefined}
                              rel="noopener noreferrer"
                            >
                              View Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 text-gray-500">
                  No completed jobs yet.
                </div>
              )}
            </section>
          </div>

          {/* RIGHT COLUMN: Linked Accounts panel */}
          <aside>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 sticky top-6">
              <div className="text-sm font-semibold text-gray-900 mb-3">Linked Accounts</div>
              {linkedAccounts.length ? (
                <div className="space-y-2">
                  {linkedAccounts.map((a) => (
                    <a
                      key={a.name}
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg border border-blue-300 text-blue-700 px-3 py-2 text-sm font-semibold hover:bg-blue-50 transition"
                    >
                      <span className="inline-flex items-center gap-2">
                        {a.icon}
                        {a.name}
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-500">No linked accounts yet.</div>
              )}
            </div>
          </aside>
        </div>

        <div className="mt-10 h-px bg-gray-200" />

        {/* SECOND PAGE-STYLE SECTIONS */}
        <section className="mt-8">
          <h3 className="text-[16px] font-semibold text-gray-900">Testimonials</h3>
          <p className="text-sm text-gray-500 mt-1">Endorsements from past clients</p>
          {testimonials.length ? (
            <div className="mt-4 space-y-4">
              {testimonials.map((t, i) => (
                <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-gray-800 leading-7">“{t.quote || t.text}”</p>
                  <div className="mt-2 text-sm text-gray-600">
                    {t.author && <span className="font-medium">{t.author}</span>}
                    {t.company && <span className="ml-2">• {t.company}</span>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-3 text-sm text-gray-500">No testimonials yet.</div>
          )}
        </section>

        <section className="mt-8">
          <h3 className="text-[16px] font-semibold text-gray-900">Certifications</h3>
          <p className="text-sm text-gray-500 mt-1">
            Using your certifications can help prove your specific knowledge or abilities.
          </p>
          {certifications.length ? (
            <ul className="mt-4 rounded-2xl border border-gray-200 bg-white divide-y">
              {certifications.map((c, i) => (
                <li key={i} className="p-5 text-gray-800">
                  <div className="font-semibold">{c.title || c.name}</div>
                  <div className="text-sm text-gray-600">
                    {[c.issuer, c.year].filter(Boolean).join(" • ")}
                  </div>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline text-sm mt-1 inline-block"
                    >
                      View Credential
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-3 text-sm text-gray-500">No certifications yet.</div>
          )}
        </section>

        <section className="mt-8">
          <h3 className="text-[16px] font-semibold text-gray-900">Employment History</h3>
          {employment.length ? (
            <div className="mt-3 rounded-2xl border border-gray-200 bg-white divide-y">
              {employment.map((e, i) => (
                <div key={i} className="p-5">
                  <div className="font-semibold text-gray-900">
                    {e.title || e.position} {e.company ? `– ${e.company}` : ""}
                  </div>
                  <div className="text-sm text-gray-600">
                    {[e.start_date || e.start, e.end_date || e.end].filter(Boolean).join(" • ")}
                  </div>
                  {e.summary && (
                    <ul className="mt-2 list-disc list-inside text-gray-800 space-y-1">
                      {Array.isArray(e.summary)
                        ? e.summary.map((li, idx) => <li key={idx}>{li}</li>)
                        : <li>{e.summary}</li>}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-3 text-sm text-gray-500">No employment history yet.</div>
          )}
        </section>

        <section className="mt-8 pb-16">
          <h3 className="text-[16px] font-semibold text-gray-900">Education</h3>
          {education.length ? (
            <div className="mt-3 rounded-2xl border border-gray-200 bg-white divide-y">
              {education.map((ed, i) => (
                <div key={i} className="p-5 flex items-start justify-between gap-6">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {ed.degree || ed.title} {ed.institution ? `– ${ed.institution}` : ""}
                    </div>
                    {ed.description && <p className="mt-1 text-gray-800">{ed.description}</p>}
                  </div>
                  <div className="text-sm text-gray-600 whitespace-nowrap">
                    {ed.year || ed.period || ""}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-3 text-sm text-gray-500">No education added yet.</div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;