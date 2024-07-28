"use client"

import React from "react";
import "./footer.scss";
import Link from "next/link";
import { footerData } from "../../../../public/data/footerData";
import SocialMedia from "../social-media";
import { contactData } from "../../../../public/data/contactData";

const Footer = () => {
  const handleLinkClickHandler = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="logo-details-container">
          <img
            className="logo-img"
           
            src={footerData.logo}
            alt="Marathi Sarvapooja Logo"
          />
          <p className="details">{footerData.footer_details}</p>
        </div>
        <div className="contact-details">
          <div className="talk-to-us">
            <h3>Talk to us</h3>
            <a href={`tel:${contactData.info.phoneNo}`}>
              {contactData.info.phoneNo}
            </a>
            <a href={`mailto:${contactData.info.email}`}>
              {contactData.info.email}
            </a>
          </div>
          <div className="address">
            <h3>Address</h3>
            <p>{contactData.info.address}</p>
          </div>
          <SocialMedia
            whatsapp={footerData.whatsapp}
            fb={contactData.socialMedia.fb}
            insta={contactData.socialMedia.insta}
          />
        </div>

        <div className="main-links">
          <h3>Main Links</h3>
          <ul>
            {footerData.main_links.map((list) => (
              <li key={list.title}>
                <Link onClick={handleLinkClickHandler} href={list.link}>
                  {list.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer-right">
        MarathisarvaPooja © 2023-2024 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
