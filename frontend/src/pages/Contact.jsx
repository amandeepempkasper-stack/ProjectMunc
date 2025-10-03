import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Contactimg from "../assets/contact.png";
import "Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const service_id = "service_ixhoibk";
  const template_id = "template_z16frt6";
  const user_id = "ozF4iULix-uuJgZpO";

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      to_email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        service_id,
        template_id,
        emailParams,
        user_id
      );

      console.log("SUCCESS!", response.status, response.text);
      alert("✅ Email sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Email sending failed: ", error, user_id);
      alert("❌ Email sending failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {" "}
      <section id="contact" className="bg-lightpy-4">
        <div className="d-flex gap-3 container mx-auto align-items-center flex-wrap contactus">
          <div className="col-12 col-md-6">
            <img style={{ width: "100%" }} src={Contactimg} alt="Contact" />
          </div>

          <div className="h-100 p-3 rounded-3">
            <h2>Get in touch</h2>
            <p>You can reach us anytime</p>
            <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
              <div className="d-flex align-items-center gap-2">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="input-group2">
                <select
                  name="countryCode"
                  className="form-select"
                  defaultValue={"+91"}
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  <option value="+1">+1</option>
                  <option value="+7">+7</option>
                  <option value="+20">+20</option>
                  <option value="+27">+27</option>
                  <option value="+30">+30</option>
                  <option value="+31">+31</option>
                  <option value="+32">+32</option>
                  <option value="+33">+33</option>
                  <option value="+34">+34</option>
                  <option value="+39">+39</option>
                  <option value="+44">+44</option>
                  <option value="+49">+49</option>
                  <option value="+55">+55</option>
                  <option value="+61">+61</option>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone no. "
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={10}
                />
              </div>

              <textarea
                name="message"
                placeholder="How we can help?"
                rows="8"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button className="btn btn-primary py-2 rounded-2" type="submit">
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
