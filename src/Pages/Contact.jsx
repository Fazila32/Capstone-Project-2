import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import "../styling/contact.css";
import {
  FaWhatsappSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaEnvelopeSquare,
} from "react-icons/fa";
import ContactBG from "../images/contact3.png";

function Contact() {
  const beConnected = [
    {
      id: 1,
      icon: (
        <a href="https://bit.ly/3twNNHE" target="blank">
          <FaWhatsappSquare size={50} style={{ color: "#c7ecee" }} />
        </a>
      ),
      tagline: "drop your question",
    },
    {
      id: 2,
      icon: (
        <a
          href="https://www.linkedin.com/in/ani-graphics-343190210"
          target="blank"
        >
          <FaLinkedin size={50} style={{ color: "#c7ecee" }} target="blank" />
        </a>
      ),
      tagline: "LinkedIn",
    },
    {
      id: 3,
      icon: (
        <a href="https://www.facebook.com/AnilaDesigner786/" target="blank">
          <FaFacebookSquare size={50} style={{ color: "#c7ecee" }} />
        </a>
      ),
      tagline: "Ani's facebook page",
    },
    {
      id: 4,
      icon: (
        <a href="#">
          <FaEnvelopeSquare size={50} style={{ color: "#c7ecee" }} />
        </a>
      ),
      tagline: "email at: anila.stat@gmail.com",
    },
  ];
  return (
    <div>
      <div className="contactHeader">
        <div className="container-fluid row">
          <div className="HeaderRight col-lg-6 text-center">
            <h1 className="tagline">Have a question? let's get in touch</h1>
          </div>
          <div className="Headerleft col-lg-5 text-center">
            <img src={ContactBG} alt="graphic designer" />
          </div>
        </div>
      </div>
      <h6>contact me</h6>
      <h2>Let's discuss your projects</h2>
      <div className="contactArea container row">
        <div className="contactLeft col-md-5">
          <span>
            <ul>
              <li>
                {beConnected.map((SocialMedia) => (
                  <div class="li_wrap">
                    <div class="icon">{SocialMedia.icon}</div>
                    <div class="text p-3">{SocialMedia.tagline}</div>
                  </div>
                ))}
              </li>
            </ul>
          </span>
        </div>
        <div className="contactRight col-md-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
export default Contact;
