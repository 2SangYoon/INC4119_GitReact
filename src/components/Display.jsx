import React from "react";

const Display =({input,result})=>{
    return (
        <div>
        {/* 입력 값 표시 */}
        {/*기본 값 0*/}
        <div>{input || "0"}</div>
        {/*계산 결과*/}
        <div>{result}</div>
        </div>
    );
};

export default Display;