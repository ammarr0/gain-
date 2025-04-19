import React, { useState } from 'react';
import { FaHeart, FaShareAlt, FaBookmark } from 'react-icons/fa';

const MachineLearningPost = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const post = {
    userName: "Tyrion Lannister",
    userTitle: "Senior Finance Manager",
    postedAgo: "3 Days Ago",
    userAvatar: "/assets/user.png", // Local asset or external link
    title: "Machine Learning—",
    subtitle: "the clever sorcery of our age",
    content: [
      "It takes the drudgery of menial tasks and does them with unerring precision, leaving us free to sip our wine and plot our next move. It peers into the future, spotting patterns mere mortals would miss, turning guesswork into foresight. A useful ally, if you’re wise enough to wield it.",
      "It sees patterns where others see noise, whispering secrets of the future to those wise enough to listen.",
      "🔷 Automation – Why waste human effort when an unblinking mind can handle tedious tasks flawlessly?",
      "🔷 Predictive Power – Trends, anomalies, decisions—ML foresees what others stumble upon too late.",
      "🔷 Personalization – A machine that knows you better than your closest allies, adjusting in real-time.",
      "🔷 Fraud Detection – Deception leaves traces, and ML is ever-watchful, exposing tricksters before they strike.",
      "🔷 Optimized Processes – From supply chains to healthcare, it sharpens efficiency like a well-forged blade.",
      "This isn’t just some fleeting fancy—it’s reshaping kingdoms… or, in your case, industries. The only question left is: will you wield its power, or be left behind?"
    ]
  };

  return (
    <div className="space-y-6 w-full max-w-7xl mx-auto">
      {/* ====== Top Heading Like Job Posting ====== */}
      <h1 className="text-3xl font-lg ml-5 mt-6">Get career help from the community</h1>

      <div className="bg-white rounded-2xl p-6 max-w-7xl mx-auto my-4">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
          <img src={post.userAvatar} alt="User Avatar" className="w-12 h-12 rounded-full" />
          <div>
            <h2 className="font-semibold text-xl">
              {post.userName}
              <span className="text-sm font-normal"> &nbsp;•&nbsp; {post.userTitle} &nbsp;•&nbsp; {post.postedAgo}</span>
            </h2>
          </div>
        </div>

        {/* Post Title */}
        <h3 className="font-semibold text-xl">
          {post.title}
          <span className="italic"> {post.subtitle}</span>
        </h3>

        {/* Post Content */}
        <div className="text-gray-700 font-lg mb-4 text-lg space-y-3">
          {isExpanded
            ? post.content.map((para, i) => <p key={i}>{para}</p>)
            : <p>{post.content[0]}</p>}
        </div>

        {/* Read More / Read Less Button and Interaction Bar */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#313131] font-medium text-xl underline focus:outline-none"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
              <FaHeart size={20} />
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
              <FaShareAlt size={20} />
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-yellow-500">
              <FaBookmark size={20} />
            </button>
          </div>
        </div>

        {/* Comment Box */}
        <div className="flex-1 relative ml-3 mt-4">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Post a reply"
              className="w-[85%] border mt-3 border-[#313131] rounded-xl focus:outline-none focus:ring pl-10 pr-24 py-5"
              style={{
                backgroundImage: `url(/assets/user.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '50px 50px',
                backgroundPosition: '15px 10px',
                paddingLeft: '80px'
              }}
            />
            <button className="absolute right-[9%] top-1/2 transform -translate-y-1/2 mt-2 bg-[#313131] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearningPost;
