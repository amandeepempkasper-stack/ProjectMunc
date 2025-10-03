import React from "react";

const SingleTools = (props) => {
  return (
    <div
      style={{
        boxShadow:'0 0 10px 5px rgba(201, 200, 200, .5)',
        borderRadius: "10px",
        padding:"2.5rem 1rem 1rem 1rem"
      }}
      className="d-flex position-relative flex-column text-start "
    >
      <div className="bg-success text-white"
        style={{
          boxShadow:'0 0 4px 6px rgba(201, 200, 200, .6)',
          height: "50px",
          width: "50px",
          fontSize:'1.8rem',
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          background:'white',
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position:'absolute',
          top:"-20%"
        }}
      >
        {props.Icons}
      </div>
      <h4 className="fw-bold text-success">{props.heading}</h4>
      <p className="text-dark">
      {props.paragraph}
      </p>
    </div>
  );
};

export default SingleTools;
