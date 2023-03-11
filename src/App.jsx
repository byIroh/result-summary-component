import React from "react";

import "./App.css";

import Result from "./components/Result";
import data from "./assets/data";

const App = () => {
  return (
    <main>
      <div className="result-container">
        <h1 className="result-heading">Your Result</h1>
        <div className="score-container">
          <p className="final-score">76</p>
          <p className="of-100">of 100</p>
        </div>
        <p className="result-status" >Great</p>
        <p className="result-description">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="summary-container">
        <h2 className="summary-heading">Summary</h2>
        <div className="grades-container">
          {data.map((entry, index) => {
            return (
              <Result
                key={index}
                category={entry.category}
                score={entry.score}
                icon={entry.icon}
              />
            );
          })}
        </div>
        <button className="continue-btn">Continue</button>
      </div>
    </main>
  );
}

export default App;