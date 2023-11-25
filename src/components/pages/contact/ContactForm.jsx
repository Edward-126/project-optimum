import "../../styles/Contact.css";
import React, { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby5SCNDRlQPlYOhahzsTPWMHVFg11q1sVRE-9Z2RbcYIXhQEWmH_DYTpWebRutk_0NA/exec",
        {
          method: "POST",
          body: new FormData(event.target),
        }
      );

      const data = await response.json();

      console.log("Data from server:", data);

      if (data.result === "success") {
        alert("Registration successful!");

        setTimeout(() => {
          window.location.href = "#contact";
        }, 500);
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container align-items-center">
      <form className="sign-up" onSubmit={handleSubmit}>
        <img className="mb-3" src="" />

        <div className="row g-3">
          <div className="form-floating col-sm-6 name-first">
            <input
              className="form-control"
              id="floatingInput1"
              placeholder="name"
              type="text"
              name="FirstName"
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
              name="LastName"
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
              type="email"
              name="Email"
              required
            />
            <label htmlFor="floatingInput3" className="float-lable">
              Email
            </label>
          </div>

          <div className="form-floating col-12">
            <textarea
              className="form-control"
              id="floatingInput4"
              placeholder="name"
              name="Feedback"
              type="text"
            ></textarea>
            <label htmlFor="floatingInput4" className="float-lable">
              Message
            </label>
          </div>

          <button
            className="t-btn op-button contact-btn"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Registering..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
}
