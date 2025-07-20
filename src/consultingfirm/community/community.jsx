
import React, { useState } from 'react';
import {
  MessageCircle,
  ThumbsUp,
  Share2,
  MoreHorizontal,
} from 'lucide-react';

const posts = [
  {
    id: 1,
    name: 'Tyrion Lannister',
    role: 'Senior Finance Manager',
    date: '3 Days Ago',
    title: 'Machine Learning—the clever sorcery of our age',
    content: `It takes the drudgery of menial tasks and does them with unerring precision, leaving us free to sip our wine and plot our next move. It peers into the future, spotting patterns mere mortals would miss, turning guesswork into foresight. A useful ally, if you're wise enough to wield it. It sees patterns where others see noise, whispering secrets of the future to those wise enough to listen.`,
    highlight: `⚙ Automation – Why waste human effort when an unblinking mind can handle tedious tasks flawlessly?`,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Arya Stark',
    role: 'Junior Data Scientist',
    date: '1 Day Ago',
    title: 'AI in Cybersecurity',
    content: `AI is revolutionizing how we detect and respond to cyber threats. From anomaly detection to predictive analysis, it's reshaping digital defense mechanisms.`,
    highlight: `🛡️ The future of security is proactive, not reactive.`,
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Daenerys Targaryen',
    role: 'Product Strategist',
    date: '5 Days Ago',
    title: 'Why UX Matters in AI Products',
    content: `Even the most powerful AI tools are useless if users can’t navigate them. The bridge between complexity and usability is thoughtful design.`,
    highlight: `🎯 Make it usable, or lose the user.`,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    name: 'Bran Stark',
    role: 'Visionary Analyst',
    date: 'Just Now',
    title: 'Predictive Analytics and the Power of Foresight',
    content: `Understanding trends before they emerge gives businesses a competitive edge. Predictive models don’t just analyze—they anticipate.`,
    highlight: `🔮 Data is no longer past—it’s future.`,
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
];

const CommunityPost = () => {
  return (
    <div
      className="w-full min-h-screen bg-white"
      style={{ overflowX: 'hidden' }}
    >
      <div
        className="
          w-full
          max-w-2xl
          mx-auto
          p-2
          sm:p-4
          md:p-6
          min-h-screen
        "
      >
        <div className="text-center mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
            Help Others with your Experience
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            or get professional help from GAIN Plus Community
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 mb-6 shadow-sm gap-2 sm:gap-0">
          <div className="flex-1 text-gray-500 mb-2 sm:mb-0">
            <span className="font-semibold text-black">🔍 clay</span> Ask the community for help
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
            <span className="cursor-pointer">📎</span>
            <span className="cursor-pointer">🔗</span>
            <span className="cursor-pointer">📷</span>
            <button className="bg-black text-white px-3 py-1 rounded-md whitespace-nowrap">Post &gt;&gt;</button>
          </div>
        </div>

        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-xl p-3 sm:p-5 shadow-sm mb-6"
          >
            <div className="flex items-center mb-3">
              <img
                src={post.avatar}
                alt={post.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">{post.name}</div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {post.role} • {post.date}
                </div>
              </div>
            </div>

            <h3 className="text-blue-800 font-semibold mb-2 text-base sm:text-lg">{post.title}</h3>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-1">{post.content}</p>
            <p className="text-xs sm:text-sm text-blue-600">{post.highlight}</p>

            <button className="text-blue-600 text-xs sm:text-sm mt-2 underline">Read More</button>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-gray-500 text-xs sm:text-sm">
              <button className="flex items-center gap-1 hover:text-black">
                <ThumbsUp size={16} /> Like
              </button>
              <button className="flex items-center gap-1 hover:text-black">
                <MessageCircle size={16} /> Comment
              </button>
              <button className="flex items-center gap-1 hover:text-black">
                <Share2 size={16} /> Share
              </button>
              <button className="ml-auto hover:text-black">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        ))}

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center border rounded-full px-3 sm:px-4 py-2 shadow-sm gap-2 sm:gap-0">
          <span className="text-black font-semibold mr-0 sm:mr-2">🔍 clay</span>
          <input
            type="text"
            className="flex-1 outline-none text-xs sm:text-sm py-1"
            placeholder="Post a reply"
          />
          <button className="text-xs sm:text-sm text-white bg-black px-3 py-1 rounded-md ml-0 sm:ml-2 whitespace-nowrap">Send</button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;