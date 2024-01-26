import React from "react";
import "./input.css";

const Input = ({ label, placeholder }) => {
  const handleChange = () => {
    document.getElementById("segmentNameError").style.display = "none";
  };
  return (
    <div className='input-element'>
      <label className='input-label'>{label}</label>
      <input
        placeholder={placeholder}
        className='input-tag'
        id='segment-input'
        onChange={handleChange}
      />
      <span className='error-message' id='segmentNameError'>
        Segment name cannot be empty
      </span>
    </div>
  );
};

export default Input;
