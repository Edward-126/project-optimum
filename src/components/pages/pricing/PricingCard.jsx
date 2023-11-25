import React, { useState } from "react";
import PricingModel from "./PricingModel";

export default function PricingCard(props) {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="col pricing-card-container">
      <div className="card pricing-card">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
          <p className="card-text1">{props.description}</p>
          <h5 className="card-title">Rs.{props.cardioGym}.00</h5>
          <p className="card-text2">{props.time} / Person</p>

          <button
            type="button"
            className="t-btn op-button"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal${props.id}`}
            onClick={handleButtonClick}
          >
            View Details
          </button>

          {showModal && (
            <PricingModel
              id={props.id}
              title={props.title}
              admissionFee={props.admissionFee}
              men={props.men}
              women={props.women}
              cardioGym={props.cardioGym}
              closeModal={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
