import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "../about/About";
import "../../styles/Home.css";

export default function Home() {
  return (
    <>
      <div id="home">
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
}
