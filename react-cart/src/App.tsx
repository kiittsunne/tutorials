// Utils
import { Routes, Route } from "react-router-dom";
// Styling
import { Container } from "react-bootstrap";
// Pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
// Components
import { Navbar } from "./components/Navbar";
// Contexts
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </CartContextProvider>
    </>
  );
}

export default App;
