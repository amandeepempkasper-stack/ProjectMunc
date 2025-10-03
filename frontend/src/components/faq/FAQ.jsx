// import { useState } from "react";
// import { FiPlus, FiX } from "react-icons/fi";
// import "./faq.css";

// const FAQ = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="faq-item">
//       <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
//         <p className="my-0">{question}</p>
//         <div className={`icon ${isOpen ? "rotate" : ""}`}>
//           {isOpen ? <FiX /> : <FiPlus />}
//         </div>
//       </div>
//       <div className={`faq-answer ${isOpen ? "open" : ""}`}>
//         <p>{answer}</p>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "./faq.css";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const downloadUrl =
      "https://docs.google.com/document/d/1jq7Dg3rIuuIxzOWIB29FyopcoDI9Rt89-wAQiSr7Wh0/export?format=pdf";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "MUNC_Whiteboard.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <p className="my-0">{question}</p>
        <div className={`icon ${isOpen ? "rotate" : ""}`}>
          {isOpen ? <FiX /> : <FiPlus />}
        </div>
      </div>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
        {question === "What is MUN-C?" && (
          <button onClick={handleDownload} className="btn btn-primary mt-2">
            Download Whitepaper
          </button>
        )}
      </div>
    </div>
  );
};

export default FAQ;



// import { useState } from "react";
// import { FiPlus, FiX } from "react-icons/fi";
// import "./faq.css";

// const FAQ = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/path-to-your-pdf/MUNC-Brochure.pdf"; // Replace with your actual PDF path
//     link.download = "MUN-C_Brochure.pdf";
//     link.click();
//   };

//   return (
//     <div className="faq-item">
//       <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
//         <p className="my-0">{question}</p>
//         <div className={`icon ${isOpen ? "rotate" : ""}`}>
//           {isOpen ? <FiX /> : <FiPlus />}
//         </div>
//       </div>
//       <div className={`faq-answer ${isOpen ? "open" : ""}`}>
//         <p>{answer}</p>
//         {question === "What is MUN-C?" && (
//           <button onClick={handleDownload} className="btn btn-primary mt-2">
//             Download PDF
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

