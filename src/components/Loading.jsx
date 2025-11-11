import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <div
        className="spinner-border text-primary"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      >
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
}

export default Loading;
