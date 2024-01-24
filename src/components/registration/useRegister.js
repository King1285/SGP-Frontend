import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid charusat email address")
      .required("Please enter a charusat email address")
      .matches(
        "^(?=.*ce)(?=.*charusat)(?=.*in).*$",
        "Please enter a charusat email address"
      ),
    password: yup
      .string()
      .required("Please enter a password")
      .matches(
        "^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$",
        "Password must have at least 8 characters and one special character."
      ),
    first_name: yup.string().required("Please enter a first name"),
    last_name: yup.string().required("Please enter a last name"),
    dob: yup.string().required("Please enter a date of birth"),
    passing_year: yup
      .string()
      .required("Please enter a passing year")
      .min(4, "Please enter minimum 4 characters")
      .max(4, "Please enter maximum 4 characters"),
    charusat_id: yup
      .string()
      .required("Please enter a charusat id")
      .matches("^(?=.*ce).*$", "Please enter a valid charusat id"),
  })
  .required();

const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      charusat_id: "",
      dob: "",
      passing_year: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
};

export default useRegister;
