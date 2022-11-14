import { Container, Content, Row } from "./components/styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${number}${prev === "0" ? "" : prev}  `);
  };

  const handleOnClear = () => {
    setFirstNumber("0");
    setCurrentNumber("0");
    setOperation("");
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      handleOnClear();
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMultNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      handleOnClear();
      setOperation("X");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };
  const handleRemNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      handleOnClear();
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      handleOnClear();
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleRemNumbers();
          break;
        case "X":
          handleMultNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="X" onClick={handleMultNumbers()} />
          <Button label="/" onClick={handleDivNumbers()} />
          <Button label="C" onClick={handleOnClear()} />
          <Button label="X" onClick={handleMultNumbers()} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleRemNumbers()} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers()} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals()} />
        </Row>
        <Button />
      </Content>
    </Container>
  )
}

export default App
