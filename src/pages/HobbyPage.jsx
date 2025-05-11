import React from "react";
import jasmine from "../assets/자스민.jpeg";
import mosun from "../assets/모순.jpeg";
import wave from "../assets/급류.jpeg";
import skinny from "../assets/척테일러.jpeg";
import yours from "../assets/데이먼스이어.jpeg";
import hanriver from "../assets/한강.jpeg";

const HobbyPage = () => {
    
  return (
    <div>
    <h2>🎧 상윤씨의 취미 생활 🎧</h2>
<p>음악과 책은 상윤씨에게 큰 영감을 줍니다. 그중에서도 요즘 특히 좋아하는 작품들을 소개합니다.</p>

    <div className="recommendations">
      <div className="recommendations_song">
        <h3>🎵 추천 음악</h3>

        <div className="card">
          <img src={skinny} alt="스키니브라운" />
          <div className="card-text">
            <p><strong>skinny brown - 척테일러</strong></p>
            <p>“난 이제야 살만한데 <br /> 축하해 줄 너가 없어 왜”</p>
          </div>
        </div>

        <div className="card">
          <img src={yours} alt="데이먼스이어" />
          <div className="card-text">
            <p><strong>데이먼스 이어 - yours</strong></p>
            <p>“그대여 난 솔직히 좀 싫어 그대는 <br />  내가 없더라도 아무렇지 않은 게”</p>
          </div>
        </div>

        <div className="card">
          <img src={jasmine} alt="DPR LIVE" />
          <div className="card-text">
            <p><strong>DPR LIVE - Jasmine</strong></p>
            <p>“좋은 차, 많은 돈, 없을 수 있어 하지만<br />난 널 아낄 수 있고, 또 소중히 다룰 수 있어”</p>
          </div>
        </div>
      </div>

      <div className="recommendations_book">
        <h3>📚 추천 책</h3>

        <div className="card">
          <img src={wave} alt="급류" />
          <div className="card-text">
            <p><strong>급류 - 정대건</strong></p>
            <p>“물살에 휩쓸리지 않으려 안간힘을 쓸수록,<br /> 나는 더 깊이 가라앉고 있었다.”</p>
          </div>
        </div>

        <div className="card">
          <img src={mosun} alt="모순" />
          <div className="card-text">
            <p><strong>모순 - 양귀자</strong></p>
            <p>“삶은 모순으로 가득 차 있고,<br /> 그 모순 속에서 우리는 자라난다.”</p>
          </div>
        </div>

        <div className="card">
          <img src={hanriver} alt="소년이 온다" />
          <div className="card-text">
            <p><strong>소년이 온다 - 한강</strong></p>
            <p>“살아남은 자의 고통은 쉽게 잊히지 않는다.”</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HobbyPage;
