import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import CreateAccount from "./Components/CreateAccount";
import Login from "./Components/LogIn";
import Terms from "./Components/Terms";
import DHome from "./Components/DHome";
import DTrainers from "./Components/DTrainers";
import DLinks from "./Components/DLinks";
import DSchedule from "./Components/DSchedule";
import DSettings from "./Components/DSettings";

const RoutesConfig = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/dashboard",
    element: <DHome />,
  },
  {
    path: "/dashboard/home",
    element: <DHome />,
  },
  {
    path: "/dashboard/trainers",
    element: <DTrainers />,
  },
  {
    path: "/dashboard/settings",
    element: <DSettings />,
  },
  {
    path: "/dashboard/schedule",
    element: <DSchedule />,
  },
  {
    path: "/dashboard/links",
    element: <DLinks />,
  },
];

export default RoutesConfig;
