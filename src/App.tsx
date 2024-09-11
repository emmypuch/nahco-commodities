import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-section/Home";
import Service from "./pages/service-section/Service";
import About from "./pages/about-section/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  );
};

export default App;
