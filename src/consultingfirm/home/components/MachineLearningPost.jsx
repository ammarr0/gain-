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
          <div className="space-y-6 main-container">
      {/* ====== Top Heading Like Job Posting ====== */}
      <h1 className="text-2xl sm:text-3xl font-lg ml-2 sm:ml-5 mt-4 sm:mt-6 text-center sm:text-left">
        Get career help from the community
      </h1>

              <div className="bg-white rounded-2xl p-3 sm:p-6 main-container my-2 sm:my-4 shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <img
              src={post.userAvatar}
              alt="User Avatar"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg sm:text-xl">
                {post.userName}
                <span className="text-xs sm:text-sm font-normal">
                  &nbsp;•&nbsp;{post.userTitle}&nbsp;•&nbsp;{post.postedAgo}
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Post Title */}
        <h3 className="font-semibold text-lg sm:text-xl break-words">
          {post.title}
          <span className="italic"> {post.subtitle}</span>
        </h3>

        {/* Post Content */}
        <div className="text-gray-700 font-lg mb-4 text-base sm:text-lg space-y-3">
          {isExpanded
            ? post.content.map((para, i) => <p key={i}>{para}</p>)
            : <p>{post.content[0]}</p>}
        </div>

        {/* Read More / Read Less Button and Interaction Bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#313131] font-medium text-base sm:text-xl underline focus:outline-none w-fit"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
          <div className="flex space-x-4 justify-start sm:justify-end">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 focus:outline-none">
              <FaHeart size={20} />
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 focus:outline-none">
              <FaShareAlt size={20} />
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-yellow-500 focus:outline-none">
              <FaBookmark size={20} />
            </button>
          </div>
        </div>

        {/* Comment Box */}
        <div className="w-full relative mt-4">
          <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-2">
            <div className="relative w-full sm:w-[85%]">
              <input
                type="text"
                placeholder="Post a reply"
                className="w-full border mt-3 border-[#313131] rounded-xl focus:outline-none focus:ring pl-16 pr-24 py-3 sm:py-5 text-base sm:text-lg"
                style={{
                  backgroundImage: `url(/assets/user.png)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '40px 40px',
                  backgroundPosition: '10px 10px',
                  paddingLeft: '60px'
                }}
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 mt-0 sm:mt-2 bg-[#313131] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 text-sm sm:text-base">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearningPost;
