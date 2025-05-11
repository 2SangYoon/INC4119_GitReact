import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © 2025 SoftwareEngineering 나만의 포트폴리오 만들기. All rights
        reserved.
        <p style={{ textAlign: "right", marginRight: "2rem" }}>
        <p>개발자: 2022112698 정보통신공학과 이상윤</p>
  오늘 날짜: {new Date().toLocaleDateString()}
</p>
      </p>
    </footer>
  );
};

export default Footer;
