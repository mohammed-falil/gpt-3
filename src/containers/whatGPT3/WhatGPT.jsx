import React from "react";
import "./whatGPT3.css";
import Feature from "../../Components/feature/Feature";
function WhatGPT() {
  return (
    <div className="gpt3_whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3_whatgpt3_feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nemo eos dolorem, dicta veniam sunt ea error? Iusto repudiandae maiores eos possimus, voluptate pariatur, rem aspernatur corporis, tempore iste voluptatem"
        />
      </div>
      <div className="gpt3_whatgpt3_header">
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3_whatgpt3_container">
        <Feature
          title="ChatBots"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias vel animi temporibus debitis fugit."
        />
        <Feature
          title="KnowledgeBase"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias vel animi temporibus debitis fugit."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestias vel animi temporibus debitis fugit."
        />
      </div>
    </div>
  );
}

export default WhatGPT;
