import React, { useState } from "react";
import ContactImg from "../../assets/HomeSection/ContactSec/SideImg.png";
import axios from "axios";
import BASE_URL from "../../pages/Config/config"; // Your backend base URL
import toast from "react-hot-toast";

const Contact = ({ setShowForm, showForm }) => {
  const [storeData, setStoreData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    designation: "",
    product: "",
  });

  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData((prev) => ({ ...prev, [name]: value }));
  };

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // ✅ loading state
  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loading

    try {
      const response = await axios.post(`${BASE_URL}/api/demo`, storeData);

      if (response.data.success) {
        toast.success("Demo request submitted! Please check your email.");        // console.log("Saved to DB:", response.data.data);

        // Reset form
        setStoreData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          product: "",
          designation: "",
        });

        // Close popup after 2 seconds
        setTimeout(() => {
          setShowForm(false);
          setMessage("");
        }, 2000);
              setLoading(false); // ✅ Stop loading

      } else {
        toast.error("❌ Failed to submit the demo request!");
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("❌ Server error, please try again later.");
    }
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0  bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 sm:px-6">
      <div className="w-full max-w-6xl h-[55vh] mx-auto flex flex-col md:flex-row justify-evenly items-center gap-8 sm:gap-10 bg-white ring-1 rounded-2xl ring-black/10 p-4 sm:p-6 md:p-8 lg:p-12 relative shadow-xl overflow-y-auto max-h-[100vh]">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
          onClick={() => setShowForm(false)}
        >
          ✕
        </button>

        {/* Left Image */}
        <div className="bg-[#F0FDFF] w-full md:w-1/2 h-48 sm:h-64 md:h-80 lg:h-[450px] rounded-xl flex items-center justify-center">
          <img
            src={ContactImg}
            alt="Contact Illustration"
            className="max-h-full max-w-full object-contain"
          />
        </div>


