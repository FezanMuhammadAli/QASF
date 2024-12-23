import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function ProgramEnrollment() {
  const location = useLocation();
  const { program } = location.state || { program: "Unknown Program" };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleEnrollment = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login", {
        state: {
          message:
            "Your Enrollment is under consideration. Please check your email for verfication and come back here to log in to the platform.",
        },
      });
    }, 2000);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-6 mt-10">
        <h1 className="text-4xl font-bold text-qasfgreen mb-6">
          Program Enrollment
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Enroll in our{" "}
          <span className="font-bold text-qasfblue">{program}</span> program and
          elevate your skills to the next level.
        </p>
        <form
          className="space-y-6 bg-white shadow-md p-6 rounded-lg"
          onSubmit={handleEnrollment}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-qasfgreen focus:border-qasfgreen"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-qasfblue focus:border-qasfblue"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-qasfblue focus:border-qasfblue"
              placeholder="********"
              required
            />
          </div>
          <div>
            <label
              htmlFor="qualification"
              className="block text-sm font-medium text-gray-700"
            >
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-qasfgreen focus:border-qasfgreen"
              placeholder="Enter your qualification"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-qasfblue text-white py-2 px-4 rounded-lg hover:bg-qasfgreen transition flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-2.293-2.292L6 15.708zm7.292 2.293L6 6l.293-.293L6 15.708z"
                ></path>
              </svg>
            ) : (
              "Enroll Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProgramEnrollment;
