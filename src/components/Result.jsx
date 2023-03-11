import React from "react";

const Result = ({ category, score, icon }) => {
  const gradeStyles = `grade ${category}`
  const gradeName = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <div className={gradeStyles}>
      <img type="svg+xml" src={icon} alt="" />
      <p className="grade-name">{gradeName(category)}</p>
      <p className="grade-value">
        <span className="score">{score}</span> / 100
      </p>
    </div>
  );
}

export default Result;