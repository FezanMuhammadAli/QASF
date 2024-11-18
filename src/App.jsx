import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
import GetStart from "./Components/GetStart";
import Contact from "./Components/Contact";
import CreateAccount from "./Components/CreateAccount";
import Login from "./Components/Login";
import Terms from "./Components/Terms";
import DNavbar from "./Components/DNavbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/getstart" element={<GetStart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/dashboard" element={<DNavbar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