<div className="w-full md:w-1/2  flex flex-col justify-center">
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-gray-900">
        Try a Demo
      </h2>
      <p className="text-sm sm:text-base text-[#7D7D7D]  sm:mt-3">
        Your business matters to us. Contact our team anytime for support,
        demos, or partnerships.
      </p>

      <form
  className="mt-4 space-y-4 overflow-y-auto max-h-[420px] px-1 pt-2 pb-4"
  onSubmit={handleSubmit}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input
      id="name"
      name="name"
      type="text"
      value={storeData.name}
      onChange={handleChange}
      placeholder="Your Name"
      required
      className="h-12 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] transition"
    />

    <input
      id="companyName"
      name="companyName"
      type="text"
      value={storeData.companyName}
      onChange={handleChange}
      placeholder="Company Name"
      required
      className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] transition"
    />

    <input
      id="designation"
      name="designation"
      type="text"
      value={storeData.designation}
      onChange={handleChange}
      placeholder="Your Designation"
      className="h-12 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] transition"
    />

    <input
      id="email"
      name="email"
      type="email"
      value={storeData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      required
      className="h-12 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] transition"
    />

    <input
      id="phone"
      name="phone"
      type="tel"
      value={storeData.phone}
      onChange={handleChange}
      placeholder="Enter your phone"
      required
      className="h-12 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] transition"
    />

   
    <div className="relative w-full">
  <select
    id="product"
    name="product"
    value={storeData.product}
    onChange={handleChange}
    required
    className="h-12 w-full rounded-lg border border-gray-300 px-3 pr-8 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] appearance-none text-gray-700 bg-white transition"
  >
    <option value="" disabled hidden className="bg-white text-gray-700">
      Our Products
    </option>
    <option value="LMS" className="bg-white text-gray-700">Lead Management</option>
    <option value="IMS" className="bg-white text-gray-700">Inventory Management</option>
    <option value="ChatApp" className="bg-white text-gray-700">ChatApp</option>
    <option value="HRMS" className="bg-white text-gray-700">HR Management</option>
  </select>
  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500 text-sm">
    ▼
  </span>
</div>

  </div>

  <div className="flex items-center justify-end pt-4">

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


      {/* <form className="mt-4 space-y-4 overflow-y-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            id="name"
            name="name"
            type="text"
            value={storeData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="h-12 w-full rounded-lg border border-black/10 px-3 outline-none placeholder:text-sm focus:ring-2 focus:ring-[#007AFF]"
          />
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={storeData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            required
            className="h-12 w-full rounded-lg border border-black/10 px-3 outline-none placeholder:text-sm focus:ring-2 focus:ring-[#007AFF]"
          />
          <input
            id="designation"
            name="designation"
            type="text"
            value={storeData.designation}
            onChange={handleChange}
            placeholder="Your Designation"
            className="h-12 w-full rounded-lg border border-black/10 px-3 outline-none placeholder:text-sm focus:ring-2 focus:ring-[#007AFF]"
          />
          <input
            id="email"
            name="email"
            type="email"
            value={storeData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="h-12 w-full rounded-lg border border-black/10 px-3 outline-none placeholder:text-sm focus:ring-2 focus:ring-[#007AFF]"
          />
          <input
            id="phone"
            name="phone"
            type="tel"
            value={storeData.phone}
            onChange={handleChange}
            placeholder="Enter your phone"
            required
            className="h-12 w-full rounded-lg border border-black/10 px-3 outline-none placeholder:text-sm focus:ring-2 focus:ring-[#007AFF]"
          />

          <div className="relative w-full col-span-2">
            <select
              id="product"
              name="product"
              value={storeData.product}
              onChange={handleChange}
              required
              className="h-12 w-full rounded-lg border border-black/10 px-3 pr-8 outline-none focus:ring-2 focus:ring-[#007AFF] text-[#727272] appearance-none text-sm"
            >
              <option value="" disabled hidden>
                Our Products
              </option>
              <option value="LMS">Lead Management</option>
              <option value="IMS">Inventory Management</option>
              <option value="ChatApp">School Management</option>
              <option value="HRMS">HR Management</option>
            </select>
            <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-500">
              ▼
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center cursor-pointer rounded-full px-4 py-3 text-base font-medium text-white bg-[#007AFF] hover:bg-[#0070f3] w-full transition"
          >
            Submit
          </button>
        </div>
      </form> */}
    </div>
  
        {/* Right Form */}
        {/* <div className="w-full md:w-1/2">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium text-gray-900">
            Try a Demo
          </h2>
          <p className="text-sm sm:text-base text-[#7D7D7D] mt-2 sm:mt-3">
            Your business matters to us. Contact our team anytime for support,
            demos, or partnerships.
          </p>

          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={storeData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="h-12 w-full rounded-lg border border-black/10 px-3 outline-none placeholder:text-sm focus:ring-2 focus:ring-[#007AFF]"
                />
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={storeData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                  className="h-12 w-full rounded-lg border border-black/10 px-3 outline-none placeholder:text-sm focus:ring-2 focus:ring-[#007AFF]"
                />
                <input
                  id="designation"
                  name="designation"
                  type="text"
                  value={storeData.designation}
                  onChange={handleChange}
                  placeholder="Your Designation"
                  className="h-12 w-full rounded-lg border border-black/10 px-3 outline-none placeholder:text-sm focus:ring-2 focus:ring-[#007AFF]"
                />
              </div>

              <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={storeData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="h-12 w-full rounded-lg border border-black/10 px-3 outline-none placeholder:text-sm focus:ring-2 focus:ring-[#007AFF]"
                />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={storeData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  required
                  className="h-12 w-full rounded-lg border border-black/10 px-2 outline-none placeholder:text-sm focus:ring-2 focus:ring-[#007AFF]"
                />

                <div className="relative w-full">
                  <select
                    id="product"
                    name="product"
                    value={storeData.product}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-lg border border-black/10 px-3 pr-8 outline-none focus:ring-2 focus:ring-[#007AFF] text-[#727272] appearance-none text-sm"
                  >
                    <option value="" disabled hidden>
                      Our Products
                    </option>
                    <option value="LMS">Lead Management</option>
                    <option value="IMS">Inventory Management</option>
                    <option value="ChatApp">School Management</option>
                    <option value="HRMS">HR Management</option>
                  </select>
                  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-500">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center cursor-pointer rounded-full px-4 py-3 text-base font-medium text-white bg-[#007AFF] hover:bg-[#0070f3] w-full transition"
              >
                Submit
              </button>
            </div>
          </form>

          
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
