import React, { useState } from "react";
import { MdOutlineWorkHistory } from "react-icons/md";
import "./MyTodaysLoginData.css";
import { FiCoffee } from "react-icons/fi";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { PiOfficeChair } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa";

const MyTodaysLoginData = (props) => {
  const [attendanceData] = useState({
    loginTime: "09:00 AM",
    logoutTime: "06:00 PM",
    totalBrake: 45,
    totalLoginTime: 480,
  });

  function convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} h ${remainingMinutes} min`;
  }

  const labelData = [
    {
      icon: <IoLogInOutline className="text-success fs-5" />,
      iconBG: "#abf9a728",
      title: "Today's login time",
      data: attendanceData?.loginTime || "--",
    },
    {
      icon: <IoLogOutOutline className="text-danger fs-5" />,
      iconBG: "#ff8e8621",
      title: "Today's logout time",
      data: attendanceData?.logoutTime || "--",
    },
    {
      icon: <FiCoffee className="text-warning fs-5" />,
      iconBG: "#fbff8021",
      title: "Total break taken",
      data:
        attendanceData?.totalBrake != null
          ? convertMinutesToHoursAndMinutes(attendanceData.totalBrake)
          : "--",
    },
    {
      icon: <MdOutlineWorkHistory className="text-primary fs-5" />,
      iconBG: "#deccfa2b",
      title: "Total login time",
      data:
        attendanceData?.totalLoginTime != null
          ? convertMinutesToHoursAndMinutes(attendanceData.totalLoginTime)
          : "--",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "15rem",
        color: "black",
        background: "#F5F5F6",
        border: "1px solid rgba(223, 220, 220, 0.95)",
      }}
      className="
       shadow-sm rounded-2  py-2 px-2 "
    >
      <div className="d-flex align-items-center justify-content-between">
        <span
          className="d-flex align-items-center gap-2"
          style={{
            color: "#3c3c3c",
            fontWeight: "600",
            fontSize: "1rem",
          }}
        >
          <PiOfficeChair className="fs-5" />
          Log Board
        </span>{" "}
        <div style={{ cursor: "pointer" }}>
          <span
            style={{ cursor: "pointer" }}
            className={` d-flex align-items-center  py-1 badge-primary"`}
          >
            <FaChevronRight />
          </span>
        </div>
      </div>
      <div
        style={{ height: "7rem" }}
        className="d-flex flex-wrap align-items-center gap-3 my-1 justify-content-evenly"
      >
        {labelData.map((item, index) => (
          <Labels
            style={{
              background: "#ffffff",
              height: "fit-content",
              width: "45%",
            }}
            TytleStyle={
              "d-flex align-items-center justify-content-between p-2 py-1"
            }
            baseStyle={{
              border: "1px solid rgba(31, 30, 30, 0.09)",
            }}
            key={index}
            icon={item.icon}
            title={item.title}
            data={item.data}
            background={item.iconBG}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTodaysLoginData;

const Labels = ({
  title,
  data,
  icon,
  style,
  TytleStyle,
  background,
  baseStyle,
}) => {
  return (
    <div className="my-0 p-0 rounded-3 hoverTime shadow-sm" style={style}>
      <h4 className="my-1 text-center fw-normal py-1">{data}</h4>
      <div style={baseStyle} className="my-auto  rounded-3">
        <span className={TytleStyle}>
          {title}
          <span
            style={{
              height: "35px",
              width: "35px",
              borderRadius: "50%",
              background: background,
            }}
            className="d-flex align-items-center justify-content-center"
          >
            {icon}
          </span>
        </span>
      </div>
    </div>
  );
};
