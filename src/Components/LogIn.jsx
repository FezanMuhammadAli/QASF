import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  return (
    <div className="bg-gradient-to-br from-qasfblue to-qasfgreen h-screen w-full flex items-center justify-center">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full max-w-screen-lg p-4 md:p-8 space-y-6 md:space-y-0 md:space-x-8 rounded-xl shadow-2xl ">
        {/* Left Section: Welcome Message */}
        <div className="flex-1 text-white p-4 md:p-6 bg-gradient-to-br from-qasfblue to-qasfgreen rounded-xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Welcome to QASF</h2>
          <p className="text-sm md:text-base">
            Login to access your dashboard and manage your account.
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm md:text-base">
            <li>Secure authentication system</li>
            <li>Easy dashboard access</li>
            <li>Real-time updates</li>
            <li>Cross-platform compatibility</li>
          </ul>
        </div>

        {/* Right Section: Login Form */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-qasfblue">
            Login to Your Account
          </h2>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="engcountio@proton.me"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qasfblue"
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qasfblue"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-qasfblue text-white rounded-lg font-semibold text-lg hover:bg-qasfblue-dark focus:outline-none focus:ring-2 focus:ring-qasfgreen"
            >
              Login
            </button>
          </form>

          {/* Redirect to Create Account */}
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/create-account"
              className="text-qasfgreen font-bold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
