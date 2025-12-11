import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/about" element={<About />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/early-submissions" element={<EarlySubmissions />} />
        <Route path="/judge" element={<Judge />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
