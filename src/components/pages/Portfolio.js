import React from "react";
import weatherForecastPic from "../../assets/images/better_demo.gif";
import streemyPic from "../../assets/images/togglefavorite.gif";
import travlrPic from "../../assets/images/travlr.jpg";
import employeePic from "../../assets/images/employee_db.gif";
// Yeah yeah, I know we're supposed to be dynamically generating these using components. Listen, this isn't even the portfolio's final form.
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div id="project_container">
        <a href="https://github.com/dann-lam/streemy">
          <img
            src={streemyPic}
            alt="A Streamer Consolidator"
            class="project_image"
          />
        </a>
        <a href="https://github.com/dann-lam/04-08-2023-Weather-Dashboard">
          <img
            src={weatherForecastPic}
            alt="Weather Dashboard"
            class="project_image"
          />
        </a>
        <a href="https://github.com/dann-lam/04-08-2023-travlr">
          <img
            src={travlrPic}
            alt="travlr - a travel itinerary app"
            class="project_image"
          />
        </a>
        <a href="https://github.com/dann-lam/04-29-2023-employee-database/tree/main">
          <img
            src={employeePic}
            alt="Employee_Database"
            class="project_image"
          />
        </a>
        <a href="https://dann-lam.github.io/3-20-2023-HTMLCSS/">
          <img
            src="./assets/images/horiseon_website.jpg"
            alt="Horiseon Project"
            class="project_image"
          />
        </a>
      </div>
    </div>
  );
}
