import "../../styles/About.css";
import coach from "../../../assets/coach.jpg";

export default function About() {
  return (
    <div id="about">
      <div
        className="container about-content"
        uk-scrollspy="cls: uk-animation-fade; target: div; delay: 120; repeat: false"
      >
        <div className="row">
          <div
            className="col-sm-5 about-item"
            uk-scrollspy-class="uk-animation-slide-left"
          >
            <div className="uk-inline">
              <img className="about-img" src={coach} alt="MyPic" />
              <div className="uk-overlay-primary uk-position-cover" />
              <div className="uk-overlay uk-position-bottom uk-light">
                <p>Coach's pic will go here.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-7 about-item">
            <h1 className="sub-title">
              <i className="bx bxs-user"></i> About{" "}
              <span className="main-c-about">Mr.Manoj Perera</span>
            </h1>
            <p>
              Meet Mr.Manoj Perera, the visionary owner of{" "}
              <span className="main-c">Optimum</span> Gym. With a background as
              a former lecturer, he seamlessly blends academic expertise and
              practical wisdom to create a fitness haven prioritizing education
              and action. As a seasoned nutrition expert, Manoj Perera advocates
              for a holistic lifestyle, providing personalized guidance to
              ensure each member reaches their optimum potential. Join Manoj
              Perera at Optimum Gym for a transformative approach to fitness,
              where knowledge meets practice. Elevate your fitness experience
              with us and embark on a transformative journey together.
            </p>
            <a href="#contact">
              <button className="t-btn op-button about-btn">Join Us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
