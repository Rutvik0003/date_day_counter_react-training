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



const Counter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  // Calculate next date
  const nextDate = new Date();
  nextDate.setDate(new Date().getDate() + step * count);
  const nextDay = nextDate.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedNextDate = nextDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  // Handlers
  const ReduceStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const IncreaseStep = () => {
    setStep(step + 1);
  };

  const ReduceCount = () => {
    
      setCount(count - 1);
    
  };

  const IncreaseCount = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      <BtnContainer>
        <Smallbtn onClick={ReduceStep}>-</Smallbtn>
        <Text>Step: {step}</Text>
        <Smallbtn onClick={IncreaseStep}>+</Smallbtn>
      </BtnContainer>
      <BtnContainer>
        <Smallbtn onClick={ReduceCount}>-</Smallbtn>
        <Text>Count: {count}</Text>
        <Smallbtn onClick={IncreaseCount}>+</Smallbtn>
      </BtnContainer>
      <Text>
            {step * count === 0 && `Today is ${nextDay}, ${formattedNextDate}`}
            {step*count > 0 && `${step * count} days from today is ${nextDay}, ${formattedNextDate}.`}
            {step*count <0 && `${-1*step * count} days ago today was ${nextDay}, ${formattedNextDate}.`}
      </Text>

    </Container>
  );
};

export default Counter;
