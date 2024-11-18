import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div className="bg-gradient-to-br from-qasfblue to-qasfgreen min-h-screen flex flex-col">
      <Navbar />

      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-auto mt-16 md:mt-24 p-4 md:p-8 space-y-6 md:space-y-0 md:space-x-8 rounded-l shadow-l">
        {/* Left Section: Why Create Account */}
        <div className="flex-1 text-white p-4 md:p-6 bg-gradient-to-br from-qasfblue to-qasfgreen rounded-xl flex flex-col ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-8">
            Why Join QASF?
          </h2>
          <br />
          <p className="text-sm md:text-base mb-4">
            By creating an account, you’ll unlock exclusive benefits and be a
            part of our transformative initiatives.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>Access to QASF exclusive resources</li>
            <li>Join specialized training programs</li>
            <li>Connect with industry professionals</li>
            <li>Track your progress in real-time</li>
          </ul>
        </div>

        {/* Right Section: Create Account Form */}
        <div className="flex-1 bg-white p-4 md:p-6 rounded-xl shadow-md">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="https://s.mustakbil.com/employers/c0583d8c90a9496cb8e0fc725207a85d.jpg"
              alt="Logo"
              className="h-32 w-32 object-cover rounded-full border-4 border-qasfblue"
            />
          </div>

          {/* Form */}
          <h2 className="text-xl md:text-2xl font-bold text-qasfblue text-center mb-6">
            Create Your Account
          </h2>
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Fezan Muhammad Ali"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qasfblue"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="engcountio@proton.me"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qasfblue"
                required
              />
            </div>

            {/* Password */}
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
                name="password"
                placeholder="••••••••"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qasfblue"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qasfblue"
                required
              />
            </div>

            {/* Select Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Select Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qasfblue"
                required
              >
                <option value="student">Student</option>
                <option value="user">User</option>
              </select>
            </div>

            {/* Select Department */}
            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700"
              >
                Select Department
              </label>
              <select
                id="department"
                name="department"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qasfblue"
                required
              >
                <option value="Taleem Mumkin">Taleem Mumkin</option>
                <option value="Aao Sulah Karein (Ask)">
                  Aao Sulah Karein (Ask)
                </option>
                <option value="Badl Do">Badl Do</option>
                <option value="Creative Centre">Creative Centre</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Let's Pay Back">Let's Pay Back</option>
              </select>
            </div>
            <div className="mt-4 flex items-center ">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 text-qasfblue border-gray-300 rounded focus:ring-2 focus:ring-qasfgreen align-middle"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700 ">
                I accept the{" "}
                <Link
                  to="/terms"
                  className="text-qasfgreen hover:underline font-bold"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-qasfblue text-white rounded-lg font-semibold text-base hover:bg-qasfblue-dark focus:outline-none focus:ring-2 focus:ring-qasfgreen"
            >
              Create Account
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-qasfgreen font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
