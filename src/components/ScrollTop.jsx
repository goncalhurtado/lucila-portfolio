import React from "react";

const ScrollTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={handleClick}
      className="text-center"
      style={{ cursor: "pointer" }}
    >
      <h5>Scroll to Top</h5>
    </div>
  );
};

export default ScrollTop;
