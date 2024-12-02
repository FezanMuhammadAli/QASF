import DNav from "./DNav";

function DHome() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-qasfblue to-qasfgreen">
      <DNav />

      <div className="w-3/4 bg-white p-6">
        {/* Welcome Section */}
        <section
          id="welcome"
          className="bg-qasfblue p-6 rounded-lg mb-6 text-white"
        >
          <h2 className="text-xl font-semibold mb-4">
            Welcome to the Program!
          </h2>
          <p>
            TMP (Talem Mumin Program) is designed to empower individuals with
            the knowledge, skills, and network necessary for leadership in the
            modern world.
          </p>
        </section>

        {/* Mission Section */}
        <section
          id="mission"
          className="bg-qasfgreen p-6 rounded-lg mb-6 text-white"
        >
          <h2 className="text-xl font-semibold mb-4">Mission</h2>
          <p>
            Our mission is to develop the next generation of leaders by offering
            comprehensive training, mentorship, and a platform for networking
            and personal growth.
          </p>
        </section>

        {/* Goals Section */}
        <section id="goals" className="bg-blue-200 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Goals</h2>
          <ul className="list-disc ml-6">
            <li>Empower individuals with practical skills for leadership.</li>
            <li>Provide networking opportunities with industry experts.</li>
            <li>Offer mentorship programs to guide career growth.</li>
            <li>Cultivate personal development for holistic success.</li>
          </ul>
        </section>

        {/* Key Highlights Section */}
        <section id="highlights" className="bg-green-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Key Highlights</h2>
          <ul className="list-disc ml-6">
            <li>Comprehensive leadership training</li>
            <li>Access to a network of industry professionals</li>
            <li>Mentorship programs with top leaders</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default DHome;
