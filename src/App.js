import "./styles/App.css";
import { Navbar, Home, Footer } from "./components";

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
