import React, { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) setVisible(true);
    else setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        display: visible ? "inline" : "none",
        backgroundColor: "#fff",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <BiArrowToTop size={24} color="#000" />
    </button>
  );
}

export default ScrollToTop;
