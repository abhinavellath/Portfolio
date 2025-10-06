import LightRays from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Home2 from "./Home2";

function Home() {
  return (
    <div className="relative w-full">
      {/* Light rays background */}
      <div className="pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={2}
          rayLength={4}
          fadeDistance={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero className="relative z-10" />

      {/* About section */}
      <Home2 />
    </div>
  );
}

export default Home;
