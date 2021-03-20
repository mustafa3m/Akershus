import React from "react";

const horaires = (props) => {
  let content = props.horaires.map((horaire, index) => {
    return (
      <>
        <li key={index}>
          
          - Du {horaire.du} au {horaire.au} - De {horaire.heures[0].de} à
          {horaire.heures[0].a}
        </li>
      </>
    );
  });

  return (
    <>
      <ul >{content}</ul>
    </>
  );
};

export default horaires;
