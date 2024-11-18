function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white px-12 py-2 shadow-md fixed top-0 left-0 w-full z-10 h-16">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img
          src="./src/assets/QASF.jpg"
          alt="Logo"
          className="h-32 w-32 object-cover rounded-full"
        />
      </div>

      {/* Navigation Links */}
      <div className="space-x-16 text-gray-600">
        <a
          href="#home"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          Contact
        </a>
        <a
          href="#getstart"
          className="hover:text-qasfblue font-medium transition-colors"
        >
          Get Start with QASF
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
