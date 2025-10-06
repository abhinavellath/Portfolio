import LightRays from './components/Background.jsx'
import Hero from './components/Hero.jsx'
import './App.css'

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* Light rays background */}
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

      {/* Hero section on top */}
      <Hero className="relative z-10" />
    </div>
  )
}

export default App
