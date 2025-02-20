import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { preloadImages } from "./utils/preloadimages";
import { useState, useEffect } from "react";
import About from "./pages/About/About";
import Registration from "./pages/Registration/Registration";
import Theme from "./pages/Theme/Theme";
import Judge from "./pages/Judge/Judge";
import Volunteer from "./pages/Volunteer/Volunteer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages();
      } catch (error) {
        console.error("Error preloading images:", error);
      }
      setLoading(false); // Set loading to false after images are preloaded
    };

    loadImages();
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<h1>Board</h1>} />

        {/* SoCal MIST 2025 */}
        <Route path="/registration" element={<Registration />} />
        <Route path="/theme" element={<Theme />} />

        {/* Get Involved */}
        <Route path="/judge" element={<Judge />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
