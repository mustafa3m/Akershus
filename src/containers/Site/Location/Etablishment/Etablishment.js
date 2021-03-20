import React from 'react';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Hours from './Hours/Hours';



const etablishment = (props) => (
  <div>
    <Card>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>
          Phone : {props.telephone} <br />
          {props.mail && ` mail : ${props.mail} `} <br />
        </Card.Title>
        <Card.Text>
          <strong>Adresses : </strong> <br />
          {props.adresses[0].lignes[0]} <br />
          {props.adresses[0].codePostal} - {props.adresses[0].commune} <br />
          <strong>Opening time : </strong> <br />
          {props.horaires && <Hours horaires={props.horaires} />} <br />
          {props.url && (
            <a href={props.url} className="btn btn-info" target="_blank">
              Visit the website
            </a>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default etablishment;