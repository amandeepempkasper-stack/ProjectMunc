import React, { useEffect, useState } from "react";
import "./features.css";
import HeroImg from "../../assets/MUNCDASHBOARD.png";
import HeroImg2 from "../../assets/IMS.png";
import HeroImg3 from "../../assets/LMS.png";
import HeroImg4 from "../../assets/SMS.png";
import muncin from "../../assets/muncin.png";
import Arrow from "../../assets/arrow.png";
import Mission1 from "../../assets/mission1.png";
import Mission2 from "../../assets/mission2.heic";
import Mission3 from "../../assets/mission3.png";
import Testimonial from "../../assets/testimonial.png";
import Contact from "../../assets/contact.png";
import ScrollCarousel from "../../components/carousel/ScrollCarousel";
import RatingCard from "../../components/ratingCard/RatingCard";
import FAQ from "../../components/faq/FAQ";
import TimerCarousel from "../../components/TimerCarousel/TimerCarousel";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MobilePaginationSlider from "../../components/mobileFeatureSlider/MobilePaginationSlider";
import emailjs from "@emailjs/browser";
import rating1 from "../../assets/blackbug.png";
import rating2 from "../../assets/medlay.png";
import rating3 from "../../assets/netario.png";
import rating4 from "../../assets/ups.png";
import BillingSection from "../../components/BillingSection/BillingSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import BookDemoForm from "../../components/popup/BookDemoForm";
import axios from "axios";
import toast from "react-hot-toast";
// import { motion } from "framer-motion";




import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import HomeDesk from "../../assets/HomeSection/Homedesk.png";
import BgImage from "../../assets/HomeSection/HomeBackground.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import hrms from "../../assets/HomeSection/HomeScreenImg/CRM 1.png";
import ims from "../../assets/HomeSection/HomeScreenImg/IMS 1.png";
import lms from "../../assets/HomeSection/HomeScreenImg/LMS 1.png";
import sms from "../../assets/HomeSection/HomeScreenImg/SMS 1.png";

// Floating Icons
import float1 from "../../assets/HomeSection/FloatingIcons/Chart.svg";
import float2 from "../../assets/HomeSection/FloatingIcons/Arrow.svg";
import float3 from "../../assets/HomeSection/FloatingIcons/Layer.svg";
import Our_Product from "./Our_Product";
import Clients_LoveUs from "./Clients_LoveUs";
import HowHelpYou from "./HowHelpYou"
import SafeBanner from "./SafeBanner";

