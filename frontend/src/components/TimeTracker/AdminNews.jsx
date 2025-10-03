import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import profileimage from "./profile.jpeg";

const getTimeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const seconds = Math.floor((now - past) / 1000);

  if (seconds < 60) return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days > 1 ? "s" : ""} ago`;
  return past.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const AdminNews = () => {
  // Fake notice data (Only one notice)
  const notice = {
    id: "1",
    creator: "Admin",
    creatorProfile: { image_url: profileimage },
    creatorPosition: "HR Manager",
    createdAt: new Date().toISOString(),
    message:
      "Dear Team, our Annual Sales Discussion Meeting is scheduled for March 10, 2025, at 10:00 AM in the Conference Room, 2nd Floor, Company Headquarters. We will review our sales performance, discuss challenges",
    attachments: null,
  };

  return (
    <div
      style={{
        height: "15rem",
        overflow: "hidden",
        color: "black",
        background: "#F5F5F6",
        border: "1px solid rgba(223, 220, 220, 0.95)",
      }}
      className="p-2 px-3 shadow-sm rounded-2 d-flex flex-column gap-2"
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
          <HiOutlineBellAlert className="fs-5" /> Notice Board
        </span>
        <FaChevronRight />
      </div>

      {/* Single Notice */}
      <div className="d-flex gap-2 align-items-center">
        <img
          src={notice.creatorProfile.image_url}
          alt="profile"
          className="rounded-circle"
          width="45"
          height="40"
        />
        <div>
          <span style={{ fontWeight: "600" }}>{notice.creator}</span> -{" "}
          {notice.creatorPosition}
          <p style={{ margin: "0.2rem 0" }}>{notice.message}</p>
          <small className="text-end w-100">
            {getTimeAgo(notice.createdAt)}
          </small>
        </div>
      </div>

      {/* Attachment */}
      {notice.attachments && (
        <div className="d-flex gap-2 align-items-center">
          <IoCloudDownloadOutline />
          <a href={notice.attachments} download>
            Download Attachment
          </a>
        </div>
      )}
    </div>
  );
};

export default AdminNews;
