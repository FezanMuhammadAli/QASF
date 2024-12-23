import Project from "./Project";
import { Link } from "react-router-dom";

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/program-enrollment" state={{ program: "Taleem Mumkin" }}>
              <Project
                title="Taleem Mumkin"
                description="Scholarships and skill training to empower students for academic and career success."
              />
            </Link>
            <Link
              to="/program-enrollment"
              state={{ program: "Aao Sulah Karein (ASK)" }}
            >
              <Project
                title="Aao Sulah Karein (ASK)"
                description="Providing expert counseling to resolve marital conflicts and promote harmony in families."
              />
            </Link>
            <Link to="/program-enrollment" state={{ program: "Badal Do" }}>
              <Project
                title="Badal Do"
                description="Inspiring minds and transforming lives through purpose, self-awareness, and positivity."
              />
            </Link>
            <Link to="/program-enrollment" state={{ program: "E-Commerce" }}>
              <Project
                title="E-Commerce"
                description="Empowering entrepreneurship and boosting Pakistan's economy through e-commerce and digital skills."
              />
            </Link>
            <Link
              to="/program-enrollment"
              state={{ program: "Creative Center" }}
            >
              <Project
                title="Creative Center"
                description="Inspiring positive change through the wisdom of historical figures and impactful storytelling."
              />
            </Link>
            <Link
              to="/program-enrollment"
              state={{ program: "Let's Pay Back" }}
            >
              <Project
                title="Let's Pay Back"
                description="Empowering knowledge-sharing nationwide, bridging academia and industry for impactful education and growth."
              />
            </Link>
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
          <Link
            to="/create-account"
            className="px-8 py-4 bg-white text-qasfblue font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 bg-gradient-to-br from-qasfblue to-qasfgreen">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white">
            © 2024 Qasim Ali Shah Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Hero;
