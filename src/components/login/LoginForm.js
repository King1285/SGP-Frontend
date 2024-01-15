import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { routes } from "../../constants/routes";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to={routes.register}>Create an account</Link>
      </Form>
    </div>
  );
};

export default LoginForm;
