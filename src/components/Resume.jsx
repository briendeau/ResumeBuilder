/* eslint-disable react/prop-types */
import { useState } from "react";

function Resume({ name, education, skills, history }) {
  return (
    <>
      <div className="resume">
        <h1>{name}</h1>
        <div id="education">
          <span>Education:</span> <br />
          {education}
        </div>
        <div id="skills">
          <span>Skills:</span> <br />
          {skills}
        </div>
        <div id="history">
          <span>Work History:</span> <br />
          {history}
        </div>
      </div>
    </>
  );
}

export default Resume;
