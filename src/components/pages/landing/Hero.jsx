import "../../styles/Hero.css";

export default function Hero() {
  const changeText = (element) => {
    element.innerHTML = "Discover More";
  };

  const changeTextBack = (element) => {
    element.innerHTML = "Optimum Gym";
  };

  return (
    <div
      className="container hero"
      uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300"
    >
      <div className="container text-center hero-text">
        <div className="row">
          <div className="col">
            <p className="hero-text-1">
              Unleash Your &nbsp;
              <i className="bx bxs-chevrons-right"></i>{" "}
              <span className="main-c1">Potential</span> at{" "}
              <span className="main-hc">Optimum</span> Gym. <br />
            </p>
            <p className="hero-sub-text">Where Fitness Meets Excellence</p>
            <a href="#about" className="main-btn-cont">
              <button className="t-btn op-button main-btn">
                Discover More
              </button>
            </a>
            <a href="#contact">
              <button className="t-btn op-button main-btn1">
                Resigter Now
              </button>
            </a>

            {/* <p className="hero-text-2">
              Elevate Your Fitness, Ignite Your Passion.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
