// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import GetStart from "./GetStart";
// import Background from "./Background";
import Navbar from "./Navbar";
import Hero from "./Hero";

function LandingPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-qasfblue to-qasfgreen h-screen w-full absolute top-0 left-0 -z-10">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default LandingPage;
