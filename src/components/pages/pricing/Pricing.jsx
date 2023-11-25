import pricingData from "./pricingData";
import PricingCard from "./PricingCard";
import "../../styles/Pricing.css";

export default function Pricing() {
  const priceElements = pricingData.map((data) => {
    return <PricingCard key={data.id} {...data} />;
  });

  return (
    <div id="pricing">
      <div
        className="container"
        uk-scrollspy="cls: uk-animation-fade; target: div; delay: 100; repeat: false"
      >
        <div className="text-center">
          <h1 className="pricing-head">
            <i className="bx bx-badge-check"></i> Membership Plans
          </h1>
          <p className="fs-5 text-body-primary">
            Choose the plan that suits your fitness goals and lifestyle. Whether
            you're looking for a quick workout, monthly access, or a year-round
            commitment, we have a plan for everyone.
          </p>
          <div className="row text-start">{priceElements}</div>
        </div>
      </div>
    </div>
  );
}
