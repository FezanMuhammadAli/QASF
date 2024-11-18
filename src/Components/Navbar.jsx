import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white px-12 py-2 shadow-md fixed top-0 left-0 w-full z-10 h-16 mb-7">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img
          src="https://s.mustakbil.com/employers/c0583d8c90a9496cb8e0fc725207a85d.jpg"
          alt="Logo"
          className="h-32 w-32 object-cover rounded-full"
        />
      </div>

      {/* Navigation Links */}
      <div className="space-x-16 text-gray-600">
        <Link
          to="/"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/getstart"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          Get Start With QASF
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
