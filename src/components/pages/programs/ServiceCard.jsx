import "../../styles/Services.css";

export default function ServiceCard(props) {
  return (
    <div className="col-12 col-sm-6 services-card-container">
      <div className="card services-card">
        <div className="card-img-container">
          {/* <img
            src={props.image}
            className="card-img-top"
            alt="Anaerobic Overdrive"
          /> */}
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <i className="bx bx-plus bx-spin"></i> {props.title}
          </h5>
          <h6 className="card-subtitle ">{props.day}</h6>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
