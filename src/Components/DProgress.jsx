import DNav from "./DNav";

function DProgress() {
  const progressData = [
    { title: "Module 1", progress: 80 },
    { title: "Module 2", progress: 60 },
    { title: "Module 3", progress: 90 },
    { title: "Module 4", progress: 50 },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-qasfblue to-qasfgreen">
      <DNav />
      <div className="w-3/4 bg-white p-6">
        <section className="bg-qasfblue p-6 rounded-lg mb-6 text-white shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Progress Overview</h2>
          <p className="text-sm">
            Track your progress through the modules and see how far you've come.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-qasfblue">
            Your Progress
          </h3>
          <div className="space-y-4">
            {progressData.map((item, index) => (
              <div
                key={index}
                className="bg-qasfgreen p-4 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                  <div
                    className="bg-qasfblue h-4 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <p className="text-white mt-2">{item.progress}% completed</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DProgress;
