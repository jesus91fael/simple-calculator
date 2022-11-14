
import { Container, Content, Row } from "./components/styles"
import { useState } from 'react'
import Button from "./components/Button"
import Input from "./components/Input"

function App() {

const [currentNumber, setCurrentNumber ] = useState('0')
const [firstNumber, setFirstNumber] = useState('0')
const [operation, setOperation] = useState('')

const handleOnClear = () => {
  setCurrentNumber('0')
  setFirstNumber('0')
  setOperation('')
}

const handleAddNumber = number => {
    setCurrentNumber(prevState => `${prevState === '0' ? '' : prevState}${number}`)
}

const sumNumbers = () => {

  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('+')
  
  } else {
  
  const sum = Number(firstNumber) + Number(currentNumber)
  setCurrentNumber(String(sum))
  setOperation('')
  }
}
const subNumbers = () => {

  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('-')
  
  } else {
  
  const sum = Number(firstNumber) - Number(currentNumber)
  setCurrentNumber(String(sum))
  setOperation('')
  }
}
const multiNumbers = () => {

  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('*')
  
  } else {
  
  const sum = Number(firstNumber) * Number(currentNumber)
  setCurrentNumber(String(sum))
  setOperation('')
  }
}
const divNumbers = () => {

  if(firstNumber === '0'){
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation('/')
  
  } else {
  
  const sum = Number(firstNumber) / Number(currentNumber)
  setCurrentNumber(String(sum.toFixed(2)))
  setOperation('')
  }
}

const handleEquals = () => {
  if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
    switch(operation){
        case '+': sumNumbers();
      break;
        case '-': subNumbers();
      break;
        case '*': multiNumbers();
      break;
        case '/': divNumbers();
      break;
      default: 
      break;
    }
  }
}

  return (
    <Container>
      <Content>
        <Input disabled value={currentNumber}/>
      <Row>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button label="/" onClick={divNumbers}/>
        <Button label="c" onClick={handleOnClear}/>
        <Button label="X" onClick={multiNumbers}/>
      </Row>

      <Row>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="-" onClick={subNumbers}/>
      </Row>

      <Row>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={sumNumbers}/>
      </Row>

      <Row>
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={handleEquals}/>
      </Row>
      </Content>
    </Container>
  )
}

export default App