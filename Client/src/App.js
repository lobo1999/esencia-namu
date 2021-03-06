import { Navbar, Home, Footer } from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/about/About";
import Photographers from "./components/about/Photographers";
import Destinations from "./components/destinations/Destinations";
import "./styles/index.css";
import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/destinations" element={<Destinations />}/>
      </Routes>
    </BrowserRouter>      
  );
}

export default App;
