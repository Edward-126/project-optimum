import React from "react";

export default function PricingModel(props) {
  return (
    <div
      className="modal fade"
      id={`exampleModal${props.id}`}
      tabIndex={-1}
      aria-labelledby={`exampleModalLabel${props.id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {props.title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.closeModal}
            />
          </div>
          <div className="modal-body">
            <p>Admission Fee: Rs.{props.admissionFee}.00</p>
            <p>Men: Rs.{props.men}.00</p>
            <p>Women: Rs.{props.women}.00</p>
            <p>Cardio & Gym (Men/Women): Rs.{props.cardioGym}.00</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="t-btn"
              data-bs-dismiss="modal"
              onClick={props.closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
