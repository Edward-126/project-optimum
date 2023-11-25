import Home from "./components/pages/landing/Home";
import About from "./components/pages/about/About";
import Services from "./components/pages/programs/Services";
import Pricing from "./components/pages/pricing/Pricing";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/pages/footer/Footer";

import "./components/styles/root.css";
import "./App.css";

export default function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
