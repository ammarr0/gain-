import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroCard = () => {
  const navigate = useNavigate();

  const demoData = [
    {
      title: "1. Introduction",
      description: "Learn the basics of AI, its core concepts, and real-world applications, including machine learning and natural language processing, to prepare for the AI-driven future.",
    },
    {
      title: "2. Advanced Topics",
      description: "Dive deeper into advanced AI topics such as neural networks, deep learning, and AI ethics to enhance your understanding and skills.",
    },
    {
      title: "3. Practical Applications",
      description: "Explore practical applications of AI in various industries, including healthcare, finance, and autonomous systems, to see AI in action.",
    },
    {
      title: "4. AI in Healthcare",
      description: "Understand how AI is revolutionizing healthcare with applications in diagnostics, personalized medicine, and patient care.",
    },
    {
      title: "5. AI in Finance",
      description: "Discover the impact of AI in finance, from algorithmic trading to fraud detection and risk management.",
    },
    {
      title: "6. AI in Autonomous Systems",
      description: "Learn about AI's role in developing autonomous systems, including self-driving cars and drones.",
    },
    {
      title: "7. AI Ethics",
      description: "Examine the ethical considerations of AI, including privacy, bias, and the future of work.",
    },
    {
      title: "8. Machine Learning",
      description: "Gain insights into machine learning techniques and their applications across various domains.",
    },
    {
      title: "9. Natural Language Processing",
      description: "Explore the world of NLP and its applications in chatbots, sentiment analysis, and language translation.",
    },
    {
      title: "10. Future of AI",
      description: "Speculate on the future of AI and its potential to transform industries and society.",
    },
  ];

  const handleImageClick = () => {
    navigate('/consultingfirm/video');
  };

  return (
    <div className="flex flex-col gap-5 max-w-3xl mx-auto px-4">
      {demoData.map((data, index) => (
        <div key={index} className="flex flex-col sm:flex-row items-start p-4 gap-5">
          <div
            className="w-full sm:w-[300px] h-[200px] bg-gray-200 rounded-lg cursor-pointer"
            onClick={handleImageClick}
          ></div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-1">{data.title}</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntroCard;