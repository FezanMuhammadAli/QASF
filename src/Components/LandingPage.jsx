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
