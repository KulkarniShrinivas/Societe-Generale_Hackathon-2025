import React from "react";
import AboutUsMain from "../_components/about-us-page/about-us-main/aboutUsMain"
import AboutUsContent from "../_components/about-us-page/about-us-content/aboutUsContent"

const AboutUsPage = () => {

  return (
    <div className="about-us-page-container">
      <AboutUsMain />
      <AboutUsContent />
    </div>
  );
};

export default AboutUsPage;
