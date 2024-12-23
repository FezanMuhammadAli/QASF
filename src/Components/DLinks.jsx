import DNav from "./DNav";

function DLinks() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-qasfblue to-qasfgreen text-white">
      <DNav />
      <div className="w-3/4 bg-white rounded-l-3xl shadow-lg overflow-hidden p-8">
        {/* Links Section */}
        <section
          id="links"
          className="bg-gradient-to-r from-qasfgreen to-qasfblue p-8 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">
            Recommended YouTube Videos
          </h2>
          <p className="text-white text-opacity-90">
            Discover our carefully curated YouTube videos to enhance your
            leadership and personal growth journey. Click on the links below to
            watch.
          </p>
        </section>

        {/* Video Links Section */}
        <section
          id="video-links"
          className="bg-gradient-to-br from-qasfblue to-qasfgreen p-8 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">Video Resources</h2>
          <ul className="space-y-4 ml-8">
            <li>
              <a
                href="https://www.youtube.com/watch?v=xxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold text-white hover:underline"
              >
                Leadership Skills for the Future
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=yyyyyy"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold text-white hover:underline"
              >
                Networking for Success
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=zzzzzz"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold text-white hover:underline"
              >
                Personal Development Strategies
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=wwwwww"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold text-white hover:underline"
              >
                Effective Communication Skills
              </a>
            </li>
          </ul>
        </section>

        {/* Additional Links Section */}
        <section
          id="additional-links"
          className="bg-gradient-to-br from-qasfgreen to-qasfblue p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <p className="text-white text-opacity-90 mb-6">
            Explore more resources to broaden your knowledge and enhance your
            personal and professional growth.
          </p>
          <ul className="space-y-4 ml-8">
            <li>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold text-white hover:underline"
              >
                Leadership Blog
              </a>
            </li>
            <li>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold text-white hover:underline"
              >
                Career Growth Articles
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default DLinks;
