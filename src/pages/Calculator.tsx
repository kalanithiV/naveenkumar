import React, { useState } from 'react';
import '../pages/Calculator.css'
import Button from '../components/Button';
import Display from '../components/Display';


const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('0');

  const handleButtonClick = (value: string) => {
    if (input === '0') {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput('0');
  };

  const handleClearOne = () => {
    if (input.length > 1) {
      setInput(input.slice(0, -1));
    } else {
      setInput('0');
    }
  };

  const handleSubmit = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="main_header">
      <div className="calculator">
        <Display value={input} />     
        <div className="buttons">
          <Button label="(" onClick={() => handleButtonClick('(')} className="equal_bracket" />
          <Button label=")" onClick={() => handleButtonClick(')')} className="equal_bracket" />
          <Button label="%" onClick={() => handleButtonClick('%')} className="equal_bracket" />
          <Button label="AC" onClick={handleClear} className="equal_bracket" />
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="÷" onClick={() => handleButtonClick('/')} className="equal_bracket" />
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="×" onClick={() => handleButtonClick('*')} className="equal_bracket" />
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="-" onClick={() => handleButtonClick('-')} className="equal_bracket" />
          <Button label="0" onClick={() => handleButtonClick('0')} />
          <Button label="." onClick={() => handleButtonClick('.')} />
          <Button label="=" onClick={handleSubmit} className="equal" />
          <Button label="+" onClick={() => handleButtonClick('+')} className="equal_bracket" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
