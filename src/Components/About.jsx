import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* Background and Navbar */}
      <div className="bg-gradient-to-br from-qasfblue to-qasfgreen h-screen w-full absolute top-0 left-0 -z-10">
        <Navbar />
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-20 mt-8">
        {/* Content Container */}
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-12 w-full max-w-4xl">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-qasfblue mb-6">
            About QASF
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            QASF (Quality and Support Foundation) is dedicated to empowering
            individuals by providing access to valuable resources, training
            programs, and a supportive community. Our mission is to foster
            innovation, collaboration, and growth in diverse sectors, ensuring a
            brighter future for everyone involved.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Through initiatives such as <b>Taleem Mumkin</b>,{" "}
            <b>Aao Sulah Karein (ASK)</b>, and <b>Badl Do</b>, we aim to drive
            positive change, support talent development, and make impactful
            contributions to society.
          </p>

          {/* Key Values Section */}
          <h2 className="text-2xl md:text-3xl font-semibold text-qasfblue mb-4">
            Our Core Values
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
            <li>Empowerment through education and training</li>
            <li>Promoting peace and reconciliation</li>
            <li>Encouraging sustainable growth and innovation</li>
            <li>Building a connected, inclusive community</li>
          </ul>

          {/* Call-to-Action */}
          <div className="mt-8">
            <Link
              to="/getstart"
              className="bg-qasfgreen text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Get Started with QASF
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
