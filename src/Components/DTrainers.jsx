import DNav from "./DNav";

// Sample instructor data
const instructors = [
  {
    name: "John Doe",
    title: "Leadership and Business Strategy",
    description:
      "John has over 10 years of experience in business strategy and leadership, helping businesses scale effectively.",
    image: "/src/assets/instructor.png",
  },
  {
    name: "Jane Smith",
    title: "Personal Development and Career Growth",
    description:
      "Jane specializes in helping individuals enhance their personal growth and career trajectories through coaching and mentorship.",
    image: "/src/assets/instructor.png",
  },
  {
    name: "Emily Johnson",
    title: "Networking and Public Speaking",
    description:
      "Emily is a renowned public speaker and networking expert, helping individuals build impactful relationships and improve their speaking skills.",
    image: "/src/assets/instructor.png",
  },
  {
    name: "Michael Brown",
    title: "Technology and Innovation",
    description:
      "Michael is passionate about technology and innovation, guiding individuals and businesses on the latest tech trends and tools.",
    image: "/src/assets/instructor.png",
  },
];

function DTrainers() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-qasfblue to-qasfgreen">
      <DNav />
      <div className="w-3/4 bg-white p-6">
        {/* Trainers Section */}
        <section
          id="trainers"
          className="bg-qasfblue p-6 rounded-lg mb-6 text-white"
        >
          <h2 className="text-xl font-semibold mb-4">Meet Our Trainers</h2>
          <p>
            Our trainers are industry experts with years of experience,
            committed to empowering the next generation of leaders. They bring a
            wealth of knowledge and real-world insights to our program.
          </p>
        </section>

        {/* Trainers List Section (Instructor Cards) */}
        <section
          id="trainers-list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
        >
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Instructor Profile Image */}
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-16 h-16 object-cover rounded-full absolute top-4 left-4 border-4 border-white"
              />
              {/* Card Content */}
              <div className="ml-24">
                <h3 className="text-xl font-semibold">{instructor.name}</h3>
                <p className="text-sm text-gray-500">{instructor.title}</p>
                <p className="mt-2 text-gray-700">{instructor.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Trainers Highlights Section */}
        <section
          id="trainers-highlights"
          className="bg-blue-200 p-6 rounded-lg mb-6"
        >
          <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
          <ul className="list-disc ml-6">
            <li>Industry-leading trainers with real-world experience</li>
            <li>Comprehensive and practical training sessions</li>
            <li>Opportunities to interact and network with experts</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default DTrainers;
