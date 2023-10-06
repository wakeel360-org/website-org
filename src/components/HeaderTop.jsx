import React from "react";
import { ContactData } from "../constants/data";
import SocialShare from "./SocialShare";

const HeaderTop = (props) => {
  let { headerBgGray } = props;

  return (
    <>
      <div className={`${headerBgGray} header-top`}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-none d-md-block">
              <div className="header-left">
                <ul>
                  <li>
                    <a href="tel:+00 0123456789">
                      <i className="fa-solid fa-phone"></i>
                      {ContactData.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${ContactData.email}`}>
                      <i className="fa-regular fa-envelope"></i>
                      {ContactData.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-md-5 d-none d-md-block">
              <div className="header-right-div">
                <div className="social-profile">
                  <span className="social-title pe-2">Follow Us</span>
                  <SocialShare />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
