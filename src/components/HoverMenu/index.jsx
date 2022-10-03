import React from "react";

export default function ({ children, elementRef, x = 100, y = 100 }) {
  const xPos = elementRef.current
    ? elementRef.current.getBoundingClientRect().x + x
    : x;
  const yPos = elementRef.current
    ? elementRef.current.getBoundingClientRect().y + window.scrollY + y
    : y;
  return (
    <div className="dropdown-options"
      style={{
        position: "absolute",
        left: xPos,
        top: yPos,
      }}
    >
      {children}
    </div>
  );
}
