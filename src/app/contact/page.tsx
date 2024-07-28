"use client"

import React from "react";
import "./contact-us.scss";
import ganeshImage from "../../../public/assets/ganesh_comp.webp";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { contactData } from "../../../public/data/contactData";
import SocialMedia from "../_components/social-media";

const ContactUs = () => {
  console.log(console.log(ganeshImage));

  return (
    <Box className="contact-us-container">
      <Box
        className="contact-us-header"
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage: `linear-gradient(to bottom, var(--primary-color), var(--primary-color-dark)),url(${ganeshImage.src})`,
          backgroundBlendMode: "multiply",
          backgroundPosition: "right",
          color: "white",
        }}
      >
        <h1 className="heading font-bold">{contactData.heading}</h1>
        <p className="para">{contactData.subHead}.</p>
      </Box>
      <Box className="main-info-form-container">
        <Box className="contact-info-container">
          <Box className="info-heading">
            <h4>{contactData.info.head}</h4>
            <p>{contactData.info.para}</p>
          </Box>
          <Box className="email-phone-container">
            <Box className="icon-info-container">
              <Box className="icon-container">
                <PhoneIcon sx={{ color: "var(--primary-color-dark)" }} />
                <h4>Phone</h4>
              </Box>
              <a className="link" href={`tel:${contactData.info.phoneNo}`}>
                {contactData.info.phoneNo}
              </a>
            </Box>
            <Box className="icon-info-container">
              <Box className="icon-container">
                <EmailIcon sx={{ color: "var(--primary-color-dark)" }} />
                <h4>Email</h4>
              </Box>
              <a className="link" href={`mailto:${contactData.info.email}`}>
                {contactData.info.email}
              </a>
            </Box>
          </Box>
          <Box className="address-container">
            <h4>Address</h4>
            <p className="address">{contactData.info.address}</p>
          </Box>
          <Box className="social-media-container">
            <h4 className="social-media-heading">Social Media</h4>
            <SocialMedia
              insta={contactData.socialMedia.insta}
              fb={contactData.socialMedia.fb}
            />
          </Box>
        </Box>
        {/* <ContactForm /> */}
      </Box>
    </Box>
  );
};

export default ContactUs;
