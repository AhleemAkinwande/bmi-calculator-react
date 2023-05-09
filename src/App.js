import React, {useState} from "react";

import '/Users/ahleem/Desktop/Tech/Coding Practice Files/BMI Calculator/bmi-calculator-react/src/index.css'


function App() {

  // State
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let bmiCalculation = (e) => {
    // prevent submitting
    e.preventDefault();

    if (isNaN(height) || height === 0) {
      if (isNaN(weight) || weight === 0) {
        alert("Please enter a valid weight or height");
    } else {
      alert("Please enter a valid height");
      }
     } 
    else if (isNaN(weight) || weight === 0) {
      alert("Please enter a valid weight");
    } else {
      let bmi = ((weight / (height ** 2)) * 703);
    setBmi(bmi.toFixed(1)); // toFixed(1) sets the number of decimal digits

    // Logic for message
    if (bmi < 25) {
      setMessage("You are underweight")
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("You are a healthy weight")
    } else {
      setMessage("You are overweight")
    }
  }
}

  // Show image based on BMI calculation
  let imgSrc = "";

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
    imgSrc = require("../src/assets/underweight.png")
  } else if (bmi >= 25 && bmi < 30) {
    imgSrc = require("../src/assets/healthy.png")
  } else {
    imgSrc = require("../src/assets/overweight.png")
  }
};


let reload = () => {
  window.location.reload();
};

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={bmiCalculation}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" type="submit" onClick={reload}>Reload</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        
        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
