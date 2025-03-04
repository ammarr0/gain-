const services = [
    {
      title: "AI Training",
      description:
        "Empower your team with expert-led AI training. We offer customized programs to help businesses upskill in machine learning, data analytics, and AI integration.",
    },
    {
      title: "AI Recruiting",
      description:
        "Hire the best AI talent. From freelancers to full-time professionals, we connect you with top-tier AI specialists who match your requirements.",
    },
    {
      title: "Freelancing for AI Projects",
      description:
        "Leverage a global network of AI freelancers to execute your projects efficiently. Whether you need developers, data scientists, or product managers, we have you covered.",
    },
    {
      title: "AI Products",
      description:
        "Discover innovative AI solutions tailored to your business challenges. We help you integrate cutting-edge technology into your operations.",
    },
  ];
  
  const CoreServices = () => {
    return (
      <section className="relative bg-white py-10">
        {}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full px-6 py-3 text-xl font-semibold text-gray-900 border border-blue-500">
          Our Core Services
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CoreServices;
  