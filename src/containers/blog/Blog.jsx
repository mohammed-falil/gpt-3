import React from "react";
import "./blog.css";
import Article from "../../Components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

function Blog() {
  return (
    <div className="gpt3_blog section_padding">
      <div className="gpt3_blog_heading">
        <h1 className="gradient_text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3_blog_container">
        <div className="gpt3_blog_container_group_A">
          <Article
            imgUrl={blog01}
            date="March 30,2022"
            title="GPT-3 and Open AI is the future. Let us explore hot it is?"
          />
        </div>
        <div className="gpt3_blog_container_group_B">
          <Article
            imgUrl={blog02}
            date="March 30,2022"
            title="GPT-3 and Open AI is the future. Let us explore hot it is?"
          />
          <Article
            imgUrl={blog03}
            date="March 30,2022"
            title="GPT-3 and Open AI is the future. Let us explore hot it is?"
          />
          <Article
            imgUrl={blog04}
            date="March 30,2022"
            title="GPT-3 and Open AI is the future. Let us explore hot it is?"
          />
          <Article
            imgUrl={blog05}
            date="March 30,2022"
            title="GPT-3 and Open AI is the future. Let us explore hot it is?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
