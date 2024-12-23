import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* Background and Navbar */}
      <div className="bg-gradient-to-br from-qasfblue to-qasfgreen min-h-screen w-full absolute top-0 left-0 -z-10">
        <Navbar />
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-20 mt-16">
        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-12 w-full max-w-4xl">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-qasfblue mb-6 text-center">
            About QASF
          </h1>
          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-center">
            QASF is dedicated to providing the best services to our clients. Our
            team of experts is committed to delivering high-quality solutions
            that meet your needs. We believe in innovation, integrity, and
            excellence in everything we do.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-center">
            Our mission is to empower businesses with cutting-edge technology
            and exceptional service. We strive to build long-lasting
            relationships with our clients by understanding their goals and
            helping them achieve success.
          </p>
          {/* Call to Action */}
          <div className="flex justify-center mt-6">
            <Link
              to="/contact"
              className="bg-qasfblue text-white py-2 px-6 rounded-lg font-semibold text-base hover:bg-qasfblue-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
