function Hero() {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-qasfblue to-qasfgreen h-screen flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Qasim Ali Shah Foundation
        </h1>
        <p className="text-lg max-w-2xl mb-8">
          Empower your future with Qasim Ali Shah Foundation. Join us in shaping
          a resilient and prosperous Pakistan through knowledge and community!
        </p>
        <a
          href="#projects"
          className="px-8 py-4 bg-white text-qasfgreen font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Explore Projects
        </a>
      </section>

      {/* Courses Section */}
      <section id="projects" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Popular Projects
          </h2>
          <p className="text-gray-600 mb-12">
            Join us in transforming lives through impactful projects that foster
            knowledge, skills, and community empowerment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Cards */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Taleem Mumkin
              </h3>
              <p className="text-gray-600 mb-6">
                Scholarships and skill training to empower students for academic
                and career success.
              </p>
              <a
                href="https://qasimalishahfoundation.org/services/taleem-mumkin/"
                className="text-qasfgreen font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Aao Sulah Karein (ASK)
              </h3>
              <p className="text-gray-600 mb-6">
                Providing expert counseling to resolve marital conflicts and
                promote harmony in families.
              </p>
              <a
                href="https://qasimalishahfoundation.org/services/ask/"
                className="text-qasfgreen font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Badal Do
              </h3>
              <p className="text-gray-600 mb-6">
                Inspiring minds and transforming lives through purpose,
                self-awareness, and positivity
              </p>
              <a
                href="https://qasimalishahfoundation.org/services/badal-do/"
                className="text-qasfgreen font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                E-Commerce
              </h3>
              <p className="text-gray-600 mb-6">
                Empowering entrepreneurship and boosting Pakistan's economy
                through e-commerce and digital skills
              </p>
              <a
                href="https://qasimalishahfoundation.org/services/e-commerce/"
                className="text-qasfgreen font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Creative Center
              </h3>
              <p className="text-gray-600 mb-6">
                Inspiring positive change through the wisdom of historical
                figures and impactful storytelling
              </p>
              <a
                href="https://qasimalishahfoundation.org/services/creative-centre/"
                className="text-qasfgreen font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Let's Pay Back
              </h3>
              <p className="text-gray-600 mb-6">
                Empowering knowledge-sharing nationwide, bridging academia and
                industry for impactful education and growth
              </p>
              <a
                href="https://qasimalishahfoundation.org/services/lets-pay-back/"
                className="text-qasfgreen font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-qasfblue to-qasfgreen text-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dive In QASF?</h2>
          <p className="text-lg mb-8">
            Join thousands of learners who are achieving their goals with Qasim
            Ali Shah Foundation.
          </p>
          <a
            href="#"
            className="px-8 py-4 bg-white text-qasfblue font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Qasim Ali Shah Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Hero;
