import React from "react";

const boutton = (props) => {
  const btnCss = `btn ${props.typeBtn} ${props.typeCss} `;
  return (
    <button
      className={btnCss}
      onClick={props.clic}
      style={props.isSelected ? { opacity: 1 } : { opacity: 0.5 }}
    >
      {props.children}
    </button>
  );
};

export default boutton;
