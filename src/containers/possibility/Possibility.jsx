import React from "react";
import possibilityImg from "../../assets/possibility.png";
import "./possibility.css"

function Possibility() {
  return (
    <div className="gpt3_possibility section_padding">
      <div className="gpt3_possibility_image">
        <img src={possibilityImg} alt="possiblities" />
      </div>
      <div className="gpt3_possibility_content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient_text">
          The possibilities are beyond your imagination{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          dolorum laboriosam aliquid fugit vitae perferendis quo enim tenetur
          quos in.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;
