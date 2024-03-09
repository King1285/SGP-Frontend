import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import axios from "axios";
import { VERIFY_OTP } from "../../constants/api";

const schema = yup
  .object({
    confirm_register: yup.string().required("Please enter a valid OTP"),
  })
  .required();

const useConfirmRegister = () => {
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
      confirm_register: "",
    },
  });
  const onSubmit = (data) => {
    console.log("data", data);
    const payload = {
      email: state?.email,
      otp: data.otp,
    };
    axios
      .post(VERIFY_OTP, payload)
      .then((res) => {
        console.log(res.status, res.data);
        if (res.status === 200) {
          navigate(routes.login);
        }
      })
      .catch((err) => {
        console.log(err);

        if (err.response && err.response.status === 401) {
          if (err.response.data && err.response.data.message) {
            alert(err.response.data.message);
          } else {
            alert("User with email address or charusat id is already exists.");
          }
        } else {
          // Handle other types of errors (e.g., network issues)
          alert("An error occurred. Please try again later.");
        }
      });
    // navigate(routes.confirmregister);
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
};

export default useConfirmRegister;
