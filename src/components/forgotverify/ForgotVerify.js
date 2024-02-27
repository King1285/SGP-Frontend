import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { routes } from "../../constants/routes";
import { Link } from "react-router-dom";
import styles from "./ForgotVerify.module.css";
import useForgotVerify from "./useForgotVerify";

const ForgotVerify = () => {
  const { handleSubmit, onSubmit, register, errors } = useForgotVerify();
  return (
    <div className={styles.container}>
      <div className={styles.ForgotVerify}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Verify OTP</h4>
          <Form.Group className="mb-3" controlId="forgot_verify">
            {/* <Form.Label>Verify OTP</Form.Label> */}
            <Form.Control
              placeholder="Enter OTP"
              {...register("forgot_verify")}
              isInvalid={!!errors.forgot_verify?.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.forgot_verify && errors.forgot_verify.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: "100%" }}>
            Verify
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default ForgotVerify;
