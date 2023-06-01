import React from "react";
import "./styles/style.css";
import imageOfMe from "../../assets/images/picofme.png";
export default function Home() {
  return (
    <div>
      <h1> Hello, I am Daniel </h1>
      <section id="about_me_container">
        <div>
          <img
            src={imageOfMe}
            alt="Yours truly."
            id="about_me_image"
            width="150"
            height="150"
          ></img>
        </div>
        <p id="about_me_text_desc">Web Developer | Animator</p>
      </section>
    </div>
  );
}
