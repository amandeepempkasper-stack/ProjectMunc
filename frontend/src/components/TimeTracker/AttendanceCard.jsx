import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import "./AttendanceCard.css";

const AttendanceCard = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Split the time string into time and AM/PM parts
  const [time, period] = currentTime.split(" ");

  // Determine whether it's evening (6 PM or later)
  const isEvening = new Date().getHours() >= 18;

  return (
    <div
      className="p-2 rounded-2 shadow-sm justify-content-between d-flex flex-column"
      style={{
        height: "15rem",
        background: "linear-gradient(0deg, #f4f4f4 0%, #eaf6ff 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid rgba(223, 220, 220, 0.95)",
      }}
    >
      <div className="d-flex  align-items-center justify-content-between px-2">
        <div
          style={{ color: "black" }}
          className="d-flex flex-column gap-1 p-2"
        >
          {" "}
          {isEvening ? (
            <IoMoonOutline style={{ fontSize: "5rem" }} />
          ) : (
            <IoSunnyOutline className="rotate" style={{ fontSize: "5rem" }} />
          )}
          <span style={{ fontWeight: "600" }}>{currentDate}</span>
        </div>
        <div className="d-flex align-items-center  gap-2">
          <div style={{ color: "black" }} className="d-flex flex-column">
            <span style={{ fontSize: "1.9rem" }}>{time}</span>
            <span style={{ fontSize: ".9rem" }}>Real time insight</span>
          </div>
          <div
            className="d-flex flex-column rounded-1"
            style={{ overflow: "hidden", fontSize: "1rem" }}
          >
            <span
              className="py-1 text-black px-3"
              style={{ background: "#f8f8f8eb" }}
            >
              {period}
            </span>
            <span
              style={{ background: "#dbd7d7" }}
              className="py-1 px-3 text-muted"
            >
              {period === "PM" ? "AM" : "PM"}
            </span>
          </div>
        </div>
      </div>

      <button className="btn btn-success">Punch In</button>
    </div>
  );
};

export default AttendanceCard;
