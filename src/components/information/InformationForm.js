import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";
import useInformation from "./useInformation";
import styles from "./InformationForm.module.css";

const InformationForm = () => {
  const { handleSubmit, onSubmit, register, errors } = useInformation();

  return (
    <div className={styles.container}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h4>Student Information</h4>
        <Form.Group className="mb-3" controlId="choice">
          <Form.Label>Placement or Study</Form.Label>
          <Form.Select
            {...register("choice")}
            isInvalid={!!errors.choice?.message}
          >
            <option value="placement">Placement</option>
            <option value="higher_study">Higher Study</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            {errors.choice && errors.choice.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default InformationForm;
