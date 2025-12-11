import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Board from "./pages/Board/Board";
import About from "./pages/About/About";
import Theme from "./pages/Theme/Theme";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/about" element={<About />} />
        <Route path="/theme" element={<Theme />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
