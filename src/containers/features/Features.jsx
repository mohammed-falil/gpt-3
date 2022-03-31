import React from "react";
import { Feature } from "../../Components";
import "./features.css"
function Features() {
  const featuresData = [
    {
      title: "Improving and distrusts instantly",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae maxime labore assumenda, itaque nihil ipsam.",
    },
    {
      title: "Become the tended active",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae maxime labore assumenda, itaque nihil ipsam.",
    },
    {
      title: "Message or am nothing",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae maxime labore assumenda, itaque nihil ipsam.",
    },

    {
      title: "Really boy low country",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae maxime labore assumenda, itaque nihil ipsam.",
    },
  ];

  return (
    <div className="gpt3_features section_padding" id="features">
      <div className="gpt3_features_heading">
        <h1 className="gradient_text">
          The Future is Now and You Just Need To Realize it. Step into Future
          Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3_features_container">
        {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Features;
