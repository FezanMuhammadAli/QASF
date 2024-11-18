import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function GetStart() {
  return (
    <div className="bg-gradient-to-br from-qasfblue to-qasfgreen h-screen w-full absolute top-0 left-0 -z-10 flex items-center justify-center">
      <Navbar />
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg mt-16">
        {/* Card Content */}
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="https://s.mustakbil.com/employers/c0583d8c90a9496cb8e0fc725207a85d.jpg" // Replace with your logo URL
              alt="Logo"
              className="h-32 w-32 object-cover rounded-full border-4 border-qasfblue"
            />
          </div>

          {/* Welcome Message */}
          <h1 className="text-3xl font-semibold text-qasfblue mb-2">
            Welcome to QASF
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-6">
            QASF is a non-profit organization, an innovative establishment, a
            home of modern thoughts and development.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-4">
            <Link to="/create-account" className="w-3/4">
              <button className="bg-qasfblue text-white px-6 py-3 rounded-full text-xl hover:bg-blue-700 transition duration-200 w-full">
                Create Account
              </button>
            </Link>
            <Link to="/login" className="w-3/4">
              <button className="bg-qasfgreen text-white px-6 py-3 rounded-full text-xl hover:bg-green-700 transition duration-200 w-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStart;
