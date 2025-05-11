import React from "react";
import useCalculatorLogic from "./useCalculatorLogic";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = () => {

    const {input, result, handleClick, calculateResult, clearInput}=
    useCalculatorLogic();

    return (
        <div className="calculator">
            {/*계산기 화면 */}
            <Display input={input} result={result}/>

            {/* 버튼 컴포넌트*/}
            <Buttons
  onButtonClick={(value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "AC") {
      clearInput();
    } else {
      handleClick(value);
    }
  }}
/>

        </div>
    );
};

export default Calculator;