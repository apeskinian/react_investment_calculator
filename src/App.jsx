import { useState } from 'react';

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from './components/Results.jsx';

function App() {

  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  console.log(UserInput);

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue
          }
      });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* Checking for valid input for duration and either showing message or table */}
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
