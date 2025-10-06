import React, { useState } from "react";
import ContactImg from "../assets/HomeSection/ContactSec/SideImg.png";
import toast from "react-hot-toast";
import BASE_URL from "../pages/Config/config";

const Contact = () => {
  const [storeData, setStoreData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    queryType: "", // optional
    designation: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!storeData.name.trim()) newErrors.name = "Name is required";
    if (!storeData.email.trim()) newErrors.email = "Email is required";
    if (!storeData.phone.trim()) newErrors.phone = "Mobile number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true); // ✅ Start loading

    try {
      const response = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(storeData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form submitted successfully");
        setStoreData({
          name: "",
          company: "",
          email: "",
          phone: "",
          queryType: "",
          designation: "",
        });
        setErrors({});
      } else {
        toast.error(data.message || "Failed to save form. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting form!");
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div id="contact" className="bg-[#F0FDFF] mt-12 py-12" >
      <div className="flex justify-center items-center max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-10 bg-white ring-1 rounded-2xl ring-black/10 p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Image Section */}
          <div className="bg-[#F0FDFF] w-full md:w-1/2 h-64 sm:h-72 md:h-96 lg:h-[450px] rounded-xl flex items-center justify-center">
            <img
              src={ContactImg}
              alt="Contact"
              className="max-h-full object-contain"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
              Get in Touch
            </h2>
            <p className="text-[14px] sm:text-base text-[#7D7D7D] mt-3">
              Your business matters to us. Contact our team anytime for support,
              demos, or partnerships.
            </p>

            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name, Company, Designation */}
                <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={storeData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`h-12 w-full rounded-lg border placeholder:text-sm px-3 outline-none focus:ring-2 ${
                      errors.name ? "border-red-500" : "border-black/10 focus:ring-[#727272]"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={storeData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="h-12 w-full rounded-lg border placeholder:text-sm border-black/10 px-3 outline-none focus:ring-2 focus:ring-[#727272]"
                  />

                  <input
                    id="designation"
                    name="designation"
                    type="text"
                    value={storeData.designation}
                    onChange={handleChange}
                    placeholder="Your Designation"
                    className="h-12 w-full rounded-lg border placeholder:text-sm border-black/10 px-3 outline-none focus:ring-2 focus:ring-[#727272]"
                  />
                </div>

                {/* Email, Phone, Product */}
                <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={storeData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`h-12 w-full rounded-lg border px-3 outline-none focus:ring-2 ${
                      errors.email ? "border-red-500" : "border-black/10 focus:ring-[#727272]"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={storeData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                    className={`h-12 w-full rounded-lg border px-3 outline-none focus:ring-2 ${
                      errors.phone ? "border-red-500" : "border-black/10 focus:ring-[#727272]"
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

                  <div className="relative w-full">
                    <select
                      id="queryType"
                      name="queryType"
                      value={storeData.queryType}
                      onChange={handleChange}
    className="h-12 w-full rounded-lg border border-gray-300 px-3 pr-8 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] appearance-none text-gray-700 bg-white transition"
                    >
                      <option value="">Our Products</option>
                      <option value="LMS" className="bg-white text-gray-700">Lead Management</option>
                      <option value="IMS" className="bg-white text-gray-700">Inventory Management</option>
                      <option value="SMS" className="bg-white text-gray-700"> ChatApp</option>
                      <option value="HRMS" className="bg-white text-gray-700">HR Management</option>
                    </select>
                    {/* <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-500"> */}
                      <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500 text-sm">

                      ▼
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center justify-center rounded-full px-4 py-3 text-base font-medium text-white w-full transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#007AFF] hover:bg-[#0070f3] cursor-pointer"
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 010 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                        ></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




// import React, { useState } from "react";
// import ContactImg from "../assets/HomeSection/ContactSec/SideImg.png";
// import toast from "react-hot-toast";

// const Contact = () => {
//   const [storeData, setStoreData] = useState({
//     name: "",
//     company: "",
//     email: "",
//     phone: "",
//     queryType: "", // optional
//     designation: "", 
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStoreData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Only Name, Email, Phone are required
//     const newErrors = {};
//     if (!storeData.name.trim()) newErrors.name = "Name is required";
//     if (!storeData.email.trim()) newErrors.email = "Email is required";
//     if (!storeData.phone.trim()) newErrors.phone = "Mobile number is required";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(storeData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         toast.success("Form submitted successfully");
//         setStoreData({
//           name: "",
//           company: "",
//           email: "",
//           phone: "",
//           queryType: "",
//           designation: "",
//         });
//         setErrors({});
//       } else {
//         toast.error(data.message || "Failed to save form. Try again!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Error submitting form!");
//     }
//   };

//   return (
//     <div id="contact" className="bg-[#F0FDFF]">
//       <div className="flex justify-center items-center max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-10 bg-white ring-1 rounded-2xl ring-black/10 p-4 sm:p-6 md:p-8 lg:p-12">
//           <div className="bg-[#F0FDFF] w-full md:w-1/2 h-64 sm:h-72 md:h-96 lg:h-[450px] rounded-xl flex items-center justify-center">
//             <img
//               src={ContactImg}
//               alt="ContactImg"
//               className="max-h-full object-contain"
//             />
//           </div>

//           <div className="w-full md:w-1/2">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
//               Get in Touch
//             </h2>
//             <p className="text-[14px] sm:text-base text-[#7D7D7D] mt-3">
//               Your business matters to us. Contact our team anytime for support,
//               demos, or partnerships.
//             </p>

//             <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-2">
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     value={storeData.name}
//                     onChange={handleChange}
//                     placeholder="Your Name"
//                     className="h-12 w-full rounded-lg border placeholder:text-sm border-black/10 px-3 outline-none focus:ring-2 focus:ring-[#727272]"
//                   />
//                   {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

//                   <input
//                     id="company"
//                     name="company"
//                     type="text"
//                     value={storeData.company}
//                     onChange={handleChange}
//                     placeholder="Company Name"
//                     className="h-12 w-full rounded-lg border placeholder:text-sm border-black/10 px-3 outline-none focus:ring-2 focus:ring-[#727272]"
//                   />

//                   <input
//                     id="designation"
//                     name="designation" 
//                     type="text"
//                     value={storeData.designation} 
//                     onChange={handleChange}
//                     placeholder="Your Designation"
//                     className="h-12 w-full rounded-lg border placeholder:text-sm border-black/10 px-3 outline-none focus:ring-2 focus:ring-[#727272]"
//                   />
//                 </div>

//                 <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-2">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={storeData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     className="h-12 w-full rounded-lg border border-black/10 px-3 outline-none focus:ring-2 focus:ring-[#727272]"
//                   />
//                   {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     value={storeData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter your phone"
//                     className="h-12 w-full rounded-lg border border-black/10 px-2 outline-none focus:ring-2 focus:ring-[#727272]"
//                   />
//                   {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

//                   <div className="relative w-full">
//                     <select
//                       id="queryType"
//                       name="queryType"
//                       value={storeData.queryType}
//                       onChange={handleChange}
//                       className="h-12 w-full rounded-lg border border-black/10 px-1.5 pr-6 outline-none focus:ring-2 focus:ring-[#727272] text-[#727272] appearance-none text-sm sm:text-base md:text-lg"
//                     >
//                       <option value="">Our Products (Optional)</option>
//                       <option value="LMS">Lead Management</option>
//                       <option value="IMS">Inventory Management</option>
//                       <option value="SMS">School Management</option>
//                       <option value="HRMS">HR Management</option>
//                     </select>

//                     <span className="absolute inset-y-0 right-0.5 flex items-center pointer-events-none text-gray-500">
//                       ▼
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center justify-end gap-3 pt-2">
//                 <button
//                   type="submit"
//                   className="inline-flex items-center justify-center cursor-pointer rounded-full px-4 py-3 text-base font-medium text-white bg-[#007AFF] hover:bg-[#0070f3] w-full transition"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
