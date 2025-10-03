import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import "./BillingSection.css";
import { MdVerified } from "react-icons/md";
import { div } from "framer-motion/client";

const BillingSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".biling-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        requestAnimationFrame(() => {
          const { left, top } = card.getBoundingClientRect();
          const x = e.clientX - left;
          const y = e.clientY - top;

          card.style.setProperty("--glow-x", `${x}px`);
          card.style.setProperty("--glow-y", `${y}px`);
        });
      });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--glow-x", "50%");
        card.style.setProperty("--glow-y", "50%");
      });
    });
  }, []);

  return (
    <div className="bilings my-3">
      <div className="row">
        {
          // [
          //   {
          //     title: "Customised HRM",
          //     description: "Smooth Employee Operations",
          //     features: [
          //       "Role-Based Access & Security Control",
          //       "Centralized Employee Database System",
          //       "Automated Time & Attendance Tracking",
          //       "Smart Leave Management System",
          //       "Efficient Shift Scheduling & Management",
          //     ],
          //   },
          //   {
          //     title: "Payroll Management",
          //     description: "Accurate Salary Processing",
          //     features: [
          //       "HR Payroll Dashboard",
          //       "Automated Payroll Calculation (Salary)",
          //       "Payslips and Reporting",
          //       "Compliance with ESI, PF, and TDS",
          //       "Automated Salary Slip Generation",
          //     ],
          //   },
          //   {
          //     title: "Task Management",
          //     description: "Enhancing Productivity & Collaboration",
          //     features: ["Real-Time Progress",
          //       "New Updates & Deadlines",
          //       "File Sharing and Storage",
          //       "Efficient Daily Task Reporting",
          //       "Smart Task Assignment & Tracking",
          //       "Efficient Project & Bid Management"],
          //   },
          //   {
          //     title: "Upcoming Features",
          //     description: "Future-Ready Enhancements",
          //     features: [
          //       "Real-Time Chat & Messaging System",
          //       "Biometric Attendance System",
          //       "Automated Reimbursement Management",
          //       "Advanced Budget Planning & Tracking",
          //       "Third-Party App & AI Integration",
          //       "Lead Management for Sales Growth",
          //     ],
          //   },
          // ]
          [
            {
              title: "Customised HRM",
              description: "Smooth Employee Operations",
              features: [
                "Role-Based Access & Security Control",
                "Centralized Employee Database System",
                "Automated Time & Attendance Tracking",
                "Smart Leave Management System",
                "Efficient Shift Scheduling & Management",
              ],
            },
            {
              title: "Lead Management System",
              description: "Efficient Lead Tracking & Conversions",
              features: [
                "Lead capture from multiple sources",
                "Lead qualification and scoring system",
                "Automatic lead assignment to sales reps",
                "Lead tracking and follow-up reminders",
                "Conversion analytics and performance reports",
              ],
            },
            {
              title: "Inventory Management System",
              description: "Streamlined Stock & Order Management",
              features: [
                "Real-time stock level tracking",
                "Automated purchase and sales orders",
                "Barcode and QR code scanning",
                "Low stock alerts and reordering",
                "Inventory valuation and demand forecasting",
              ],
            },
            {
              title: "School Management System",
              description: "Smart Academic & Administrative Control",
              features: [
                "Centralized student information records",
                "Class timetable and scheduling system",
                "Automated fee collection and reminders",
                "Parent-teacher communication platform",
                "Academic performance and attendance reports",
              ],
            },
          ].map((card, index) => (
            <div className="p-2 col-12 col-md-6">
              <div className="biling-card" key={index}>
                <h3 className="text-start">{card.title}</h3>
                <p className="text-start">{card.description}</p>
                <div className="tick-bx  d-flex flex-column">
                  {card.features.map((feature, i) => (
                    <div
                      className="tick-items d-flex align-items-center gap-4"
                      key={i}
                    >
                      <span>
                        <MdVerified style={{ color: "#007aff" }} />
                      </span>
                      <span className="text-start">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BillingSection;
