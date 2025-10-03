import React from "react";
// import { useNavigate } from "react-router";



const BlueButton = ({ Addname, handleForm }) => {
  return (
    <div>
      <button
      onClick={handleForm}
        className="
        px-4 py-2 
        bg-[#007AFF] text-[#FFFFFF] font-normal 
        rounded-md hover:rounded-full
        hover:bg-blue-600 hover:scale-105 
        transition-all duration-300 ease-in-out
      "
      >
        {Addname}
      </button>
    </div>
  );
};

export default BlueButton;
