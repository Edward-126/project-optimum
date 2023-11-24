// import sc1 from "../../../assets/services/sc1.jpg";
// import sc2 from "../../../assets/services/sc2.jpg";
// import sc3 from "../../../assets/services/sc3.jpg";
// import sc4 from "../../../assets/services/sc4.jpg";

import servicesData from "./servicesData";
import ServiceCard from "./ServiceCard";
import "../../styles/Services.css";

export default function Programs() {
  const cardElements = servicesData.map((data) => {
    return <ServiceCard key={data.id} {...data} />;
  });

  return (
    <div id="services">
      <div
        className="container"
        uk-scrollspy="cls: uk-animation-fade; target: div; delay: 120; repeat: false"
      >
        <div className="row">
          <div className="col-sm-5">
            <h1 className="service-head">
              <i className="bx bxs-info-circle"></i> Our Programs
            </h1>
            <p className="service-content">
              Experience transformation at{" "}
              <span className="main-c">Optimum</span> Gym with our specialized
              programs. Sundays feature dynamic CrossFit, Thursdays bring HIIT
              Blast's calorie-burning intensity, and Tuesdays focus on
              muscle-sculpting Anaerobic training. Led by expert trainers, each
              session is tailored to your fitness journey, whether you're a
              seasoned athlete or a beginner. Join us on Tuesday, Thursday, and
              Sunday to achieve your unique fitness goals.
            </p>
          </div>
          <div className="col-sm-7">
            <div className="row">{cardElements}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
