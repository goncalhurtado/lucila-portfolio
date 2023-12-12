import Navegation from "./components/Navegation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Presto from "./pages/portfolio/Presto";
import Simile from "./pages/portfolio/Simile";
function App() {
  return (
    <>
      <Navegation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/presto" element={<Presto />} />
        <Route path="/portfolio/simile" element={<Simile />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
