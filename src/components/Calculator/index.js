import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import "./index.css";

export default function Calculator() {
  const [num, setNum] = useState("");
  const [firstNum, setFirstNum] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNum(e) {
    const input = e.target.value;

    if (num === "0" || num === "undefined") {
      setNum(input);
    } else {
      setNum((prevNum) => prevNum + input);
    }
  }

  function clear() {
    setNum("");
  }

  function percentage() {
    setNum(num / 100);
  }
  function changeSignal() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function calculate() {
    if (operator === "/") {
      setNum(firstNum / num);
    } else if (operator === "*") {
      setNum(firstNum * num);
    } else if (operator === "+") {
      setNum(parseFloat(firstNum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(firstNum - num);
    }

    console.log("calculou");
    console.log(firstNum);
    console.log(num);
    console.log(operator);
  }

  function operatorHandle(e) {
    const operatorInput = e.target.value;
    setOperator(operatorInput);
    setFirstNum(num);
    setNum("");
  }

  return (
    <>
      <Box m={3} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={6} />
          <div className="result">
            <h1>{num}</h1>
          </div>
          <button onClick={clear}>AC</button>
          <button onClick={changeSignal}>+/-</button>
          <button onClick={percentage}>%</button>
          <button className="btn-operation" onClick={operatorHandle} value="/">
            /
          </button>
          <button className="btn-number" onClick={inputNum} value={7}>
            7
          </button>
          <button className="btn-number" onClick={inputNum} value={8}>
            8
          </button>
          <button className="btn-number" onClick={inputNum} value={9}>
            9
          </button>
          <button className="btn-operation" onClick={operatorHandle} value="*">
            *
          </button>
          <button className="btn-number" onClick={inputNum} value={4}>
            4
          </button>
          <button className="btn-number" onClick={inputNum} value={5}>
            5
          </button>
          <button className="btn-number" onClick={inputNum} value={6}>
            6
          </button>
          <button className="btn-operation" onClick={operatorHandle} value="-">
            -
          </button>
          <button className="btn-number" onClick={inputNum} value={1}>
            1
          </button>
          <button className="btn-number" onClick={inputNum} value={2}>
            2
          </button>
          <button className="btn-number" onClick={inputNum} value={3}>
            3
          </button>
          <button className="btn-operation" onClick={operatorHandle} value="+">
            +
          </button>
          <button className="btn-number" onClick={inputNum} value={0}>
            0
          </button>
          <button className="btn-number" onClick={inputNum} value={"."}>
            ,
          </button>
          <button className="btn-number" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="btn-operation" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </>
  );
}
