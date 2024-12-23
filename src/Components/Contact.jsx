import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setMessageSent(true);
      e.target.reset(); // Reset the form fields
      setTimeout(() => {
        navigate("/"); // Redirect to home route
      }, 3000); // Delay for 3 seconds before redirecting
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-qasfblue to-qasfgreen min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 px-6 md:px-20 mt-16">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-12 w-full max-w-4xl mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-qasfblue mb-6 text-center">
            Contact Us
          </h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-center">
            We would love to hear from you! Please fill out the form below to
            get in touch with us.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-qasfblue"
                placeholder="Enter your name"
                required
              />
            </div>
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
                className="mt-1 p-2 w-full rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-qasfblue"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 p-2 w-full rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-qasfblue"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-qasfblue text-white rounded-lg font-semibold text-base hover:bg-qasfblue-dark focus:outline-none focus:ring-2 focus:ring-qasfgreen"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mx-auto"
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 24c6.627 0 12-5.373 12-12h-4a8 8 0 01-8 8v4z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
          {messageSent && (
            <div className="mt-4 text-center text-green-500">
              Thanks for your message. We will get back to you soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
