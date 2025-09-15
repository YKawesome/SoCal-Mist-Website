import { useEffect, useState } from "react";
import { Sugar } from "react-preloaders";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Board from "./pages/Board/Board";
import Competitions from "./pages/Competitions/Competitions";
import Donate from "./pages/Donate/Donate";
import EarlySubmissions from "./pages/EarlySubmissions/EarlySubmissions";
import Home from "./pages/Home/Home";
import Judge from "./pages/Judge/Judge";
import Registration from "./pages/Registration/Registration";
import Sponsor from "./pages/Sponsor/Sponsor";
import Theme from "./pages/Theme/Theme";
import Volunteer from "./pages/Volunteer/Volunteer";
import { preloadImages } from "./utils/preloadimages";
import ScrollToTop from "./utils/scrolltotop";

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

      <ScrollToTop />

      <Sugar
        customLoading={loading}
        background="var(--color-neutral)"
        color="var(--color-primary)"
      />

      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />

        {/* SoCal MIST 2025 */}
        <Route path="/registration" element={<Registration />} />
        <Route path="/theme" element={<Theme />} />

        {/* Competitions */}
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/early-submissions" element={<EarlySubmissions />} />

        {/* Get Involved */}
        <Route path="/judge" element={<Judge />} />
        <Route path="/volunteer" element={<Volunteer />} />

        {/* Donate */}
        <Route path="/donate" element={<Donate />} />
        <Route path="/sponsor" element={<Sponsor />} />

      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
