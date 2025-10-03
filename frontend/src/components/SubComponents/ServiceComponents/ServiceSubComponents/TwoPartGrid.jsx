import React from "react";
import "./ServiceSubComp.css";
export const TwoPartGridLeft = (props) => {
  return (
    <div data-aos="flip-left">
      <div>
        <div className="row aline-item-center my-3">
          <div className="col-12 col-md-6 p-2 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center  text-uppercase text-success  fw-bold mt-3">
              {props.title}
            </h3>
            <p 
              style={{
                textAlign: "justify",
                width: "100%",
                lineHeight: "1.8rem",
              }}
              className="two-side-disc text-md-start text-center mt-2"
            >
              {props.Discription}
            </p>
            <div className="proplist d-flex flex-column text-muted gap-2">
              <li>
                {/* {props.bracket1} */}
                <p className="text-black text-center text-md-start ">{props.list1}</p>
              </li>
              <li>
                {/* {props.bracket2} */}
                <p className="text-black text-center text-md-start ">{props.list2}</p>
              </li>
              <li>
                {/* {props.bracket3} */}
                <p className="text-black text-center text-md-start ">{props.list3}</p>
              </li>
            </div>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <div className="blobright"></div>
              <img
                className="servie-grid-image"
                style={{ width: "100%", height:'100%' }}
                src={props.ImageHandle}
                alt="Serviceimg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TwoPartGridRight = (props) => {
  return (
    <>
      <div data-aos="flip-right">
        <div className="row aline-item-center flex-row-reverse my-3">
          <div className="col-12, col-md-6 p-2 d-flex flex-column justify-content-center">
            <h3 className="text-md-start text-center  text-uppercase text-success fw-bold mt-3">
              {props.title}
            </h3>
            <p
              style={{
                textAlign: "justify",
                width: "100%",
                lineHeight: "1.8rem",
              }}
              className="two-side-disc text-md-start text-center  mt-2"
            >
              {props.Discription}
            </p>
            <div
              style={{ display: [props.dnone] }}
              className="proplist d-flex flex-column aline-start text-muted gap-2"
            >
              <li>
                {/* {props.bracket1} */}
                <p className="text-black text-center text-md-start">{props.list1}</p>
              </li>
              <li>
                {/* {props.bracket2} */}
                <p className="text-black text-cente text-md-start">{props.list2}</p>
              </li>
              <li>
                {/* {props.bracket3} */}
                <p className="text-black text-center text-md-start">{props.list3}</p>
              </li>
            </div>
          </div>
          <div className="col-12, col-md-6 p-1">
            <div className="image-container w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="blobleft"></div>
              <img
                className="servie-grid-image"
                style={{ width: "100%", height:'100%' }}
                src={props.ImageHandle}
                alt="Serviceimg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
