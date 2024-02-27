import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { routes } from "../../constants/routes";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";
import useLogin from "./useLogin";

const LoginForm = () => {
  const { handleSubmit, onSubmit, register, errors } = useLogin();
  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>LOGIN</h4>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label classname="title">Email</Form.Label>
            <Form.Control
              placeholder="22ce004@charusat.edu.in"
              {...register("email")}
              isInvalid={!!errors.email?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email && errors.email.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
              isInvalid={!!errors.password?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password && errors.password.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: "100%" }}>
            Submit
          </Button>
          <Link className={styles.createAccountLink} to={routes.register}>
            <div className={styles.register}>Create an Account</div>
          </Link>
          <Link className={styles.forgotpassword} to={routes.forgotpassword}>
            <div className={styles.forgotpassword}>Forgot password</div>
          </Link>

          <br />
        </Form>
      </div>
    </div>
  );
};
export default LoginForm;
