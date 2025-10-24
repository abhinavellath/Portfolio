import Home from "./pages/Home";
import MoreAboutMe from "./pages/MoreAboutMe";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Accomplishments from "./pages/Accomplishments";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar now appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-about-me" element={<MoreAboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/accomplishments" element={<Accomplishments />} /> 
      </Routes>
      <Footer /> {/* Footer now appears on all pages */}
    </Router>
  );
}

export default App;
