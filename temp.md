    <nav
      className="navbar navbar-expand-lg bg-body-transparent"
      data-bs-theme="dark"
      uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500"
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          OPTIMUM™
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active nav-item-nav"
                aria-current="page"
                href="#"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-nav" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-item-nav" href="#services">
                SERVICES
              </a>
            </li>
          </ul>
          {/* <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <a className="nav-link nav-item-nav" href="login.php">
                LOGIN
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>

---

              <a
                href="#about"
                className="main-btn"
                onMouseOver={(e) => changeText(e.target)}
                onMouseOut={(e) => changeTextBack(e.target)}
              >
                Optimum Gym
              </a>

---

    <div id="services">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h1>Our Programs</h1>
            <p>
              Discover a diverse range of specialized fitness programs at
              Optimum Gym, meticulously crafted to cater to your unique fitness
              goals.
            </p>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="card services-card">
                  <div className="card-img-container">
                    <img
                      src={sc1}
                      className="card-img-top"
                      alt="Anaerobic Overdrive"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Anaerobic Overdrive</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Every Tuesday
                    </h6>
                    <p className="card-text">
                      Unleash your power with short, intense bursts of activity,
                      targeting fast-twitch muscles for explosive strength
                      gains.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="card services-card">
                  <div className="card-img-container">
                    <img
                      src={sc2}
                      className="card-img-top"
                      alt="Anaerobic Overdrive"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">CrossFit Catalyst</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Every Sunday
                    </h6>
                    <p className="card-text">
                      Immerse yourself in a community-driven CrossFit
                      experience, combining varied functional movements with
                      high-intensity workouts for total-body conditioning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 col-sm-6">
                <div className="card services-card">
                  <div className="card-img-container">
                    <img
                      src={sc3}
                      className="card-img-top"
                      alt="Anaerobic Overdrive"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Metabolic Ignition</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Every Thursday
                    </h6>
                    <p className="card-text">
                      Ignite your metabolism with a blend of cardio and strength
                      training, optimizing fat burn, improving cardiovascular
                      fitness, and sculpting lean muscle.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="card services-card">
                  <div className="card-img-container">
                    <img
                      src={sc4}
                      className="card-img-top"
                      alt="Anaerobic Overdrive"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">EnduroElite Endurance</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Card subtitle
                    </h6>
                    <p className="card-text">
                      Tailored for endurance enthusiasts, this program focuses
                      on building stamina and cardiovascular fitness, perfect
                      for runners, cyclists, and those seeking lasting endurance
                      gains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

---

import React from "react";
import "../../styles/Contact.css";

const ContactForm = () => {
const sendEmail = (e) => {
e.preventDefault();

    emailjs
      .sendForm("service_sn4s2zf", "template_o2587mg", e.target)
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });

};

return (
<div className="container align-items-center">
<form className="sign-up" onSubmit={sendEmail}>
<img className="mb-3" src="" />

        <div className="row g-3">
          <div className="form-floating col-sm-6 name-first">
            <input
              className="form-control"
              id="floatingInput1"
              placeholder="name"
              type="text"
              name="first_name"
              required
            />
            <label htmlFor="floatingInput1" className="float-lable">
              First Name
            </label>
          </div>

          <div className="form-floating col-sm-6 name-last">
            <input
              className="form-control"
              id="floatingInput2"
              placeholder="name"
              type="text"
              name="last_name"
              required
            />
            <label htmlFor="floatingInput2" className="float-lable">
              Last Name
            </label>
          </div>

          <div className="form-floating col-12">
            <input
              className="form-control"
              id="floatingInput3"
              placeholder="name"
              name="contact_number"
              required
            />
            <label htmlFor="floatingInput3" className="float-lable">
              Contact Number
            </label>
          </div>

          <div className="form-floating col-12">
            <textarea
              className="form-control"
              id="floatingInput4"
              placeholder="name"
              name="message"
              type="text"
            ></textarea>
            <label htmlFor="floatingInput4" className="float-lable">
              Message
            </label>
          </div>
        </div>

        <button className="t-btn op-button contact-btn" type="submit">
          Register
        </button>
      </form>
    </div>

);
};

export default ContactForm;
