import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleChoose = ({ choose }) => {
  let { image, icon, text, title } = choose;

  return (
    <>
      <div className="why-choose-inner">
        <div className="why-choose-thumb">
          <img
            src={`/img/why-choose/${image}`}
            alt="whyChoose"
            style={{ width: 392, height: 392 }}
          />
          <div
            className="why-choose-icon"
            style={{
              width: "150px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={`/img/why-choose//${icon}`}
              alt="whyChooseIcon"
              style={{ width: "100px", height: "70px" }}
            />
          </div>
        </div>
        {/* <div className="why-choose-text">
                    <h2><Link to="/course#">{title}</Link></h2>
                    <p>{text}</p>
                </div> */}
      </div>
    </>
  );
};

export default SingleChoose;
