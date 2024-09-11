import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-section/Home";
import Service from "./pages/service-section/Service";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Service />} />
    </Routes>
  );
};

export default App;
