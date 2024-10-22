import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <section
      style={{ paddingTop: "150px" }}
      className="video-sec-area pb-100 pt-40"
      id="about"
    >
      <Navbar />
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-6 video-right justify-content-center align-items-center d-flex">
            <div className="overlay overlay-bg"></div>
            <a
              className="play-btn"
              href="https://www.youtube.com/watch?v=ARA0AxrnHdM"
            >
              <img className="img-fluid" src="img/play-icon.png" alt="" />
            </a>
          </div>
          <div className="col-lg-6 video-left">
            <h6>Live Coffee making process.</h6>
            <h1>
              We Telecast our <br />
              Coffee Making Live
            </h1>
            <p>
              <span>We are here to listen from you deliver exellence</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <img className="img-fluid" src="img/signature.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
