import DNav from "./DNav"

function DLinks() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-qasfblue to-qasfgreen">
      <DNav />
    <div className="w-3/4 bg-white p-6">
      {/* Links Section */}
      <section
        id="links"
        className="bg-qasfblue p-6 rounded-lg mb-6 text-white"
      >
        <h2 className="text-xl font-semibold mb-4">
          Recommended YouTube Videos
        </h2>
        <p>
          Below are some curated YouTube videos that will help you in your
          journey to leadership and personal growth. Click on the links to watch
          the videos.
        </p>
      </section>

      {/* Video Links Section */}
      <section
        id="video-links"
        className="bg-qasfgreen p-6 rounded-lg mb-6 text-white"
      >
        <h2 className="text-xl font-semibold mb-4">Video Resources</h2>
        <ul className="list-disc ml-6">
          <li>
            <a
              href="https://www.youtube.com/watch?v=xxxxxx" // Replace with actual video link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-gray-300"
            >
              Video 1: Leadership Skills for the Future
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=yyyyyy" // Replace with actual video link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-gray-300"
            >
              Video 2: Networking for Success
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=zzzzzz" // Replace with actual video link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-gray-300"
            >
              Video 3: Personal Development Strategies
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=wwwwww" // Replace with actual video link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-gray-300"
            >
              Video 4: Effective Communication Skills
            </a>
          </li>
        </ul>
      </section>

      {/* Additional Links Section */}
      <section
        id="additional-links"
        className="bg-blue-200 p-6 rounded-lg mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
        <p className="text-gray-700">
          Check out other valuable resources and articles to enhance your
          learning.
        </p>
        <ul className="list-disc ml-6">
          <li>
            <a
              href="https://example.com" // Replace with another resource link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-gray-300"
            >
              Resource 1: Leadership Blog
            </a>
          </li>
          <li>
            <a
              href="https://example.com" // Replace with another resource link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-gray-300"
            >
              Resource 2: Career Growth Articles
            </a>
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
}

export default DLinks;
