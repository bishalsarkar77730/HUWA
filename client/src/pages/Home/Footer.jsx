import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <h3>HUWA</h3>
        <p>All rights reserved by Huwa Pvt.Ltd ©{year}</p>
      </div>
    </div>
  );
};

export default Footer;
