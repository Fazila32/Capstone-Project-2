import React, { useState, useEffect } from "react";

function ContactForm() {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);
  const [heading, setHeading] = useState("Write me");

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);
  };

  const validationform = (value) => {
    const errors = {};
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.name) {
      errors.name = "Please Enter Name";
    }

    if (!value.email) {
      errors.email = "Please Enter Email";
    } else if (!emailPattern.test(value.email)) {
      errors.email = "Enter Valid Email";
    }
    if (!value.message) {
      errors.message = "Please Enter message";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formerror).length === 0 && issubmit) {
      console.log(formvalue);
      setFormvalue({ name: "", email: "", message: "" });
      setHeading("reply you soon ");
    }
  }, [formerror, formvalue, issubmit]);

  return (
    <div className="formPart">
      <h6>{heading}</h6>
      <div className=" row mb-5 formField">
        <form onSubmit={handlesubmit}>
          <div className="row mb-4">
            <label className="col-sm-2 col-form-label">
              Name<span className="astriccolor">*</span>
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formvalue.name}
                onChange={handlevalidation}
              />
              <span className="text-danger">{formerror.name} </span>
            </div>
          </div>

          <div className="row mb-4">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="email"
                value={formvalue.email}
                onChange={handlevalidation}
              />
              <span className="text-danger">{formerror.email} </span>
            </div>
          </div>

          <div className="row mb-4">
            <label className="col-sm-2 col-form-label">message</label>
            <div className="col">
              <textarea
                className="form-control"
                name="message"
                value={formvalue.message}
                onChange={handlevalidation}
              />
              <span className="text-danger">{formerror.message} </span>
            </div>
          </div>

          <div className="row mb-4">
            <label className="col-sm-2 col-form-label"></label>
            <div className="col">
              <button className="button_still cb" name="button">
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className="mb-5"></div>
        <div className="mb-5"></div>
        <div className="mb-5"></div>
      </div>
    </div>
  );
}

export default ContactForm;
