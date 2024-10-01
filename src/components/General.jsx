import { useState } from "react";
import Experience from "./Experience";
import Resume from "./Resume";

function General() {
  const [name, setName] = useState("Brian Riendeau");
  const [education, setEducation] = useState(
    "B.S in Physics from Ursinus College"
  );
  const [skills, setSkills] = useState(
    "Web Development, React, Javascript, php, Node.js, etc."
  );
  const [history, setHistory] = useState(
    "Pure Athena Media LLC, Web Developer."
  );

  const handleClearClick = (field) => {
    switch (field) {
      case "name":
        setName("");
        break;
      case "education":
        setEducation("");
        break;
      case "skills":
        setSkills("");
        break;
      case "history":
        setHistory("");
        break;
      default:
        console.error(`Invalid field: ${field}`);
    }
  };

  // const [name, setName] = useState("");
  // const [name, setName] = useState("");
  return (
    <>
      <div className="general">
        <div className="gen-block">
          <h1>Resume Builder</h1>
          <h2>Name:</h2>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button onClick={() => handleClearClick("name")}>Clear</button>
          <h2>Education:</h2>
          <input
            type="text"
            value={education}
            onChange={(event) => setEducation(event.target.value)}
          />
          <button onClick={() => handleClearClick("education")}>Clear</button>
          <h2>Skills:</h2>
          <input
            type="text"
            value={skills}
            onChange={(event) => setSkills(event.target.value)}
          />
          <button onClick={() => handleClearClick("skills")}>Clear</button>
          <h2>Work History:</h2>
          <input
            type="text"
            value={history}
            onChange={(event) => setHistory(event.target.value)}
          />
          <button onClick={() => handleClearClick("history")}>Clear</button>
        </div>
        <Resume
          name={name}
          education={education}
          skills={skills}
          history={history}
        />
        {/* <Experience />
        <Experience />
        <Experience /> */}
      </div>
    </>
  );
}

export default General;
