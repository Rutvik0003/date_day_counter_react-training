import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: rgba(255, 255, 255, 0.8); /* Transparent background for glass effect */
  backdrop-filter: blur(10px); /* Apply blur for glassmorphism */
  margin: 0 auto;
  height: auto;
  width: 90%;
  max-width: 800px;
  padding: 30px;
  border-radius: 30px; /* Softer and more inviting shape */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Stronger shadow for prominence */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 30px; /* Balanced spacing */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Subtle border for glass effect */
  animation: scaleIn 0.6s ease; /* Smooth scaling animation */

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center; /* Center-align buttons */
  align-items: center;
  gap: 20px; /* Balanced spacing between buttons */
`;

const Smallbtn = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: none;
  padding: 10px;
  background: linear-gradient(145deg, #ff7e5f, #feb47b); /* Vibrant gradient */
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 28px; /* Large, clear text */
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 15px rgba(255, 127, 95, 0.5), inset 0 1px 3px rgba(255, 255, 255, 0.5);

  &:hover {
    background: linear-gradient(145deg, #feb47b, #ff7e5f); /* Inverted gradient on hover */
    transform: scale(1.2); /* Bigger hover effect */
    box-shadow: 0 10px 20px rgba(255, 127, 95, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.4);
  }

  &:active {
    background: linear-gradient(145deg, #ff6a45, #ff784e); /* Darker gradient on click */
    transform: scale(1.1); /* Subtle shrink effect */
    box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.2); /* Inner shadow on press */
  }
`;

const Text = styled.h1`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 28px; /* Slightly larger text for readability */
  text-align: center;
  color: rgba(44, 62, 80, 0.9); /* Soft, modern dark blue-gray */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* Subtle text shadow */
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 24px; /* Adjust for smaller screens */
  }

  animation: fadeIn 1s ease-in-out; /* Smooth fade-in animation */

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const InputFieldContainer = styled.div`
  display: flex;
  align-items: center; /* Vertically center text and input */
  gap: 10px; /* Add spacing between text and input */
  width: 100%;
`;

const InputField = styled.input`
  flex: 1; /* Allow input field to grow and take available space */
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 16px;
  outline: none;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    border-color: #feb47b;
    box-shadow: 0 0 8px rgba(255, 127, 95, 0.5);
  }
`;

const ResetBtn = styled.button`
  height: 60px;
  width: 200px;
  background: linear-gradient(145deg, #6a11cb, #2575fc); /* Vibrant gradient */
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 30px;
  padding: 15px 20px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(106, 17, 203, 0.5), inset 0 1px 3px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(145deg, #2575fc, #6a11cb); /* Inverted gradient */
    box-shadow: 0 15px 25px rgba(106, 17, 203, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: scale(1.05);
    background: linear-gradient(145deg, #4c009c, #001f5c); /* Darker gradient on press */
    box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.2);
  }

`


const Counter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  // Calculate next date
  const nextDate = new Date();
  nextDate.setDate(new Date().getDate() + step * count);
  const nextDay = nextDate.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedNextDate = nextDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  const handleResetBtn =()=>{
      if(step != 0 || count != 0)
      {
        setStep((prevStep)=>prevStep=0);
        setCount((prevCount)=>prevCount=0);
      }
  }

  const ReduceCount = () => {
    
      setCount((count)=>count-1);
    
  };

  const IncreaseCount = () => {
    setCount((count)=>count+1);
  };

  return (
    <Container>
      <BtnContainer>
        <InputFieldContainer>
        <Text>Step : {step}</Text>
        <InputField type='range' min={0} max={10} value={step} onChange={(e)=>setStep(e.target.value)}/>
        </InputFieldContainer>
      </BtnContainer>
      <BtnContainer>
        <Smallbtn onClick={ReduceCount}>-</Smallbtn>
        <Text>Count: <InputField type='number'value={count} onChange={(e)=>setCount(e.target.value)}/></Text>
        <Smallbtn onClick={IncreaseCount}>+</Smallbtn>
      </BtnContainer>
      <Text>
            {step * count === 0 && `Today is ${nextDay}, ${formattedNextDate}`}
            {step*count > 0 && `${step * count} days from today is ${nextDay}, ${formattedNextDate}.`}
            {step*count <0 && `${-1*step * count} days ago today was ${nextDay}, ${formattedNextDate}.`}
      </Text>
      <ResetBtn onClick={handleResetBtn}>Reset</ResetBtn>


    </Container>
  );
};

export default Counter;
