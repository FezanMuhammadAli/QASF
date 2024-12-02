import DNav from "./DNav";

function DSchedule() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-qasfblue to-qasfgreen">
      <DNav />
      <div className="w-3/4 bg-white p-6">
        {/* Schedule Section */}
        <section
          id="schedule"
          className="bg-qasfblue p-6 rounded-lg mb-6 text-white"
        >
          <h2 className="text-xl font-semibold mb-4">Program Schedule</h2>
          <p>
            Here is the schedule for the upcoming events, workshops, and
            sessions for the Talem Mumkin Program. Stay tuned for updates!
          </p>
        </section>

        {/* Event Schedule Table */}
        <section
          id="event-schedule"
          className="bg-qasfgreen p-6 rounded-lg mb-6 text-white"
        >
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <table className="min-w-full table-auto text-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Event</th>
                <th className="px-4 py-2 text-left">Time</th>
                <th className="px-4 py-2 text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Jan 10, 2024</td>
                <td className="border px-4 py-2">Leadership Workshop</td>
                <td className="border px-4 py-2">10:00 AM - 12:00 PM</td>
                <td className="border px-4 py-2">Room 101</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Jan 12, 2024</td>
                <td className="border px-4 py-2">Networking Session</td>
                <td className="border px-4 py-2">2:00 PM - 4:00 PM</td>
                <td className="border px-4 py-2">Conference Hall</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Jan 15, 2024</td>
                <td className="border px-4 py-2">Mentorship Program</td>
                <td className="border px-4 py-2">9:00 AM - 11:00 AM</td>
                <td className="border px-4 py-2">Room 202</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Event Highlights */}
        <section
          id="event-highlights"
          className="bg-blue-200 p-6 rounded-lg mb-6"
        >
          <h2 className="text-xl font-semibold mb-4">Event Highlights</h2>
          <ul className="list-disc ml-6">
            <li>Gain practical leadership skills in the workshop</li>
            <li>Network with industry experts in the session</li>
            <li>Benefit from personalized mentorship and guidance</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default DSchedule;
