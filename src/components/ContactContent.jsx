import React from "react";
import { ContactData } from "../constants/data";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  return (
    <>
      <section className="contact-page-sec pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="contact-page-map">
                <iframe
                //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503103.25504622894!2d-118.94592338887756!3d34.065964560335836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1497798250780"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.784614346254!2d-1.8627302849408771!3d52.44681634940378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bbeeb93117f1%3A0x175eebad5fd0cad!2s691%20Stratford%20Rd%2C%20Birmingham%20B11%204DX%2C%20UK!5e0!3m2!1sen!2s!4v1680807308646!5m2!1sen!2s"
                  width="100%"
                  height="350"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>phone</h2>
                    <a
                      className="text-dimmed d-block"
                      href={`tel:${ContactData.phone}`}
                    >
                      {ContactData.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>e-mail</h2>
                    <span>
                      <a href={`mailto:${ContactData.email}`}>
                        {ContactData.email}
                      </a>
                    </span>
                    <span>
                      <a href={`mailto:${ContactData.email2}`}>
                        {ContactData.email2}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>office</h2>
                    <span>{ContactData.addressLine1}</span>
                    <span>{ContactData.addressLine2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
