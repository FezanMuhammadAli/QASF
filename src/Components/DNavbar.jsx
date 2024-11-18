import { Link } from "react-router-dom";

function DNavbar() {
  return (
    <nav className="flex justify-between items-center bg-white px-6 py-3 shadow-md fixed top-0 left-0 w-full z-10">
      {/* Logo Section */}

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-gray-600">
        <Link
          to="/dashboard"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/profile"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          Profile
        </Link>
        <Link
          to="/events"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          Events
        </Link>
        <Link
          to="/resources"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          Resources
        </Link>
      </div>

      {/* User Profile and Logout */}
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40" // Replace with user's profile picture URL
          alt="User Avatar"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="hidden md:block text-gray-700">
          <p className="font-semibold">John Doe</p>{" "}
          {/* Replace with dynamic user name */}
          <p className="text-sm text-gray-500">Member</p>
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          onClick={() => {
            console.log("Logout clicked");
            // Add logout functionality here
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default DNavbar;
