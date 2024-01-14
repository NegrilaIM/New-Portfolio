import "./Contact.scss";
import send from "../../assets/send.svg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kfcqv5a",
      "template_axr49dn",
      form.current,
      "DfukBKtNt2ozNpVRt"
    );
    e.target.reset();
    setFormData({ name: "", email: "", message: "" });
  };

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">negrilaim@gmail.com</span>
              <a
                href="mailto:negrilaim@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatapp</h3>
              <span className="contact__card-data">+4073169359</span>
              <a
                href="https://api.whatsapp.com/send?phone=40731689359&text=Hi%20Iulian"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">Negrila Iulian</span>
              <a
                href="https://www.linkedin.com/in/iulian-marinel-negrila/"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name:</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                onChange={handleChange}
                pattern="[A-Za-z]+"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email:</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
                onChange={handleChange}
              ></textarea>
            </div>
            <button disabled={!isFormValid} className="button button--flex">
              {" "}
              Send message
              <img className="img" src={send} alt="" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
