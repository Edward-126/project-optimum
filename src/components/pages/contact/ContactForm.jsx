import React from "react";
import "../../styles/Contact.css";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sn4s2zf", "template_o2587mg", e.target)
      .then((response) => {
        console.log("Email sent successfully:", response);

        alert("Registration Successful");

        window.location.reload();
        window.location.href = "#contact";
      })
      .catch((error) => {
        console.log("Error sending email:", error);

        alert("Registration Failed");
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
          <button className="t-btn op-button contact-btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
