import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";
function Footer() {
  return (
    <div className="gpt3_footer section_padding">
      <div className="gpt3_footer_heading">
        <h1 className="gradient_text">
          Do you want to step to the future before others
        </h1>
      </div>
      <div className="gpt3_footer_btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3_footer_links">
        <div className="gpt3_footer_links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            repellat.
          </p>
        </div>
        <div className="gpt3_footer_links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer_links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3_footer_links_div">
          <h4>Get in touch</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>024-45689078</p>
          <p>info@mailme.com</p>
        </div>
      </div>
      <div className="gpt3_footer_copyright">
        <p>© 2022 GPT-3. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
