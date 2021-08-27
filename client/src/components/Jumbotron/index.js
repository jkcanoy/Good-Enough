import React from "react";

function Jumbotron({ children }) {
  return (
    <div className="d-flex flex-column align-items-center" 
      style={{ height: 400, clear: "both", textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