const Features = () => {
const { scrollY } = useScroll();
  // const navigate = useNavigate();

  const handleClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Raw transforms
  const yLeftRaw = useTransform(scrollY, [0, 600], [0, -200]);
  const xLeftRaw = useTransform(scrollY, [0, 600], [0, -300]);

  const yRightRaw = useTransform(scrollY, [0, 600], [0, -200]);
  const xRightRaw = useTransform(scrollY, [0, 600], [0, 300]);

  const yCenterRaw = useTransform(scrollY, [0, 600], [0, -250]);

  // Smooth spring animation
  const yLeft = useSpring(yLeftRaw, { stiffness: 60, damping: 20 });
  const xLeft = useSpring(xLeftRaw, { stiffness: 60, damping: 20 });

  const yRight = useSpring(yRightRaw, { stiffness: 60, damping: 20 });
  const xRight = useSpring(xRightRaw, { stiffness: 60, damping: 20 });

  const yCenter = useSpring(yCenterRaw, { stiffness: 60, damping: 20 });






  const [showDemoForm, setShowDemoForm] = useState(false);

  const openDemoForm = () => setShowDemoForm(true);
  const closeDemoForm = () => setShowDemoForm(false);
  const faqData = [
    {
      question: "What is MUN-C?",
      answer:
        "MUN-C is a powerful Business Management Suite (BMS) designed to simplify HR, payroll, task management, and team collaboration for businesses of all sizes.",
    },
    {
      question: "What is BMS?",
      answer:
        "A Business Management Suite (BMS) is an integrated software solution designed to help businesses manage various operations efficiently. It combines multiple tools into a single platform to smooth processes.",
    },
    {
      question:
        "How is MUN-C BMS different from other Business Management Softwares?",
      answer:
        "MUN-C offers a user-friendly, clutter-free dashboard, seamless automation, and keeps your data secure. It also provides real-time insights to improve efficiency, making it ideal for small businesses looking for a simple yet powerful solution.",
    },
    {
      question: "How was the name MUN-C chosen?",
      answer:
        "The name 'MUN-C' comes from the word 'Munshi', which means accountant in Hindi. In the past, Munshi helped manage office work and keep things organized. Just like them, MUN-C is designed to make business management simple and hassle-free today.",
    },
    {
      question: "Can I access MUN-C on mobile?",
      answer:
        "Yes, MUN-C is available on both web and mobile, allowing you to manage your business anytime, anywhere.",
    },
    {
      question: "What are the benefits of MUN-C BMS for HR management?",
      answer:
        "MUN-C simplifies HR management by automating Attendance Tracking, Leave Management, and Team Collaboration, reducing errors and boosting productivity.",
    },
    {
      question: "Is my data safe with MUN-C?",
      answer:
        "Absolutely! We use advanced encryption and security measures to keep your data protected at all times.",
    },
    {
      question: "Does MUN-C work on all devices?",
      answer:
        "Yes, MUN-C is a Cloud-Based platform that you can use on desktops, laptops, and mobile devices, allowing you to access it anytime and from anywhere.",
    },
    {
      question: "How does MUN-C improve workforce management?",
      answer:
        "MUN-C make simple workforce management by automating HR processes, Smooth Attendance Tracking, Leave Application, and Team Collaboration, ensuring efficiency and better productivity for businesses of all sizes.",
    },
    {
      question: "Does MUN-C have a complicated dashboard?",
      answer:
        "No, MUN-C features an intuitive HR dashboard designed for ease of use. Unlike other cluttered systems, it offers a clean interface, making task management software and employee self-service effortless.",
    },
    {
      question: "How does MUN-C help with task management?",
      answer:
        "MUN-C lets you create, assign, and track tasks easily, helping teams stay organized and on schedule.",
    },
    {
      question: "Does MUN-C automate payroll processing?",
      answer:
        "Yes, MUN-C calculates salaries automatically, ensuring error-free payroll management.",
    },
    {
      question: "Can I customize HR features in MUN-C?",
      answer:
        "Yes, MUN-C allows businesses to customize HR tools like attendance tracking, leave approvals, and employee records to fit their needs.",
    },
    {
      question: "Do I need IT knowledge to set up MUN-C?",
      answer:
        "No, MUN-C is designed to be user-friendly, and our team will assist you with setup and onboarding.",
    },
  ];
  const ratingData = [
    {
      id: 1,
      starCount: 4,
      review:
        " MUN-C has completely transformed our HR management software. The HR dashboard makes tracking attendance and leave applications effortless, saving us valuable time.",
      company: "Black Bug",
      image: rating1,
    },
    {
      id: 2,
      starCount: 4,
      review:
        "Managing my team has never been easier! The employee management system and task management software help streamline operations, keeping everyone on the same page.",
      company: "MedLay International",
      image: rating2,
    },
    {
      id: 3,
      starCount: 3,
      review:
        "The automated payroll processing feature ensures accurate salary calculations every time. With seamless integration to the attendance management system, payroll errors are now a thing of the past.",
      company: "Netario Innovations",
      image: rating3,
    },
    {
      id: 4,
      starCount: 4,
      review:
        " I love how MUN-C enhances team collaboration. The notice board and birthday reminder features help foster a more connected and engaged workplace.",
      company: "UPBS",
      image: rating4,
    },
  ];

  const service_id = "service_ixhoibk";
  const template_id = "template_z16frt6";
  const user_id = "ozF4iULix-uuJgZpO";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Log inside the function to see updates
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const emailParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
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

      console.log("Success!", response.status, response.text);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.log("FAILED...", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const images = [HeroImg, HeroImg2, HeroImg3, HeroImg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }} className="Homepage">
      <Navbar />

      {/* hero section */}

       <div
      className="
        relative w-full 
        bg-cover bg-center bg-no-repeat
        flex flex-col items-center justify-start
        pt-20 sm:pt-25 lg:pt-32 overflow-hidden
        px-4 sm:px-6 lg:px-12
      "
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      
      <motion.img
        src={float1}
        alt="Floating Icon 1"
        className="absolute top-90 left-50 w-17 h-17 hidden md:block "
        style={{ y: yLeft, x: xLeft }}
        animate={{
          x: [0, -5, 5, -5, 0],
          y: [0, 2, -2, 2, 0],
          rotate: [0, -2, 2, -2, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src={float2}
        alt="Floating Icon 2"
        className="absolute top-42 right-46 w-20 h-20 hidden md:block"
        style={{ y: yRight, x: xRight }}
        animate={{
          x: [0, -4, 4, -4, 0],
          y: [0, 3, -3, 3, 0],
          rotate: [0, 1, -1, 1, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src={float3}
        alt="Floating Icon 3"
        className="absolute top-110 right-65 w-17 h-17 hidden md:block"
        style={{ y: yCenter }}
        animate={{
          x: [0, -4, 4, -4, 0],
          y: [0, 3, -3, 3, 0],
          rotate: [0, -1, 1, -1, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="text-center space-y-8 flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center space-y-3 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-medium leading-[140%] text-[#1C2B33]  mt-5 sm:mt-0">
            Everything You Need to <br />
            Run{" "}
            <span className="relative w-fit px-4 border-[3px] sm:border-[4px] border-blue-400 text-[#154583] bg-white">
              Your Business
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-400"></div>
            </span>
          </h1>

          <p className="text-sm sm:text-lg lg:text-2xl text-[#3E4247] max-w-5xl">
            Four powerful systems – School, Inventory, HR, and Lead Management –
            combined <br />
            into one seamless platform.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-1">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="flex gap-2 items-center text-[#007AFF] border-[2px] rounded-full px-6 py-3 border-blue-500 hover:bg-[#007AFF] transition-all duration-300 hover:text-white text-sm sm:text-base"
          >
            Let’s Solve It Together <FaArrowRightLong />
          </motion.button>
          <span className="text-[10px] sm:text-[12px] leading-[120%] text-[#3E4247]">
            <i>*No credit card required.</i>
          </span>
        </div>
      </motion.div>

      <motion.div
        className="relative flex justify-center mt-10 sm:mt-16 mb-10 w-full"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={HomeDesk}
          alt="Dashboard preview"
          className="w-full max-w-[1100px] h-auto"
        />

        <div
          className="
            absolute 
            top-[11%] left-[5.5%] w-[89%] h-[88%]   
            md:top-[11.5%] md:left-[5.5%] md:w-[89%] md:h-[88%]  
            lg:top-[10.3%] lg:left-[5.5%] lg:w-[89%] lg:h-[89%]      
            xl:top-[10.3%] xl:left-[13.2%] xl:w-[73.9%] xl:h-[89%]      
            2xl:top-[10.3%] 2xl:left-[22.5%] 2xl:w-[55%] 2xl:h-[90%]  
            3xl:top-[9%] 3xl:left-[25%] 3xl:w-[48%] 3xl:h-[92%]  
            flex justify-center items-center overflow-hidden
            "
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img
                src={hrms}
                alt="HRMS Slide"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ims}
                alt="IMS Slide"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={lms}
                alt="LMS Slide"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={sms}
                alt="SMS Slide"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </div>


      {/* video section */}

      <Our_Product/>
      
      {/* feature section */}
      <Clients_LoveUs/>




      {/* mission section */}
      
      <HowHelpYou/>



      {/* testimoniol */}
      <SafeBanner/>

      {/* price */}
      <div className="pricing">
        <section className=" container py-4 my-3" id="product">
          <h3
            style={{
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            PRODUCT
          </h3>
          <h2
            style={{
              background: "linear-gradient(65deg, #00c7ac, #056ad6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="fw-bolder my-2"
          >
            Business Management Suite (BMS)
          </h2>
          <p className="my-3">
            MUN-C is a complete Business Management Suite designed to make your
            daily operations smooth and efficient. With real-time insights and
            automated workflows, you can track employee attendance, process
            payroll, and manage tasks without any hassle. The system ensures
            secure role-based access, so each team member gets the right tools
            and data they need.
          </p>
          <BillingSection />
        </section>
      </div>

      {/* faqs */}
      <section className="section_padding faq" id="faq">
        <div className="heading">
          <h3
            style={{
              color: "#007aff",
              fontWeight: "bold",
            }}
          >
            FAQS
          </h3>
          <h2
            style={{
              background: "linear-gradient(65deg, #00c7ac, #056ad6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="fw-bolder"
          >
            Frequently Asked Quesitons
          </h2>
          <p className="my-0">
            Find questions and answers realted to the MUNC BMS, Features,
            Updates, Purchase and Support.
          </p>
        </div>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
      <section className="section_padding">
        <TimerCarousel />
      </section>
      {/* conatact */}

      <section id="contact" className="bg-lightpy-4">
        <div className="d-flex gap-3 container mx-auto align-items-center contactus">
          <div
            className="h-100 p-3 rounded-3"
            style={{ width: "100%", objectFit: "contain" }}
          >
            <img style={{ width: "100%" }} src={Contact} alt="Contact" />
          </div>

          <div className="h-100 p-3 rounded-3" style={{ width: "100%" }}>
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
                  placeholder="Phone no."
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;

// Hero Img
{
  /* <img
              style={{
                height: "auto",
                width: "100%",
                // border: "5px solid gray",
                borderRadius: "20px",
              }}
              className="hero-img d-flex d-md-none"
              src={HeroImg}
              alt=""
            /> */
}
