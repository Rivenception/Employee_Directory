import React from "react";
import "./style.css";

function Table({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Employee Image"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
}

export default Table;