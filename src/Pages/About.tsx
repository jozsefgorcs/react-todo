import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <p> Created by Józsi</p>
      <Link to="/todo">Main page</Link>
    </div>
  );
}

export default About;
