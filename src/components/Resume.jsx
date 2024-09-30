import { useState } from "react";

function Resume({ name, education, skills, history }) {
  return (
    <>
      <div className="resume">
        <h1>{name}</h1>
        <div id="education">
          Education: <br />
          {education}
        </div>
        <div id="skills">
          Skills: <br />
          {skills}
        </div>
        <div id="history">
          Work History: <br />
          {history}
        </div>
      </div>
    </>
  );
}

export default Resume;
