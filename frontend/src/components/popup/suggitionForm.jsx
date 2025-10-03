// // SuggestionForm.jsx
// import React, { useState } from "react";
// import axios from "axios";
// // import "./SuggestionForm.css";

// const SuggestionForm = ({ closeForm }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [profession, setProfession] = useState("");
//   const [suggestion, setSuggestion] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !suggestion) {
//       alert("Please fill in required fields");
//       return;
//     }

//     const formData = {
//       fullName: name,
//       email,
//       mobile: mobileNo,
//       profession: profession,
//       suggestion_text: suggestion,
//     };

//     try {
//       await axios.post("http://localhost:8000/api/v1/suggestions", formData, {
//         withCredentials: true,
//         credentials: "include",
//       });
//       alert("Your suggestion has been submitted!");
//       setName("");
//       setEmail("");
//       setMobileNo("");
//       setProfession("");
//       setSuggestion("");
//       closeForm();
//     } catch (error) {
//       console.error("Error submitting suggestion", error);
//     }
//   };

//   return (
//     <div className="popup-overlay" onClick={closeForm}>
//       <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//         <h2>Suggestion Form</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Name*:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

//           <label>Mobile No.:</label>
//           <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />

//           <label>Profession:</label>
//           <select value={profession} onChange={(e) => setProfession(e.target.value)}>
//             <option value="">Select...</option>
//             <option value="Developer">Developer</option>
//             <option value="Designer">Designer</option>
//             <option value="Businessman">Businessman</option>
//             <option value="Teacher">Teacher</option>
//             <option value="Student">Student</option>
//             <option value="Other">Other</option>
//           </select>

//           <label>Suggestion*:</label>
//           <textarea
//             value={suggestion}
//             onChange={(e) => setSuggestion(e.target.value)}
//             rows="5"
//             required
//           ></textarea>

//           <button type="submit">Submit</button>
//         </form>
//         <button className="close-popup" onClick={closeForm}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SuggestionForm;


import React, { useState } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io"; // Import close icon
import "./SuggestionForm.css"; // Ensure you create/update this CSS file
import toast from "react-hot-toast";

const SuggestionForm = ({ closeForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [profession, setProfession] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !suggestion) {
      alert("Please fill in required fields");
      return;
    }

    const formData = {
      fullName: name,
      email,
      mobile: mobileNo,
      profession: profession,
      suggestion_text: suggestion,
    };

    try {
      await axios.post("http://localhost:8000/api/v1/suggestions", formData, {
        withCredentials: true,
        credentials: "include",
      });
      toast.success("Your suggestion has been submitted!");
      setName("");
      setEmail("");
      setMobileNo("");
      setProfession("");
      setSuggestion("");
      closeForm();
    } catch (error) {
      console.error("Error submitting suggestion", error);
    }
  };

  return (
    <div className="popup-overlay" onClick={closeForm}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button (Top Right) */}
        <button className="close-popup" onClick={closeForm}>
          <IoMdClose size={24} />
        </button>

        <h2>Suggestion Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Name*:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Mobile No.:</label>
          <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />

          <label>Profession:</label>
          <select value={profession} onChange={(e) => setProfession(e.target.value)}>
            <option value="">Select...</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Businessman">Businessman</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </select>

          <label>Suggestion*:</label>
          <textarea
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            rows="5"
            required
          ></textarea>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SuggestionForm;

