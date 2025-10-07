import React, { useEffect, useState } from "react";
import "./features.css";
import HeroImg from "../../assets/MUNCDASHBOARD.png";
import HeroImg2 from "../../assets/IMS.png";
import HeroImg3 from "../../assets/LMS.png";
import HeroImg4 from "../../assets/SMS.png";
// import muncin from "../../assets/muncin.png";
// import Arrow from "../../assets/arrow.png";
// import Mission1 from "../../assets/mission1.png";
// import Mission2 from "../../assets/mission2.heic";
// import Mission3 from "../../assets/mission3.png";
// import Testimonial from "../../assets/testimonial.png";
// import Contact from "../../assets/contact.png";
// import ScrollCarousel from "../../components/carousel/ScrollCarousel";
// import RatingCard from "../../components/ratingCard/RatingCard";
// import FAQ from "../../components/faq/FAQ";
// import TimerCarousel from "../../components/TimerCarousel/TimerCarousel";
// import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// import MobilePaginationSlider from "../../components/mobileFeatureSlider/MobilePaginationSlider";
import emailjs from "@emailjs/browser";
import rating1 from "../../assets/blackbug.png";
import rating2 from "../../assets/medlay.png";
import rating3 from "../../assets/netario.png";
import rating4 from "../../assets/ups.png";
// import BillingSection from "../../components/BillingSection/BillingSection";
// import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
// import BookDemoForm from "../../components/popup/BookDemoForm";
// import axios from "axios";
// import toast from "react-hot-toast";

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
import HowHelpYou from "./HowHelpYou";
import SafeBanner from "./SafeBanner";
import MeetFounder from "./MeetFounder";
import TestimonialSlider from "./TestimonialSlider";
import MeetTeam from "./MeetTeam";
import Contact from "./Contact";
import NavBar from "../../components/navbar/Navbar";
import FirstVisitPopup from "../../components/popup/FirstVisitPopup";

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

  // const faqData = [
  //   {
  //     question: "What is MUN-C?",
  //     answer:
  //       "MUN-C is a powerful Business Management Suite (BMS) designed to simplify HR, payroll, task management, and team collaboration for businesses of all sizes.",
  //   },
  //   {
  //     question: "What is BMS?",
  //     answer:
  //       "A Business Management Suite (BMS) is an integrated software solution designed to help businesses manage various operations efficiently. It combines multiple tools into a single platform to smooth processes.",
  //   },
  //   {
  //     question:
  //       "How is MUN-C BMS different from other Business Management Softwares?",
  //     answer:
  //       "MUN-C offers a user-friendly, clutter-free dashboard, seamless automation, and keeps your data secure. It also provides real-time insights to improve efficiency, making it ideal for small businesses looking for a simple yet powerful solution.",
  //   },
  //   {
  //     question: "How was the name MUN-C chosen?",
  //     answer:
  //       "The name 'MUN-C' comes from the word 'Munshi', which means accountant in Hindi. In the past, Munshi helped manage office work and keep things organized. Just like them, MUN-C is designed to make business management simple and hassle-free today.",
  //   },
  //   {
  //     question: "Can I access MUN-C on mobile?",
  //     answer:
  //       "Yes, MUN-C is available on both web and mobile, allowing you to manage your business anytime, anywhere.",
  //   },
  //   {
  //     question: "What are the benefits of MUN-C BMS for HR management?",
  //     answer:
  //       "MUN-C simplifies HR management by automating Attendance Tracking, Leave Management, and Team Collaboration, reducing errors and boosting productivity.",
  //   },
  //   {
  //     question: "Is my data safe with MUN-C?",
  //     answer:
  //       "Absolutely! We use advanced encryption and security measures to keep your data protected at all times.",
  //   },
  //   {
  //     question: "Does MUN-C work on all devices?",
  //     answer:
  //       "Yes, MUN-C is a Cloud-Based platform that you can use on desktops, laptops, and mobile devices, allowing you to access it anytime and from anywhere.",
  //   },
  //   {
  //     question: "How does MUN-C improve workforce management?",
  //     answer:
  //       "MUN-C make simple workforce management by automating HR processes, Smooth Attendance Tracking, Leave Application, and Team Collaboration, ensuring efficiency and better productivity for businesses of all sizes.",
  //   },
  //   {
  //     question: "Does MUN-C have a complicated dashboard?",
  //     answer:
  //       "No, MUN-C features an intuitive HR dashboard designed for ease of use. Unlike other cluttered systems, it offers a clean interface, making task management software and employee self-service effortless.",
  //   },
  //   {
  //     question: "How does MUN-C help with task management?",
  //     answer:
  //       "MUN-C lets you create, assign, and track tasks easily, helping teams stay organized and on schedule.",
  //   },
  //   {
  //     question: "Does MUN-C automate payroll processing?",
  //     answer:
  //       "Yes, MUN-C calculates salaries automatically, ensuring error-free payroll management.",
  //   },
  //   {
  //     question: "Can I customize HR features in MUN-C?",
  //     answer:
  //       "Yes, MUN-C allows businesses to customize HR tools like attendance tracking, leave approvals, and employee records to fit their needs.",
  //   },
  //   {
  //     question: "Do I need IT knowledge to set up MUN-C?",
  //     answer:
  //       "No, MUN-C is designed to be user-friendly, and our team will assist you with setup and onboarding.",
  //   },
  // ];
  // const ratingData = [
  //   {
  //     id: 1,
  //     starCount: 4,
  //     review:
  //       " MUN-C has completely transformed our HR management software. The HR dashboard makes tracking attendance and leave applications effortless, saving us valuable time.",
  //     company: "Black Bug",
  //     image: rating1,
  //   },
  //   {
  //     id: 2,
  //     starCount: 4,
  //     review:
  //       "Managing my team has never been easier! The employee management system and task management software help streamline operations, keeping everyone on the same page.",
  //     company: "MedLay International",
  //     image: rating2,
  //   },
  //   {
  //     id: 3,
  //     starCount: 3,
  //     review:
  //       "The automated payroll processing feature ensures accurate salary calculations every time. With seamless integration to the attendance management system, payroll errors are now a thing of the past.",
  //     company: "Netario Innovations",
  //     image: rating3,
  //   },
  //   {
  //     id: 4,
  //     starCount: 4,
  //     review:
  //       " I love how MUN-C enhances team collaboration. The notice board and birthday reminder features help foster a more connected and engaged workplace.",
  //     company: "UPBS",
  //     image: rating4,
  //   },
  // ];

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
    <div>
       <FirstVisitPopup></FirstVisitPopup>
      <NavBar />

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
          className="floating-icon floating-icon-1 "
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
          className="floating-icon floating-icon-2 "
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
          className="floating-icon floating-icon-3 "
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
            <h1
              className="
    text-[29px] sm:text-[40px] md:text-[52px] lg:text-[64px]
    font-medium leading-tight text-[#1C2B33]
    mt-4 sm:mt-0
  "
            >
              Everything You Need to <br />
              Run{" "}
              <span
                className="
      relative w-fit px-2 sm:px-3 md:px-4
      border-[2px] sm:border-[2.5px] md:border-[3px] lg:border-[4px]
      border-blue-400 text-[#154583] bg-white inline-block
    "
              >
                Your Business
                {/* Corner Squares */}
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 md:-top-2 md:-left-2 md:w-3 md:h-3 bg-blue-400"></div>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 md:-top-2 md:-right-2 md:w-3 md:h-3 bg-blue-400"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 md:-bottom-2 md:-left-2 md:w-3 md:h-3 bg-blue-400"></div>
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 md:-bottom-2 md:-right-2 md:w-3 md:h-3 bg-blue-400"></div>
              </span>
            </h1>

            <p className="text-sm sm:text-lg lg:text-2xl text-[#3E4247] max-w-5xl">
              Our powerful systems – Lead, Inventory, Customer Relationship, Human Resource, School Management System and Chat App and   –
              – combined <br />
              into one seamless platform.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              className="flex gap-2 items-center text-[#007AFF] border-[2px] rounded-full py-2 px-4 border-blue-500 hover:bg-[#007AFF] transition-all duration-300 hover:text-white text-sm sm:text-base"
            >
              Let’s Solve It Together <FaArrowRightLong />
            </motion.button>
            {/* <span className="text-[10px] sm:text-[12px] leading-[120%] text-[#3E4247]">
              <i>*No credit card required.</i>
            </span> */}
          </div>
        </motion.div>

        <motion.div
          className="dashboard-preview"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Background Dashboard Image */}
          <div className="dashboard-wrapper">
            <img
              src={HomeDesk}
              alt="Dashboard preview"
              className="dashboard-img"
            />

            {/* Slider inside the screen */}
            <div className="slider-container">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-100 h-100"
              >
                <SwiperSlide>
                  <img src={hrms} alt="HRMS Slide" className="img-slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ims} alt="IMS Slide" className="img-slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={lms} alt="LMS Slide" className="img-slide" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={sms} alt="SMS Slide" className="img-slide" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </motion.div>
      </div>

      <Our_Product />

      <Clients_LoveUs />

      <HowHelpYou />

      <SafeBanner />

      <MeetFounder />

      <TestimonialSlider />

      <MeetTeam />

      <Contact />

      {/* <Footer /> */}
    </div>
  );
};

export default Features;
