import "../../styles/Footer.css";

export default function Footer() {
  return (
    <div id="footer">
      <footer>
        <div className="container">
          <hr />
          <div className="row">
            <div className="col text-start footer-small">
              <p>
                Made with{" "}
                <span>
                  <i className="bx bxs-heart" />
                </span>{" "}
                <br /> by{" "}
                <a
                  href="https://github.com/Edward-126"
                  className="footer-link main-c"
                >
                  Edward-Hyde
                </a>
              </p>
            </div>
            <div className="col text-start footer-large">
              <p>
                © 2023 Optimum Gym. All rights reserved. <br /> Designed &
                Developed by{" "}
                <a
                  href="https://github.com/Edward-126"
                  className="footer-link main-c"
                >
                  Edward-Hyde
                </a>
              </p>
            </div>

            <div className="col text-end footer-socials">
              <i className="bx bxl-facebook-square footer-socials-icon"></i>{" "}
              <i className="bx bxl-instagram-alt footer-socials-icon"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
