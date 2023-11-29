import ContactForm from "./ContactForm";
import "../../styles/Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 contact-info">
            <h1 className="contact-head">
              <i className="bx bxs-contact"></i> Contact Us
            </h1>
            <p className="contact-body">
              <i className="bx bxs-phone-call"></i> (+94)11-2411161 <br />
              <i className="bx bxl-whatsapp"></i> (+94)77-3933114 <br />
              <i className="bx bxs-envelope"></i> optimumgym126@gmail.com
              <br />
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.732666690411!2d79.91003937427182!3d6.9225271930771415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259ddc63081f7%3A0x253b6738ce307369!2sOptimum%20Power%20%26%20Fitness%20Gym!5e0!3m2!1sen!2slk!4v1700899473448!5m2!1sen!2slk"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </div>
          <div className="col-sm-7 contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
