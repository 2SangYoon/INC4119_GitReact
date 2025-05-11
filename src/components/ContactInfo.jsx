import React from "react";
import Address from "../assets/image.png";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p>✉️: yhtkddbs@icloud.com</p>
      <p>📞: 010-4799-8834</p>
      <p>📇: 동국대학교 신공학관</p>
      <a href="https://map.naver.com/p/search/%EB%8F%99%EA%B5%AD%EB%8C%80%ED%95%99%EA%B5%90%20%EC%8B%A0%EA%B3%B5%ED%95%99%EA%B4%80/place/21215473?c=15.54,0,0,0,dh&placePath=%3Fentry%3Dpll"
  target="_blank"
  rel="noopener noreferrer"><img src={Address} alt="위치" className="location-img" /></a>
    </div>
    
  );
};

export default ContactInfo;
