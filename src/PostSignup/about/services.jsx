

const services = () => {
  return (
    <div className="min-h-screen">
      <main className="p-8 max-w-6xl mx-auto">

        {/* Top Intro Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="max-w-md">
            <h2 className="text-4xl font-semibold text-gray-900 leading-snug mb-4">
              GAIN Comprehensive <br />
              AI Services Tailored <br />
              To Your Needs
            </h2>
          </div>
          {/* Placeholder image or graphic */}
          <div className="w-full md:w-1/2 h-40 md:h-48 bg-gray-300 rounded-xl"></div>
        </section>

        {/* Core Services Section */}
        <section className="relative bg-white py-20 mb-12">
          {/* The card grid (2 columns, 2 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
            {[
              {
                title: 'AI Training',
                description:
                  'Empower your team with expert-led AI training. We offer customized programs to help businesses upskill in machine learning, data analytics, and AI integration.',
              },
              {
                title: 'AI Recruiting',
                description:
                  'Hire the best AI talent. From freelancers to full-time professionals, we connect you with top-tier AI specialists who match your requirements.',
              },
              {
                title: 'Freelancing for AI Projects',
                description:
                  'Leverage a global network of AI freelancers to execute your projects efficiently. Whether you need developers, data scientists, or product managers, we have you covered.',
              },
              {
                title: 'AI Products',
                description:
                  'Discover innovative AI solutions tailored to your business challenges. We help you integrate cutting-edge technology into your operations.',
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  boxShadow: `
                    -3px 2px 9px 0px #1D75E71A,
                    -13px 9px 16px 0px #1D75E717,
                    -29px 20px 21px 0px #1D75E70D,
                    -51px 36px 25px 0px #1D75E703,
                    -80px 56px 27px 0px #1D75E700
                  `
                }}
                className={`
                  bg-[#F3F9FF]
                  p-8
                  rounded-xl
                  transition
                  duration-300
                  h-[288px]
                  w-full
                  flex
                  flex-col
                  ${index % 2 === 0 ? 'text-left' : 'text-right'}
                  ${index < 2 ? 'justify-start' : 'justify-end'}
                `}
              >
                <h3 className="text-5xl font-semibold text-[#030923] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#313131] text-md leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Pill Label */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              transform
              -translate-x-1/2
              -translate-y-1/2
              bg-white
              rounded-full
              px-32
              py-12 
              text-xl
              font-semibold
              text-gray-900
              z-10
            "
            style={{
              borderWidth: '0.5px 0.5px 8px 0.5px',
              borderStyle: 'solid',
              borderColor: '#1D75E7',
            }}
          >
            Our Core Services
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="bg-white py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Example paragraphs */}
            <p className="text-gray-600 text-md leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra est quis vestibulum venenatis. Vivamus maximus metus non semper molestie. Quisque at magna ex. Mauris volutpat mauris sollicitudin semper vulputate. Duis egestas risus quis elit fermentum, sit amet commodo massa pretium. Praesent vitae dictum ex. Quisque sed nisi lacus. Maecenas arcu sapien, finibus ac ornare eget, rutrum non ex. Etiam lobortis lobortis lectus pretium tincidunt. Donec venenatis suscipit eros, ut dictum urna faucibus ut. Nullam purus velit, accumsan at hendrerit eget, posuere id dolor. Etiam ultricies sit amet nisi id ultrices. Nulla lacinia magna a erat mollis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600 text-md leading-relaxed mb-10">
              Nullam purus velit, accumsan at hendrerit eget, posuere id dolor.
              Etiam ultricies sit amet nisi id ultrices. Nulla lacinia magna a
              erat mollis facilisis.
            </p>

            {/* Info Boxes (apply the same multi-shadow) */}
            <div    className="relative mt-28  bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 w-[950px] mx-auto"
      style={{
        borderLeft: '6px solid #5F5F5F',
        borderRight: '6px solid #5F5F5F',
        borderTop: '0px',
        borderBottom: '0px',
        // Add padding to prevent top/bottom bars from overlapping text
        padding: '2rem',
        overflow: 'hidden',
      }}
    >
      {/* Top gradient bar (right to left) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(to left, #5F5F5F, #FFFFFF)',
        }}
      />

      {/* Bottom gradient bar (left to right) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(to right, #5F5F5F, #FFFFFF)',
        }}
             /  
           
            >
              {/* Left side */}
              <div className="text-left flex flex-col justify-center pr-3 border-r  border-gray-200 p-10">
                <h3 className="text-3xl font-semibold text-gray-900 mb-4 ">
                  Why Choose GAIN?
                </h3>
                <ul className="space-y-4 text-gray-700 text-md">
                  <li>
                    <strong className="text-[17px]">Tailored Solutions:</strong> We match you with the
                    right talent and tools based on your unique needs.
                  </li>
                  <li>
                    <strong className="text-[17px]">Global Network:</strong> Access a diverse pool of AI
                    professionals and firms from around the world.
                  </li>
                  <li>
                    <strong className="text-[17px]">Proven Expertise:</strong> Our team has a track
                    record of delivering successful AI projects across
                    industries.
                  </li>
                </ul>
              </div>

              {/* Right side */}
              <div className="text-left flex flex-col justify-center p-10">
                <h3 className="text-3xl font-semibold text- text-gray-900 mb-4">
                  How We Work
                </h3>
                <ul className="space-y-4 text-gray-700 text-md">
                  <li>
                    <strong className="text-[17px]">Consultation:</strong> Understand your business
                    goals and challenges.
                  </li>
                  <li>
                    <strong className="text-[17px]">Discovery:</strong> Identify the right talent or
                    solution for your needs.
                  </li>
                  <li>
                    <strong className="text-[17px]">Delivery:</strong> Execute your project with
                    precision and efficiency.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default services;
