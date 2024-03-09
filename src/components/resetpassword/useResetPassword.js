import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import axios from "axios";
import { FORGOT_PASSWORD } from "../../constants/api";

const schema = yup
  .object({
    new_password: yup
      .string()
      .required("Please enter a password")
      .matches(
        "^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$",
        "Password must have at least 8 characters and one special character."
      ),
    confirm_password: yup
      .string()
      .required("Please reconfirm your password")
      .oneOf([yup.ref("new_password"), null], "Passwords must match"),
  })
  .required();

const useResetPassword = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // const { email } = state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });
  const onSubmit = (data) => {
    console.log("data", data);
    const payload = {
      newPassword: data.new_password,
      confirmPassword: data.confirm_password,
    };
    axios
      .post(FORGOT_PASSWORD, payload)
      .then((res) => {
        console.log(res.status, res.data);
        if (res.status === 200) {
          navigate(routes.login);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          if (err.response.data && err.response.data.message) {
            alert(err.response.data.message);
          } else {
            alert("User not Found");
          }
        } else {
          // Handle other types of errors (e.g., network issues)
          alert("An error occurred. Please try again later.");
        }
      });
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
};

export default useResetPassword;
