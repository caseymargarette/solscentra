import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <Shop />
        <About />
        <ContactUs />
      </main>
      <Footer />
    </CartProvider>
  );
}