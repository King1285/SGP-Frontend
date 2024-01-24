import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter a email address")
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
  })
  .required();

const useLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log("data", data);
    navigate(routes.information);
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
};

export default useLogin;
