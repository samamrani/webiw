// src/components/ScrollToTop.jsx
import React from "react";
import { BiArrowToTop } from "react-icons/bi"; // flèche depuis react-icons
import "../Styles/ScrollToTop.css";

function ScrollToTop() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-to-top" onClick={scrollUp}>
      <BiArrowToTop size={30} />
    </button>
  );
}

export default ScrollToTop;
