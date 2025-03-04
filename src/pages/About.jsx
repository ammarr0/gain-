import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className=" min-h-screen">
      <main className="p-8 max-w-6xl mx-auto">

        {}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
              GAIN Comprehensive <br />
              AI Services Tailored <br />
              To Your Needs
            </h2>
          </div>
          <div className="w-full md:w-1/2 h-40 md:h-48 bg-gray-300 rounded-xl"></div>
        </section>

        {}
        <section className="relative bg-white py-10 mb-12">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-full px-6 py-3 text-xl font-semibold text-gray-900 border border-blue-500">
            Our Core Services
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {[
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
            ].map((service, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="bg-white py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              viverra est quis vestibulum venenatis. Vivamus maximus metus non
              semper molestie. Quisque at magna ex. Mauris volutpat mauris
              sollicitudin semper vulputate. Duis egestas risus quis elit
              fermentum, sit amet commodo massa pretium.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              Nullam purus velit, accumsan at hendrerit eget, posuere id dolor.
              Etiam ultricies sit amet nisi id ultrices. Nulla lacinia magna a
              erat mollis facilisis.
            </p>

            {}
            <div className="bg-white shadow-lg rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-200">
              {}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose GAIN?
                </h3>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li>
                    <strong>Tailored Solutions:</strong> We match you with the
                    right talent and tools based on your unique needs.
                  </li>
                  <li>
                    <strong>Global Network:</strong> Access a diverse pool of AI
                    professionals and firms from around the world.
                  </li>
                  <li>
                    <strong>Proven Expertise:</strong> Our team has a track
                    record of delivering successful AI projects across
                    industries.
                  </li>
                </ul>
              </div>

              {}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How We Work
                </h3>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li>
                    <strong>Consultation:</strong> Understand your business
                    goals and challenges.
                  </li>
                  <li>
                    <strong>Discovery:</strong> Identify the right talent or
                    solution for your needs.
                  </li>
                  <li>
                    <strong>Delivery:</strong> Execute your project with
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

export default About;
