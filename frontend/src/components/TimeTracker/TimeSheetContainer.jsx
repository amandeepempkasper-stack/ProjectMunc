import React from "react";
import AdminNews from "./AdminNews";
import AttendanceCard from "./AttendanceCard";
import MyTodaysLoginData from "./MyTodaysLoginData";

const TimeSheetContainer = () => {
  return (
    <div className="row row-gap-2 p-3">
      <div className="col-12 p-2">
        <div>
          {" "}
          <MyTodaysLoginData />
        </div>
      </div>
      <div className="col-12 col-md-6 p-2">
        <div>
          <AttendanceCard />
        </div>
      </div>
      <div className="col-12 col-md-6 p-2">
        <div>
          <AdminNews />
        </div>
      </div>
    </div>
  );
};

export default TimeSheetContainer;
