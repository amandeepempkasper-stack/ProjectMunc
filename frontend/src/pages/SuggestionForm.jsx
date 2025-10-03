// import logo from "./logo.svg";
import "./suggition.css";
import Images from "../assets/serveyimage.jpg";
import { useState } from "react";
import axios from "axios";

function SuggestionForm() {
  // const [SuggestionsArray, setsuggestionsArray] = useState([]);
  // state for the input
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Profession, setProfession] = useState("");
  const [Suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name === "") {
      alert("please enter your name");
    } else if (Email === "") {
      alert("please enter Email id");
    } else if (MobileNo === "") {
      alert("please enter Email id");
    } else if (Suggestion === "") {
      alert("suggestion is empety");
    }
    if (Name !== "" && MobileNo !== "" && Suggestion != "") {
      // const uniqueId = Date.now();

      const formData = {
        fullName: Name,
        email: Email,
        mobile: MobileNo,
        profession: Profession,
        suggestion_text: Suggestion,
      };

      console.log(formData)
      // setsuggestionsArray((currentValue) => [...currentValue, newSuggestion]);

     

      axios
      .post("http://localhost:8000/api/v1/suggestions", formData, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

      setName("");
      setMobileNo("");
      setEmail("");
      setProfession("");
      setSuggestion("");

      // alert("your suggestions has been submitted");
    }
  };
  return (
    <div className="App">
      <div className="suggestion-form">
        <div className="survey-image">
          <img src={Images} alt="survey-image"></img>
        </div>
        <form onSubmit={handleSubmit}>
          <h1 className="suggestion-form-heading">
            Your Suggestions – Help Us Improve!
          </h1>
          <div className="mb-3">
            <label className="form-Name">Name*:</label>
            <input
              required
              type="text"
              className="form-control"
              id="Name"
              aria-describedby="userName"
              placeholder="Enter Your Full Name"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile No.</label>
            <input
              type="text"
              className="form-control"
              id="MobileNo"
              value={MobileNo}
              aria-describedby="Mobile-No"
              placeholder="Optional"
              onChange={(e) => {
                setMobileNo(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="text"
              className="form-control"
              id="Email"
              value={Email}
              aria-describedby="contnt-title"
              placeholder="Optional"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Choose Your Profession* :</label>
            <select
              className="form-control"
              onChange={(e) => {
                setProfession(e.target.value);
              }}
            >
              <option value="Developer">Directors</option>
              <option value={"Designer"}>Investors </option>
              <option value={"Businessman"}> Students & Researchers</option>
              <option value={"Teacher"}>Journalists</option>
              <option value={"Student"}>Entrepreneurs </option>
              <option value={"Other"}>Policymakers </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Suggestions*:
            </label>
            <textarea
              required
              id="text-area"
              className="form-control"
              placeholder="Please Give Your Suggestion To Help Us Improve ..."
              rows="5"
              value={Suggestion}
              onChange={(e) => {
                setSuggestion(e.target.value);
              }}
            ></textarea>
          </div>
          <button 
          type="submit"
            className="btn btn-primary"
            // onClick={(e) => onHandelClickSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SuggestionForm;



// import React from 'react'

// const SuggestionForm = () => {
//   return (
//     <div>SuggestionForm</div>
//   )
// }

// export default SuggestionForm