import React, { useState } from 'react';
import '../pages/Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';
import { buttonsConfig } from '../components/buttonsConfig';

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

  const handleDelete = () => {
        if (input.length > 1) {
          setInput(input.slice(0, -1));
        } else {
          setInput('0')
        }
      };

  const handleSubmit = () => {
    try {
      // Check for division by zero
      if (input.includes('/0')) {
        setInput('Error');
      } else {
        setInput(eval(input).toString());
      }
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="main_header">
      <div className="calculator">
        <Display value={input} />
        <div className="buttons">
          {buttonsConfig.map((button, index) => (
            <Button
              key={index}
              label={button.label}
              onClick={
                button.isSpecial
                  ? button.label === 'AC'
                    ? handleClear
                    : button.label === 'DEL'
                    ? handleDelete
                    : handleSubmit
                  : () => handleButtonClick(button.value || "")
              }
              className={button.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

