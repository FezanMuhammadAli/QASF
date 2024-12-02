import DNav from "./DNav";

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

        {/* Trainers List Section */}
        <section
          id="trainers-list"
          className="bg-qasfgreen p-6 rounded-lg mb-6 text-white"
        >
          <h2 className="text-xl font-semibold mb-4">Trainers</h2>
          <ul className="list-disc ml-6">
            <li>John Doe - Leadership and Business Strategy</li>
            <li>Jane Smith - Personal Development and Career Growth</li>
            <li>Emily Johnson - Networking and Public Speaking</li>
            <li>Michael Brown - Technology and Innovation</li>
          </ul>
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
