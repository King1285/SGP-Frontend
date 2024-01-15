import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <div className={styles.container}>
      <Form className={styles.form}>
        <h4>Create account</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Charusat Id</Form.Label>
          <Form.Control type="telephone" placeholder="Enter Your Charusat Id" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" placeholder="Enter Your Date of Birth" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Passing Year</Form.Label>
          <Form.Control type="number" placeholder="Enter Passing Year" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to={routes.login}>Already have an account?</Link>
      </Form>
    </div>
  );
};

export default RegistrationForm;
