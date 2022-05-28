import { Navbar, Home, Footer } from "./components";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Home />
      </header>
      <Footer />
    </div>
  );
}

export default App;
