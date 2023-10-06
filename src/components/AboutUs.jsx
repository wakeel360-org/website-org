import React from "react";
import { Fade } from "react-reveal";
import Pulse from "react-reveal/Pulse";
import { HashLink as Link } from "react-router-hash-link";
import { AboutUsData } from "../constants/data";
import videoThumb from "/img/about/overview-thumbnail.png";

const AboutUs = (props) => {
  const { bgGray } = props;

  return (
    <>
      <section className={`${bgGray} about-us-sec pt-100 pb-70`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-desc">
                <Fade left delay={200}>
                  <h1>Welcome To Wakeel360</h1>
                </Fade>
                <Fade left delay={400}>
                  <p>{AboutUsData.overview}</p>
                </Fade>
                <Pulse delay={600}>
                  <Link to="/about#" className="about-btn">
                    Read More
                  </Link>
                </Pulse>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <Fade right delay={900}>
                <div className="video-inner">
                  <img src={videoThumb} alt="video_thumb" />
                  <div className="video-overly">
                    <div className="video-button">
                      <a
                        target="_blank"
                        href={AboutUsData.videoLink}
                        className="mfp-iframe video-play"
                      ></a>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
