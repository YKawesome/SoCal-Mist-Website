import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Board from "./pages/Board/Board";
import About from "./pages/About/About";
import Theme from "./pages/Theme/Theme";
import Competitions from "./pages/Competitions/Competitions";
import EarlySubmissions from "./pages/EarlySubmissions/EarlySubmissions";
import Judge from "./pages/Judge/Judge";
import Volunteer from "./pages/Volunteer/Volunteer";
import Sponsor from "./pages/Sponsor/Sponsor";
import PageTransition from "./components/PageTransition/PageTransition";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="bg-accent">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/board" element={<PageTransition><Board /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/theme" element={<PageTransition><Theme /></PageTransition>} />
            <Route path="/competitions" element={<PageTransition><Competitions /></PageTransition>} />
            <Route path="/early-submissions" element={<PageTransition><EarlySubmissions /></PageTransition>} />
            <Route path="/judge" element={<PageTransition><Judge /></PageTransition>} />
            <Route path="/volunteer" element={<PageTransition><Volunteer /></PageTransition>} />
            <Route path="/sponsor" element={<PageTransition><Sponsor /></PageTransition>} />

            <Route path="*" element={<PageTransition><Home /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

export default App;
