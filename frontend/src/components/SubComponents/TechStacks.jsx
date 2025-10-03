import React from "react";

const TechStacks = (props) => {
  const AlltechBTN = () => {
    document.getElementById("techbox2").classList.remove("HideMe");
    document.getElementById("techbox3").classList.remove("HideMe");
    document.getElementById("techbox1").classList.remove("HideMe");
    document.getElementById("Alltech").style.background =
      "radial-gradient(rgb(255, 144, 53),rgba(235, 108, 4, 0.884),rgba(255, 77, 6, 0.849))";
    document.getElementById("Alltech").style.color = "white";
    document.getElementById("Framework").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("Framework").style.color =
      "rgba(16, 97, 73, 0.877)";
    document.getElementById("Database").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("Database").style.color = "rgba(16, 97, 73, 0.877)";
    document.getElementById("ProgLang").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("ProgLang").style.color = "rgba(16, 97, 73, 0.877)";
  };

  const ProgramingLangBTN = () => {
    document.getElementById("techbox2").classList.add("HideMe");
    document.getElementById("techbox3").classList.add("HideMe");
    document.getElementById("techbox1").classList.remove("HideMe");
    document.getElementById("Alltech").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("Alltech").style.color = "rgba(16, 97, 73, 0.877)";
    document.getElementById("Framework").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("Framework").style.color =
      "rgba(16, 97, 73, 0.877)";
    document.getElementById("Database").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("Database").style.color = "rgba(16, 97, 73, 0.877)";
    document.getElementById("ProgLang").style.background =
      "radial-gradient(rgb(255, 144, 53),rgba(235, 108, 4, 0.884),rgba(255, 77, 6, 0.849))";
    document.getElementById("ProgLang").style.color = "white";
  };
  const FrameworkBTN = () => {
    document.getElementById("techbox2").classList.remove("HideMe");
    document.getElementById("techbox3").classList.add("HideMe");
    document.getElementById("techbox1").classList.add("HideMe");
    document.getElementById("Alltech").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("Alltech").style.color = "rgba(16, 97, 73, 0.877)";
    document.getElementById("Framework").style.background =
      "radial-gradient(rgb(255, 144, 53),rgba(235, 108, 4, 0.884),rgba(255, 77, 6, 0.849))";
    document.getElementById("Framework").style.color = "white";
    document.getElementById("Database").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("Database").style.color = "rgba(16, 97, 73, 0.877)";
    document.getElementById("ProgLang").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("ProgLang").style.color = "rgba(16, 97, 73, 0.877)";
  };

  const DatabasekBTN = () => {
    document.getElementById("techbox2").classList.add("HideMe");
    document.getElementById("techbox3").classList.remove("HideMe");
    document.getElementById("techbox1").classList.add("HideMe");
    document.getElementById("Alltech").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("Alltech").style.color = "rgba(16, 97, 73, 0.877)";
    document.getElementById("Framework").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("Framework").style.color =
      "rgba(16, 97, 73, 0.877)";
    document.getElementById("Database").style.background =
      "radial-gradient(rgb(255, 144, 53),rgba(235, 108, 4, 0.884),rgba(255, 77, 6, 0.849))";
    document.getElementById("Database").style.color = "white";
    document.getElementById("ProgLang").style.background =
      "rgba(228, 217, 217, 0.411)";
    document.getElementById("ProgLang").style.color = "rgba(16, 97, 73, 0.877)";
  };

  return (
    <>
      <section className="home-Service">
        <div className="container d-flex flex-column text-center py-3">
          <div className="home-service-card-container d-flex flex-wrap justify-content-center mt-4">
            <div className="row w-100">
              <div className="col-12 mb-2 col-md-3">
                <button
                  id="Alltech"
                  onClick={AlltechBTN}
                  className="tech-btns fw-bold"
                >
                  All
                </button>
              </div>
              <div className="col-12 mb-2 col-md-3">
                <button
                  id="ProgLang"
                  onClick={ProgramingLangBTN}
                  className="tech-btns fw-bold"
                >
                  {props.Filter1}
                </button>
              </div>
              <div className="col-12 mb-2 col-md-3">
                <button
                  id="Framework"
                  onClick={FrameworkBTN}
                  className="tech-btns fw-bold"
                >
                  {props.Filter2}
                </button>
              </div>
              <div className="col-12 mb-2 col-md-3">
                <button
                  id="Database"
                  onClick={DatabasekBTN}
                  className="tech-btns fw-bold"
                >
                  {props.Filter3}
                </button>
              </div>
            </div>

            <div className="techbox-container  d-flex flex-column">
              <div
                id="techbox1"
                className="tex-box flex-wrap justify-content-center"
              >
                <li>
                  <img src={props.page1Image1} alt="" />
                </li>
                <li>
                  <img src={props.page1Image2} alt="" />
                </li>
                <li>
                  <img src={props.page1Image3} alt="" />
                </li>
                <li>
                  <img src={props.page1Image4} alt="" />
                </li>
                <li>
                  <img src={props.page1Image5} alt="" />
                </li>
                <li>
                  <img src={props.page1Image6} alt="" />
                </li>
                <li>
                  <img src={props.page1Image7} alt="" />
                </li>
                <li>
                  <img src={props.page1Image8} alt="" />
                </li>
                <li>
                  <img src={props.page1Image9} alt="" />
                </li>
              </div>
              <div
                id="techbox2"
                className="tex-box flex-wrap justify-content-center"
              >
                <li>
                  <img src={props.page2Image1} alt="" />
                </li>
                <li>
                  <img src={props.page2Image2} alt="" />
                </li>
                <li>
                  <img src={props.page2Image3} alt="" />
                </li>
                <li>
                  <img src={props.page2Image4} alt="" />
                </li>
                <li>
                  <img src={props.page2Image5} alt="" />
                </li>
                <li>
                  <img src={props.page2Image6} alt="" />
                </li>
                <li>
                  <img src={props.page2Image7} alt="" />
                </li>
                <li>
                  <img src={props.page2Image8} alt="" />
                </li>
              </div>
              <div
                id="techbox3"
                className="tex-box flex-wrap justify-content-center"
              >
                <li>
                  <img src={props.page3Image1} alt="" />
                </li>
                <li>
                  <img src={props.page3Image2} alt="" />
                </li>
                <li>
                  <img src={props.page3Image3} alt="" />
                </li>
                <li>
                  <img src={props.page3Image4} alt="" />
                </li>
                <li>
                  <img src={props.page3Image5} alt="" />
                </li>
                <li>
                  <img src={props.page3Image6} alt="" />
                </li>
                <li>
                  <img src={props.page3Image7} alt="" />
                </li>
                <li>
                  <img src={props.page3Image8} alt="" />
                </li>
                <li>
                  <img src={props.page3Image9} alt="" />
                </li>
                <li>
                  <img src={props.page3Image10} alt="" />
                </li>
                <li>
                  <img src={props.page3Image11} alt="" />
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStacks;
