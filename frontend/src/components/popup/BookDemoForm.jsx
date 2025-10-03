import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const BookDemoForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    description: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const service_id = "service_ixhoibk";
  const template_id = "template_afvdt8u";
  const user_id = "ozF4iULix-uuJgZpO";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");


    const emailParams = {
      name: formData.name,
      to_email: formData.email,
      phone: `${formData.countryCode} ${formData.mobile}`,
      company: formData.company,
      description: formData.description,
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
        name: "",
        email: "",
        mobile: "",
        company: "",
        description: "",
      });
      setSubmittedData(formData);
    } catch (error) {
      console.error("❌ Email sending failed: ", error, user_id);
      alert("❌ Email sending failed. Please try again.");
    } finally {
      setLoading(false);
    }

    // try {
    //   const response = await axios.post(
    //     "http://localhost:8000/api/book-demo/submit",
    //     formData
    //   );
    //   console.log("Response:", response.data);
    //   setSubmittedData(formData);
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   setError("Failed to submit. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="popup-overlay" onClick={closeForm}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {submittedData ? (
          <div className="submitted-container">
            {/* <h3 className="submitted-title">🎉 Thank You for Booking a Demo! 🎉</h3> */}
            <h3 className="demo-title">🔑 Test BMS Role Based Credentials</h3>
            <div className="demo-credentials">
              <div className="demo-box">
                {/* <strong>Link:</strong>  */}
                <a
                  className="btn btn-primary"
                  href="https://munc.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Munc.in
                </a>
                <br />
                <strong>Admin Demo:</strong> <br />
                <span>demo.admin@munc.in</span> <br />
                <span>
                  Password: <strong>admin@123</strong>
                </span>
              </div>
              <div className="demo-box">
                <strong>HR Demo:</strong> <br />
                <span>demo.hr@munc.in</span> <br />
                <span>
                  Password: <strong>hr@123</strong>
                </span>
              </div>
              <div className="demo-box">
                <strong>Manager Demo:</strong> <br />
                <span>demo.manager@munc.in</span> <br />
                <span>
                  Password: <strong>manager@123</strong>
                </span>
              </div>
              <div className="demo-box">
                <strong>Employee Demo:</strong> <br />
                <span>demo.employee@munc.in</span> <br />
                <span>
                  Password: <strong>employee@123</strong>
                </span>
              </div>
            </div>

            <button className="btn btn-danger close-btn " onClick={closeForm}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Book a Demo</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Brief Description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeForm}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookDemoForm;

// import React, { useState } from "react";
// import axios from "axios";

// const BookDemoForm = ({ closeForm }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     company: "",
//     description: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post("http://localhost:8000/api/book-demo/submit", formData);
//       console.log("Response:", response.data);
//       setSubmitted(true);

//       // Reset form after submission
//       setTimeout(() => {
//         closeForm();
//         setFormData({
//           name: "",
//           email: "",
//           mobile: "",
//           company: "",
//           description: "",
//         });
//         setSubmitted(false);
//       }, 2000);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setError("Failed to submit. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="popup-overlay" onClick={closeForm}>
//       <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//         {submitted ? (
//           <h3>Thanks for submitting!</h3>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <h2>Book a Demo</h2>
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Your Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               name="company"
//               placeholder="Company Name"
//               value={formData.company}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="description"
//               placeholder="Brief Description"
//               rows="3"
//               value={formData.description}
//               onChange={handleChange}
//             ></textarea>
//             <button type="submit" className="btn btn-primary" disabled={loading}>
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//             <button type="button" className="btn btn-secondary" onClick={closeForm}>
//               Cancel
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookDemoForm;
