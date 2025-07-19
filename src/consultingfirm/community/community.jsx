
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
    <div className='flex'>
      <div className="w-[80%] mx-auto p-6 bg-white min-h-screen">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Help Others with your Experience
          </h2>
          <p className="text-sm text-gray-500">
            or get professional help from GAIN Plus Community
          </p>
        </div>

        <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3 mb-6 shadow-sm">
          <div className="flex-1 text-gray-500">
            <span className="font-semibold text-black">🔍 clay</span> Ask the community for help
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <span className="cursor-pointer">📎</span>
            <span className="cursor-pointer">🔗</span>
            <span className="cursor-pointer">📷</span>
            <button className="bg-black text-white px-4 py-1 rounded-md">Post &gt;&gt;</button>
          </div>
        </div>

        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-xl p-5 shadow-sm mb-6"
          >
            <div className="flex items-center mb-3">
              <img
                src={post.avatar}
                alt={post.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">{post.name}</div>
                <div className="text-sm text-gray-500">
                  {post.role} • {post.date}
                </div>
              </div>
            </div>

            <h3 className="text-blue-800 font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-1">{post.content}</p>
            <p className="text-sm text-blue-600">{post.highlight}</p>

            <button className="text-blue-600 text-sm mt-2 underline">Read More</button>

            <div className="flex items-center gap-6 mt-4 text-gray-500 text-sm">
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

        <div className="flex items-center border rounded-full px-4 py-2 shadow-sm">
          <span className="text-black font-semibold mr-2">🔍 clay</span>
          <input
            type="text"
            className="flex-1 outline-none text-sm"
            placeholder="Post a reply"
          />
          <button className="text-sm text-white bg-black px-4 py-1 rounded-md ml-2">Send</button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;