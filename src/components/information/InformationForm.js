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
          <Form.Label>Placement or Higher study</Form.Label>
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

        <Form.Group className="mb-3" controlId="cgpa">
          <Form.Label>CGPA</Form.Label>
          <Form.Control
            placeholder="Enter your CGPA"
            {...register("cgpa")}
            isInvalid={!!errors.cgpa?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.cgpa && errors.cgpa.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="personal_email">
          <Form.Label>Personal email</Form.Label>
          <Form.Control
            placeholder="Enter your email address"
            {...register("personal_email")}
            isInvalid={!!errors.personal_email?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.personal_email && errors.personal_email.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            placeholder="Enter your age"
            {...register("age")}
            isInvalid={!!errors.age?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age && errors.age.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone_no">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            placeholder="Enter your phone number"
            {...register("phone_no")}
            isInvalid={!!errors.phone_no?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone_no && errors.phone_no.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="linkedin">
          <Form.Label>Linkedin Link</Form.Label>
          <Form.Control
            placeholder="Enter your linkedin link"
            {...register("linkedin")}
            isInvalid={!!errors.linkedin?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.linkedin && errors.linkedin.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="github">
          <Form.Label>Github link</Form.Label>
          <Form.Control
            placeholder="Enter your github link"
            {...register("github")}
            isInvalid={!!errors.github?.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.github && errors.github.message}
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
