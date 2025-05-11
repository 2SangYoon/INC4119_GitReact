import {useState} from "react";

const useCalculatorLogic = () =>{

    const [input,setInput] = useState("");//현재 입력 숫자 및 연산자
    const [result,setResult] = useState("");//계산 결과 값

    const handleClick = (value) => {
        // 계산 후 input이 초기화된 상태에서 연산자 누르면 result 기준으로 시작
        if (result && input === "" && /[+\-*/%]/.test(value)) {
          setInput(result + value);
          setResult(""); // result는 초기화
        } else {
          setInput((prev) => prev + value);
        }
      };
      

    const calculateResult = () => {
        try {
            // '//' → 정수 나눗셈(Math.floor)을 위한 변환
            let expression = input.replace(/(\d+)\s*\/\/\s*(\d+)/g, (_, a, b) => {
                return `Math.floor(${a}/${b})`;
            });
    
            // 일반 수식 계산
            setResult(eval(expression).toString());
            setInput(""); // input 초기화
        } catch {
            setResult("Error");
        }
    };
    

const clearInput = () => {
    setInput("");
    setResult("");
    };

return {input, result, handleClick, calculateResult, clearInput};
};

export default useCalculatorLogic;