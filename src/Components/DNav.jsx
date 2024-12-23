import { NavLink } from "react-router-dom";

function DNav() {
  return (
    <div className="w-1/4 bg-qasfblue text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Talem Mumkin Program</h1>
      <nav>
        <ul>
          <li className="mb-4 flex items-center">
            <img
              src="/src/assets/DHome.svg"
              alt="Home Icon"
              className="w-5 h-5 mr-2"
            />
            <NavLink to="/dashboard/" className="hover:text-gray-300">
              Home
            </NavLink>
          </li>
          <li className="mb-4 flex items-center">
            <img
              src="/src/assets/DTrainers.svg"
              alt="Trainers Icon"
              className="w-5 h-5 mr-2"
            />
            <NavLink to="/dashboard/trainers" className="hover:text-gray-300">
              Trainers
            </NavLink>
          </li>
          <li className="mb-4 flex items-center">
            <img
              src="/src/assets/DProgress.svg"
              alt="Progress Icon"
              className="w-5 h-5 mr-2"
            />
            <NavLink to="/dashboard/progress" className="hover:text-gray-300">
              Progress
            </NavLink>
          </li>
          <li className="mb-4 flex items-center">
            <img
              src="/src/assets/DLinks.svg"
              alt="Links Icon"
              className="w-5 h-5 mr-2"
            />
            <NavLink to="/dashboard/links" className="hover:text-gray-300">
              Links
            </NavLink>
          </li>
          <li className="mb-4 flex items-center">
            <img
              src="/src/assets/DSchedule.svg"
              alt="Schedule Icon"
              className="w-5 h-5 mr-2"
            />
            <NavLink to="/dashboard/schedule" className="hover:text-gray-300">
              Schedule
            </NavLink>
          </li>
          <li className="mb-4 flex items-center">
            <img
              src="/src/assets/DSettings.svg"
              alt="Settings Icon"
              className="w-5 h-5 mr-2"
            />
            <NavLink
              to="/dashboard/settings"
              className="hover:text-gray-300"
              activeClassName="font-bold text-yellow-300"
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DNav;
