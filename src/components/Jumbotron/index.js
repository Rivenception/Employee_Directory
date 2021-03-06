import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Employee Directory</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://randomuser.me/">
        Powered by Random User API
      </a>
    </div>
  );
}

export default Jumbotron;
