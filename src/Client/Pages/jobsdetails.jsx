import React from "react";
import SingleJobHero from "../Components/singlejob_hero";


const JobPostPage = () => (
    <>
    <div className="flex flex-col gap-4">
        <SingleJobHero />
        <div className="p-6">

            <div className="flex items-center gap-4 text-gray-700 mb-4">
                <p className="text-2xl">$350.00/hr</p>
                <span>•</span>
                <p>Intermediate Level</p>
                <span>•</span>
                <p>10+ years experience</p>
            </div>

            <div className="mb-4">
                <p className="text-gray-700">🇺🇸 United States</p>
                <p className="text-gray-600">🟢 Active</p>
                <p className="text-gray-600">📅 PST/PDT, MST/MDT • ⏰ Full time</p>
            </div>
            <div className="mb-6">
                <p>
                    We’re seeking an additional Business Development Manager to lead and expand our IT products across the Middle East.
                </p>
                <p>
                    Your role will involve strategizing, identifying growth opportunities, and building lasting relationships with clients to ensure our IT services and solutions meet their needs effectively.
                </p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Responsibilities:</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Identify and pursue business growth strategies for IT projects in the Middle East.</li>
                    <li>Identify and build relationships with stakeholders and decision-makers in target markets.</li>
                    <li>Generate viable sales leads through various sources.</li>
                    <li>Collaborate with sales and delivery teams to qualify leads and convert them into opportunities.</li>
                    <li>Work with the CRM system for lead tracking and reporting.</li>
                    <li>Represent the company in meetings, conferences, and networking events.</li>
                    <li>Maintain knowledge of the company’s solutions, services, and market trends.</li>
                    <li>Develop and maintain strong trust with customers and internal stakeholders.</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Requirements:</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Proven experience in business development, sales, or account management.</li>
                    <li>Deep understanding of the Middle Eastern market.</li>
                    <li>Strong communication, negotiation, and interpersonal skills.</li>
                    <li>Fluency in English is a must; Arabic is a plus.</li>
                    <li>Willingness to travel frequently.</li>
                    <li>Familiarity with CRM systems.</li>
                </ul>
            </div>

            <div className="mb-6">
                <p>
                    Please submit your resume and a brief cover letter detailing your experience in business development and why you’re interested in driving IT projects in the Middle East.
                </p>
            </div>

            <div className="mb-4 text-sm text-gray-600">Project Type: Full Time</div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Skills and Expertise</h2>
                <div className="flex flex-wrap gap-2">
                    {["Business Development", "Market Knowledge", "Technical Acumen", "CRM", "Analytical Skills", "Cloud Solutions"].map(skill => (
                        <span
                            key={skill}
                            className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="text-green-600 font-semibold">Status: Accepting Applications ✅</div>
        </div>
        </div>
    </>
);

export default JobPostPage;