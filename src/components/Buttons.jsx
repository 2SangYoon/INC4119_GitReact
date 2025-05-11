import React from "react";

const Buttons = ({onButtonClick})=>{
    const buttons =[
        ["7","8","9","/"],
        ["4","5","6","*"],
        ["1","2","3","-"],
        ["0",".","=","+"],
        ["%","//","AC"],
    ];

    return (
        <div>
            {/*buttons 배열을 map()으로 행 단위로 랜더링*/}
            {buttons.map((row,rowIndex)=>(
               <div key={rowIndex}>
                {row.map((btn)=>(
                    <button
                    key={btn}
                    //버튼 클릭 시 onButtonClick 함수 실행, 값 부모 컴포넌트 전달
                    onClick={()=> onButtonClick(btn)}
                    >
                        {btn}{/* 버튼 안에 표시될 텍스트*/}
                    </button>
                ))} 
                </div>
            ))}
        </div>
    );
};

export default Buttons; // Buttons 컴포넌트 사용 위해 export
