import React, { useEffect, useState } from "react";
import ContactImg from "../../assets/HomeSection/ContactSec/SideImg.png";
import axios from "axios";
import BASE_URL from "../../pages/Config/config";
import toast from "react-hot-toast";

const Contact = () => {
  const [storeData, setStoreData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    queryType: "",
  });

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [countries, setCountries] = useState([]);

  // ✅ Fetch Country Codes from API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=idd,name,flags"
        );

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
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...storeData,
      phone: `${countryCode}-${storeData.phone}`,
    };

    try {
      const response = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        toast.success(data.message || "Form submitted successfully");
        setStoreData({
          name: "",
          company: "",
          email: "",
          phone: "",
          queryType: "",
        });
        setCountryCode("+91");
        fetchContacts();
      } else {
        toast.error((data.message || "Something went wrong"));
      }
    } catch (err) {
      console.error(err);
      toast.error("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/contact`);
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div
      id="contact"
      className="bg-[#F0FDFF] px-4 py-12 sm:py-16 lg:py-20 scroll-smooth"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 bg-white rounded-2xl ring-1 ring-black/10 p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
        {/* Left Image Section */}
        <div className="bg-[#F0FDFF] w-full md:w-1/2 h-56 sm:h-64 md:h-80 lg:h-auto rounded-xl flex items-center justify-center">
          <img
            src={ContactImg}
            alt="Contact Illustration"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-[#7D7D7D] mt-2 sm:mt-3">
            Your business matters to us. Contact our team anytime for support,
            demos, or partnerships.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-4 space-y-4 h-max px-1 pt-2 pb-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              {/* Company */}
              <input
                id="company"
                name="company"
                type="text"
                value={storeData.company}
                onChange={handleChange}
                placeholder="Company Name *"
                required
                className="h-12 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] transition"
              />

              {/* Email */}
              <input
                id="email"
                name="email"
                type="email"
                value={storeData.email}
                onChange={handleChange}
                placeholder="Enter your email *"
                required
                className="h-12 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] transition"
              />

              {/* Phone with Country Code */}
              <div className="flex">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="h-12 w-24 border border-gray-300 rounded-l-lg px-2 text-sm bg-gray-50 outline-none transition"
                >
                  {countries.map((c, index) => (
                    <option key={index} value={c.code}>
                      {c.name} {c.code}
                    </option>
                  ))}
                </select>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={storeData.phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Only allow digits and max 15 chars
                    if (/^\d{0,15}$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  placeholder="Phone Number *"
                  required
                  maxLength={15} // ✅ HTML safeguard
                  pattern="[0-9]{7,15}" // ✅ Regex: between 7 and 15 digits
                  title="Phone number should contain only numbers (7–15 digits)."
                  className="flex-1 h-12 w-full rounded-r-lg border border-gray-300 border-l-0 px-3 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] transition"
                />
              </div>

              {/* Product Dropdown */}
              <div className="relative w-full col-span-1 sm:col-span-2">
                <select
                  id="queryType"
                  name="queryType"
                  value={storeData.queryType}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-lg border border-gray-300 px-3 pr-8 text-sm outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] appearance-none text-gray-600 bg-white transition"
                >
                  <option value="" disabled hidden>
                    Our Products *
                  </option>
                  <option value="LMS">Lead Management</option>
                  <option value="IMS">Inventory Management</option>
                  <option value="ChatApp">Chat Application</option>
                  <option value="HRMS">HR Management</option>
                </select>
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500 text-sm">
                  ▼
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center justify-center rounded-lg px-4 py-3 text-base font-medium text-white w-full transition
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#007AFF] hover:bg-[#0070f3] shadow-sm"
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
  );
};

export default Contact;
