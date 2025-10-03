import React from "react";
import "./MainHeader.css";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <div
      className="topheaderBackground"
      style={{
        background: `url(${props.background})`,
        minHeight: "70vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        backgroundSize:'cover'
      }}
    >
      <div style={{ height: "100%" }} className="container row">
        <div className="col-12 d-flex flex-column gap-2">
          <h1 className="Main-heading fw-bolder text-white text-uppercase fs-2 text-center">
            {props.mainheading}
          </h1>
          <h2 className="Sub-Heading text-white fs-5 text-center">
            {props.subHeading}
          </h2>
          <Link
            to="/Contact-us"
            className="btn m-auto text-white fw-bold btn-quote mt-4 "
          >
            Get a Quote <span className="fs-6">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
