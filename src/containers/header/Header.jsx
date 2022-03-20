import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css"


function Header() {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header_content">
        <h1 className="gradient_text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          praesentium molestias ipsam fuga odio, cum harum magnam voluptatibus
          doloremque suscipit sint accusantium excepturi vero omnis dicta. Sed
          hic culpa doloribus?
        </p>
        <div className="gpt3_header_content_input">
          <input type="email" placeholder="Enter your email id " />
          <button type="button">GetStarted</button>
        </div>
        <div className="gpt3_content_people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3_header_image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
