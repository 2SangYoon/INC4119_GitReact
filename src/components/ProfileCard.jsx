import React from "react";
import MyImage from "../assets/sangyoon_hp.png";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={MyImage} alt="프로필" />
      <div className="profile-info">
        <h3>이상윤</h3>
        <p>안녕하세요!<br></br>저는 동국대학교 정보통신공학과 이상윤입니다. 잘 부탁드립니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard; 