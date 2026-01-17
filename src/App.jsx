import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import PageTransition from "./components/PageTransition/PageTransition";
import About from "./pages/About/About";
import Board from "./pages/Board/Board";
import Competitions from "./pages/Competitions/Competitions";
import EarlySubmissions from "./pages/EarlySubmissions/EarlySubmissions";
import Home from "./pages/Home/Home";
import Judge from "./pages/Judge/Judge";
import Registration from "./pages/Registration/Registration";
import Sponsor from "./pages/Sponsor/Sponsor";
import Theme from "./pages/Theme/Theme";
import Volunteer from "./pages/Volunteer/Volunteer";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className="bg-black">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/board" element={<PageTransition><Board /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/theme" element={<PageTransition><Theme /></PageTransition>} />
            <Route path="/registration" element={<PageTransition><Registration /></PageTransition>} />
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
