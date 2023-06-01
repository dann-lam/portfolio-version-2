import React from "react";
import "./styles/style.css";
import resumePDF from "../../assets/images/DanielLam.pdf";
// import Resume from "./pages/Resume";
export default function Resume() {
  return (
    <div>
      <a href={resumePDF}> My Resume</a>
    </div>
  );
}
