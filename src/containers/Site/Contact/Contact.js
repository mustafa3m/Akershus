import React, { Component } from "react";
import Titel from '../../../component/UI/Titel/Titel';
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { Route } from "react-router";
import ContactForm from "./ContactForm/ContactForm";



class Contact extends Component {
  render() {
    return (
      <>
        <div>
          <Titel>Contact us</Titel>
          <h2>Contact us</h2>
          <h2>Adress : </h2>
          <h2>Telefon </h2>
          4563217896
        </div>
        <h2>You prefer to write to us at ?</h2>
        <LinkContainer to={this.props.match.path + "/form"}>
          <Button variant="primary" >Contact form</Button>
        </LinkContainer>
        <Route
          path={this.props.match.path + "/form"}
          render={() => <ContactForm />}
        />
      </>
    );
  }
}

export default Contact; 