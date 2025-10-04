import React, { useState, useEffect } from "react";
import ContactImg from "../../assets/HomeSection/ContactSec/SideImg.png";

const Contact = () => {
  const [storeData, setStoreData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    description: "",
    queryType: "",
  });

  const [contacts, setContacts] = useState([]); // store fetched contacts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoreData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(storeData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setStoreData({
          name: "",
          company: "",
          email: "",
          phone: "",
          description: "",
          queryType: "",
        });

        // Refresh the list of contacts after submission
        fetchContacts();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/contact");
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div id="contact" className="bg-[#F0FDFF]">
      <div className="flex justify-center items-center max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-10 bg-white ring-1 rounded-2xl ring-black/10 p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="bg-[#F0FDFF] w-full md:w-1/2 h-64 sm:h-72 md:h-96 lg:h-[450px] rounded-xl flex items-center justify-center">
            <img
              src={ContactImg}
              alt="ContactImg"
              className="max-h-full object-contain"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
              Get in Touch
            </h2>
            <p className="text-[14px] sm:text-base text-[#7D7D7D] mt-3">
              Your business matters to us. Contact our team anytime for support,
              demos, or partnerships.
            </p>

            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={storeData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="h-12 w-full rounded-lg border placeholder:text-sm border-black/10 px-3 outline-none focus:ring-2 focus:ring-[#727272]"
                />
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={storeData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="h-12 w-full rounded-lg border placeholder:text-sm border-black/10 px-3 outline-none focus:ring-2 focus:ring-[#727272]"
                />

                <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={storeData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
      h-12 w-full rounded-lg border border-black/10 px-3 outline-none focus:ring-2 focus:ring-[#727272]
      placeholder:text-sm sm:placeholder:text-sm md:placeholder:text-sm lg:placeholder:text-xs 2xl:placeholder:text-sm
    "
                />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={storeData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  className="
      h-12 w-full rounded-lg border border-black/10 px-2 outline-none focus:ring-2 focus:ring-[#727272]
      placeholder:text-sm sm:placeholder:text-sm md:placeholder:text-sm
    "
                />

                
                <div className="relative w-full">
                  <select
                    id="queryType"
                    name="queryType"
                    value={storeData.queryType}
                    onChange={handleChange}
                    className="
      h-12 w-full rounded-lg border border-black/10 px-1.5 pr-6 outline-none 
      focus:ring-2 focus:ring-[#727272] text-[#999999]
      text-sm sm:text-sm
    "
                  >
                    <option value="" disabled hidden>
                     Our Products
                    </option>
                    <option value="LMS">Lead Management</option>
                    <option value="IMS">Inventory Management </option>
                    <option value="SMS">School Management</option>
                    <option value="HRMS">HR Management</option>
                  </select>

                  <span className="absolute inset-y-0 right-0.5 flex items-center pointer-events-none text-gray-500">
                    ▼
                  </span>
                </div>
              </div>
              </div>

              {/* <textarea
                id="description"
                name="description"
                rows={4}
                value={storeData.description}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="mt-1 w-full rounded-lg border placeholder:text-sm border-black/10 px-3 py-2 outline-none resize-y focus:ring-2 focus:ring-[#727272]"
              /> */}

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center cursor-pointer rounded-full px-4 py-2 text-base font-medium text-white bg-[#007AFF] hover:bg-[#0070f3] w-full transition"
                >
                  Submit
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
