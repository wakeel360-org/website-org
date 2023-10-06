import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AboutUsData, ContactData } from "../constants/data";
import footerLogo from "/img/logo/logoLight.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-sec">
          <div className="container">
            <div className="row" style={{ justifyContent: "space-evenly" }}>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget-one">
                  <h2>About Us</h2>
                  <p>{AboutUsData.overviewShort}</p>
                  <Link to="/#">
                    <img src={footerLogo} alt="footerLogo" />
                  </Link>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6">
                                <div className="footer-widget-menu">
                                    <h2>our Course</h2>
                                    <ul>
                                        <li><Link to="#">Graphics Design</Link></li>
                                        <li><Link to="#">Web Development</Link></li>
                                        <li><Link to="#">Article Wiriting</Link></li>
                                        <li><Link to="#">Virtual Assistance</Link></li>
                                        <li><Link to="/contact#">Support Center</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget-menu">
                                    <h2>Quick Links</h2>
                                    <ul>
                                        <li><Link to="/contact#">Support Center</Link></li>
                                        <li><Link to="#">Create Account</Link></li>
                                        <li><Link to="#">business Policy</Link></li>
                                        <li><Link to="/contact#">Terms and condition</Link></li>
                                        <li><Link to="#">Analysis Course</Link></li>
                                    </ul>
                                </div>
                            </div> */}
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget-four">
                  <h2>contact us </h2>
                  <div className="inner-box">
                    <div className="media mb-2">
                      <div className="inner-item d-flex">
                        <div className="media-left me-3 mt-1">
                          <span className="icon">
                            <i className="fa fa-map-marker"></i>
                          </span>
                        </div>
                        <div className="media-body">
                          <span className="inner-text d-block">
                            {ContactData.addressLine1}
                          </span>
                          <span className="inner-text">
                            {ContactData.addressLine2}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="media mb-2">
                      <div className="inner-item d-flex">
                        <div className="media-left me-3 mt-1">
                          <span className="icon">
                            <i className="fa-regular fa-envelope"></i>
                          </span>
                        </div>
                        <div className="media-body">
                          <span className="inner-text">
                            <a
                              className="text-dimmed d-block"
                              href={`mailto:${ContactData.email}`}
                            >
                              {ContactData.email}
                            </a>
                            <a
                              className="text-dimmed"
                              href={`mailto:${ContactData.email2}`}
                            >
                              {ContactData.email2}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="inner-item d-flex">
                        <div className="media-left me-3 mt-1">
                          <span className="icon">
                            <i className="fa fa-phone"></i>
                          </span>
                        </div>
                        <div className="media-body">
                          <span className="inner-text">
                            <a
                              className="text-dimmed d-block"
                              href={`tel:${ContactData.phone}`}
                            >
                              {ContactData.phone}
                            </a>
                            {/* <a className='text-dimmed' href="tel:27-2564687">27 2564687</a> */}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="copy-right">
                  <p>
                    Copyright {new Date().getFullYear()} &copy;{" "}
                    <span>
                      <Link to="#">wakeel360.org</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
