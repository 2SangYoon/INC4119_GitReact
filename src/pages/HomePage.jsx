import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = ({ setCurrentPage }) => {
  const features = [
    {
      title: "소개",
      description: "상윤씨의 소개입니다.",
      page: "about",
    },
    {
      title: "프로젝트",
      description: "상윤씨가 만든 프로젝트들입니다.",
      page: "projects",
    },
    {
      title: "연락처",
      description: "상윤씨에게 연락하는 방법입니다.",
      page: "contact",
    },
    {
      title: "취미",
      description: "상윤씨의 취미입니다.",
      page: "hobby",
    },
  ];

  return (
    <div className="home-container">
      <h1 style={{ color: "teal" }}>🚀 Welcome to My Portfolio 🚀</h1>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            onClick={() => setCurrentPage(feature.page)} // 
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;