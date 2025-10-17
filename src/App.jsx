import Home from "./pages/Home";
import MoreAboutMe from "./pages/MoreAboutMe";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar now appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-about-me" element={<MoreAboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
