import React from "react";
import Calculator from "../components/Calculator"; // 계산기 컴포넌트 경로 확인!

const CalculatorPage = () => {
  return (
    <div className="main-content">
      <h2>🧮 나의 계산기</h2>
      <Calculator />
    </div>
  );
};

export default CalculatorPage;
