import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { withFormik } from "formik";
import * as yup from 'yup';

const contactForm = (props) => (
  <div>
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name </Form.Label>
        <Badge variant="warning"> (min 5 characters) </Badge>
        <Form.Control
          type="text"
          placeholder="Your name"
          name="name"
          onChange={props.handleChange}
          value={props.values.name}
          onBlur={props.handleBlur}
        />
        {/* si on le touche le nom et si il y erreur alors on affiche l erreur */}
        {props.touched.name && props.errors.name && (
          <span style={{ color: "red" }}>{props.errors.name}</span>
        )}
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email </Form.Label>

        <Form.Control
          type="email"
          placeholder="Your email"
          name="email"
          onChange={props.handleChange}
          value={props.values.email}
          onBlur={props.handleBlur}
        />
        {props.touched.email && props.errors.email && (
          <span style={{ color: "red" }}>{props.errors.email}</span>
        )}
      </Form.Group>
      <Form.Group controlId="textarea" name="message">
        <Form.Label>Textarea</Form.Label>
        <Badge variant="warning"> (min 100 and max 200 characters) </Badge>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          onChange={props.handleChange}
          value={props.values.message}
          onBlur={props.handleBlur}
        />
        {props.touched.message && props.errors.message && (
          <span style={{ color: "red" }}>{props.errors.message}</span>
        )}
      </Form.Group>

      <Button variant="primary" onClick={props.handleSubmit}>
        validate
      </Button>
    </Form>
  </div>
);


 export default withFormik({
   mapPropsToValues: () => ({
     name: "",
     email: "",
     message: "",
   }),
   validationSchema: yup.object().shape({
     name: yup.string()
       .min(5, "The name must have 5 characters")
       .required("Name is required !"),
     email: yup.string()
       .email("The email does not have the correct format")
       .required("Email is required !"),
     message: yup.string()
       .min(100, "The message must be more than 100 characters")
       .max(200, "The message must be more than 200 characters")
       .required("The message is required!"),
   }),
   handleSubmit: (values, { props }) => {
     alert("Message sent");
   },
 })(contactForm);
 