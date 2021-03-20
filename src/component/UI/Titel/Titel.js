

import React from "react";


const titel = (props) => {
  const monCss = `  border border-dark  bg-primary p-2 m-2 rounded text-center text-white `;
  return <h1 className={monCss}>{props.children}</h1>;
};
export default titel;
