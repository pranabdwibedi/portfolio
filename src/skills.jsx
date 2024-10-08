import React, { useState } from "react";
import SkillCard from "./skillCard";
import reactLogo from "./assets/reactLogo.svg";
import htmlLogo from "./assets/html-5.png";
import cssLogo from "./assets/css-3.png";
import jsLogo from "./assets/js.png";
import javalogo from "./assets/java.png";
import cLogo from "./assets/letter-c.png";
import pythonLogo from "./assets/python.png";
import Certificate_c from "./assets/C.jpg";
import certificateJS from "./assets/JavaScript_page-0001.jpg";
import certificatePython from "./assets/Python Quiz_page-0001.jpg";
import certificateJava from "./assets/Java_page-0001.jpg";
import certificateleader from "./assets/LeaderShip.png";
import certificateParticipate from "./assets/Participation Certificate.jpg";
import "./CSS/skills.css";

function Skills({ isDark }) {
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 4000);

  return (
    <div
      className={`${
        isDark ? "skill-parent-containerBlack darkMode" : "skill-parent-containerWhite LightMode"
      }`}
    >
      <div
        className={`alert alert-warning alert-dismissible fade sticky-top ${
          show ? "show" : "visually-hidden"
        }`}
        role="alert"
      >
        <strong>Note :</strong> Scroll down to see the certificates
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setShow(false)}
        ></button>
      </div>
      <h2 className={`container ${isDark ? "darkMode" : "lightMode"}`}>
        Technical skills :
      </h2>
      <div className="cardContainer mb-4">
        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard
            imgSrc={htmlLogo}
            cardTitle={"HTML 5"}
            percentCovered={80}
          />
        </div>
        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard imgSrc={cssLogo} cardTitle={"CSS 3"} percentCovered={80} />
        </div>
        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard
            imgSrc={jsLogo}
            cardTitle={"JavaScript"}
            percentCovered={75}
          />
        </div>

        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard
            imgSrc={reactLogo}
            cardTitle={"React"}
            percentCovered={60}
          />
        </div>
        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard imgSrc={javalogo} cardTitle={"Java"} percentCovered={80} />
        </div>

        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard imgSrc={cLogo} cardTitle={"C"} percentCovered={70} />
        </div>
        <div
          className={`cardBoxes ${
            isDark ? "cardBoxesBlack" : "cardBoxesWhite"
          }`}
        >
          <SkillCard
            imgSrc={pythonLogo}
            cardTitle={"Python"}
            percentCovered={50}
          />
        </div>
      </div>
      <div className="container">
        <h2 className={`${isDark ? "darkMode" : "lightMode"}`}>
          CertifiCates :
        </h2>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide slideBar mt-5 mb-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={certificateJS} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Certificate_c} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={certificateJava} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img
                src={certificatePython}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={certificateParticipate}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev nav-buttons"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next nav-buttons"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h3 className={`${isDark ? "darkMode" : "lightMode"}`}>View or Download all Certificates :</h3>
        <div className="container d-flex w-75 justify-content-between mb-3 mt-3">
          <a
            href="https://drive.google.com/file/d/1G796e3wA-HSbw6seXpqYWPZTpyno77ok/view?usp=sharing" className="btn btn-outline-primary"
            role="button"
            target="_blank"
          >
              JavaScript
          </a>
          <a
            href="https://drive.google.com/file/d/1iZO1iOrxEkaaXDXSw1i-1zMfpMuhEN0K/view?usp=sharing" className="btn btn-outline-primary"
            role="button"
            target="_blank"
          >
              C Language
          </a>
          <a
            href="https://drive.google.com/file/d/1hmYNbyAoFSf5FgszFoYXTpPu49UEetxw/view?usp=sharing" className="btn btn-outline-primary"
            role="button"
            target="_blank"
          >
              Java
          </a>
          <a
            href="https://drive.google.com/file/d/1ZnOdvQmlkHv5A-qkzRP2AzYepVCt2rZL/view?usp=sharing" className="btn btn-outline-primary"
            role="button"
            target="_blank"
          >
              Python Quiz
          </a>
        </div>
        <div className="softSkills">
          <h3 className={`${isDark ? "darkMode" : "lightMode"}`}>Soft Skills :</h3>
          <div className="accordion  mt-4 mb-3 customSoftSkillBox" id="accordionFlushExample">
            <div className={`accordion-item ${isDark ? "darkMode" : "lightMode"}`}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button collapsed ${isDark ? "darkMode" : "lightMode"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  LeaderShip
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Since I was the Class Representative of my class in my college time, I have lead my class many times during my college time.
                </div>
              </div>
            </div>
            <div className={`accordion-item ${isDark ? "darkMode" : "lightMode"}`}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button collapsed ${isDark ? "darkMode" : "lightMode"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Time management
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                I efficiently prioritize tasks to meet deadlines and maintain a balanced workload. My ability to manage time ensures consistent productivity and quality in all my projects.
                </div>
              </div>
            </div>
            <div className={`accordion-item ${isDark ? "darkMode" : "lightMode"}`}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button collapsed ${isDark ? "darkMode" : "lightMode"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Team Work
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  During my Internship and college Projects I have worked in team and done many tasks very efficiently.
                </div>
              </div>
            </div>
          </div>
        <div className="LeaderSkill d-flex flex-column mb-3 mt-5">
          <h3 className={`${isDark ? "darkMode" : "lightMode"}`}>Add-on Certificates :</h3>
          <p className={`${isDark ? "text-white" : "text-dark"}`}>I got a certificate for showcasing <b>'LeaderShip Skills'</b> in executing the workshop named <b>"AI for Students : Build your own generative AI model"</b> which was conducted by <b>AI expert and IIT Delhi alumnus, Mr. Trivikrama</b> and organized by <b>NextWave</b> at Our College.</p>
          <img src={certificateleader} alt="" className="LeaderImage"/>
          <a className="btn btn-outline-primary mt-2 mb-4 w-25 align-self-center" href="https://drive.google.com/file/d/18WnyxAX4_TNrH4PBsmgMV7s6_l9d-bSG/view?usp=sharing" role="button" target="_blank">View or Download</a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
