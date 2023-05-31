import React from "react";
import "./styles/style.css";
import imageOfMe from "../../assets/images/picofme.png";
export default function About() {
  return (
    <div>
      <h1>Hi there! My name is Daniel</h1>
      <section id="about_me_container">
        <p id="about_me_text_desc">
          I'm from the beautiful state of Rhode Island. I studied film in
          college and have always had a love for storytelling, whether it be
          through movies or books, websites, or programs. In my free time, you
          can often find me with my nose buried in a good novel. One thing that
          really drives me in life is problem-solving. I love tackling
          challenges and finding creative solutions to complex issues. I believe
          that the best way to help the world is to use our skills and passions
          to make a positive impact, and that's what I strive to do every day.
          If there's one thing that's unique about me, it's probably my ability
          to see the big picture while also paying attention to the details. I
          think this skill has helped me in both my personal and professional
          life. Thank you for taking the time to get to know me a little better.
          I look forward to connecting with you!
        </p>
        <div>
          <img
            src={imageOfMe}
            alt="Yours truly."
            id="about_me_image"
            width="150"
            height="150"
          ></img>
        </div>
      </section>
    </div>
  );
}
