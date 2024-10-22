import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Components/Index";
import Review from "./Components/Review";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Coffee from "./Components/Coffee";
import EcoFriendlySystem from "./Components/EcoFriendlySystem";
import Generic from "./Components/Generic";
import Elements from "./Components/Elements";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Coffee" element={<Coffee />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/EcoFriendlySystem" element={<EcoFriendlySystem />} />
        <Route path="/Review" element={<Review />} />

        <Route path="/Generic" element={<Generic />} />
        <Route path="/Elements" element={<Elements />} />
      </Routes>
    </Router>
  );
}

export default App;
