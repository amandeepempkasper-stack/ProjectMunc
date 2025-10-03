import React from "react";

const SingleBlog = () => {
  return (
    <>
      <div className="container shadow my-3">
        <div className="col-md-12  d-flex items-center justify-content-center bg-light">
          <div className="row">
            <h1 className="my-3">title</h1>
            <p className="my-3">published Date:</p>
           
         
          </div>
        </div>
        <button
       
          className="btn btn-primary btn-block"
        >
          Back To post
        </button>
      </div>
    </>
  );
};

export default SingleBlog;
