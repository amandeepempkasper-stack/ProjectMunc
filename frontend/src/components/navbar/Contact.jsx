import React, { useEffect, useState } from "react";
import ContactImg from "../../assets/HomeSection/ContactSec/SideImg.png";
import axios from "axios";
import BASE_URL from "../../pages/Config/config";
import toast from "react-hot-toast";
import "./navbar.css";

const Contact = ({ setShowForm, showForm }) => {
  const [storeData, setStoreData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    designation: "",
    product: "",
  });

  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91"); // Default India
  const [countries, setCountries] = useState([]);

  // ✅ Fetch Country Codes from API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=idd,name,flags"
        );

        // Filter countries with calling codes
        const countryList = response.data
          .filter((country) => country.idd && country.idd.root)
          .map((country) => {
            const code = `${country.idd.root}${
              country.idd.suffixes ? country.idd.suffixes[0] : ""
            }`;
            return {
              name: country.name.common,
              code,
              flag: country.flags?.png,
            };
          })
          .sort((a, b) => a.name.localeCompare(b.name)); // sort alphabetically

        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // ✅ Disable background scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...storeData,
      phone: `${countryCode}-${storeData.phone}`, // attach country code
    };

    try {
      const response = await axios.post(`${BASE_URL}/api/demo`, payload);

      if (response.data.success) {
        toast.success("Demo request submitted successfully!");
        setStoreData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          product: "",
          designation: "",
        });
        setCountryCode("+91");

        // Close modal after short delay
        setTimeout(() => setShowForm(false), 2000);
      } else {
        toast.error("Failed to submit demo request!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!showForm) return null;

  return (
    <div
      className="
    fixed inset-0 z-50 flex items-center justify-center 
    bg-black/30 backdrop-blur-sm px-4 sm:px-6
    animate-fadeIn
  "
    >
      <div
        className=" relative 
      w-full max-w-4xl bg-white rounded-2xl shadow-lg 
      flex flex-col md:flex-row overflow-hidden
      transition-all duration-300
    "
      >
        {/* ✕ Close */}
        <button
          type="button"
          onClick={() => setShowForm(false)}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        {/* Illustration */}
        <div className="hidden md:flex w-1/2 bg-[#F5FAFF] items-center justify-center">
          <img
            src={ContactImg}
            alt="Contact Illustration"
            className="w-4/5 object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-900">Try a Demo</h2>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
            Your business matters to us. Get in touch for product demos or
            partnerships.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {/* Name */}
            <input
              name="name"
              type="text"
              value={storeData.name}
              onChange={(e) => {
                const value = e.target.value;
                // ✅ Allow only alphabets (A-Z, a-z) and spaces
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Your Name *"
              required
              maxLength={50} // optional: restrict max length
              pattern="[A-Za-z\s]{2,50}" // ✅ ensures only letters + spaces, min 2 max 50
              title="Name should only contain letters (A–Z or a–z)."
              className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm focus:ring-1 focus:ring-[#007AFF] outline-none"
            />

            {/* Company Name */}
            <input
              name="companyName"
              type="text"
              value={storeData.companyName}
              onChange={handleChange}
              placeholder="Company Name *"
              required
              className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm focus:ring-1 focus:ring-[#007AFF] outline-none"
            />

            {/* Designation */}
            <input
              name="designation"
              type="text"
              value={storeData.designation}
              onChange={handleChange}
              placeholder="Your Designation"
              className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm focus:ring-1 focus:ring-[#007AFF] outline-none"
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              value={storeData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm focus:ring-1 focus:ring-[#007AFF] outline-none"
            />

            {/* Phone + Country */}
            <div className="flex">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="h-11 w-24 border border-gray-200 rounded-l-lg px-2 text-sm bg-gray-50 outline-none"
              >
                {countries.map((c, index) => (
                  <option key={index} value={c.code}>
                    {c.name} {c.code}
                  </option>
                ))}
              </select>

              <input
                name="phone"
                type="tel"
                value={storeData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                className="flex-1 h-11 rounded-r-lg border border-gray-200 px-3 text-sm focus:ring-1 focus:ring-[#007AFF] outline-none"
              />
            </div>

            {/* Product */}
            <select
              name="product"
              value={storeData.product}
              onChange={handleChange}
              required
              className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm text-gray-600 bg-white focus:ring-1 focus:ring-[#007AFF] outline-none"
            >
              <option value="" disabled hidden>
                Our Products *
              </option>
              <option value="LMS">Lead Management</option>
              <option value="IMS">Inventory Management</option>
              <option value="ChatApp">Chat Application</option>
              <option value="HRMS">HR Management</option>
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-11 rounded-full text-white font-medium text-sm 
            transition-all duration-200 
            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#007AFF] hover:bg-[#0063CC]"
            }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
