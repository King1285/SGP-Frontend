import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import axios from "axios";
import { FORGOT_VERIFY_OTP } from "../../constants/api";

const schema = yup
  .object({
    otp: yup.string().required("Please enter a valid OTP"),
  })
  .required();

const useForgotVerify = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      forgot_verify: "",
    },
  });
  const onSubmit = (data) => {
    console.log("data", data);
    const payload = {
      email: state?.email,
      otp: data.otp,
    };
    console.log(data.otp);
    console.log(payload);
    axios
      .post(FORGOT_VERIFY_OTP, payload)
      .then((res) => {
        console.log(res.status, res.data);
        if (res.status === 200) {
          navigate(routes.resetpassword, {
            state: {
              email: state?.email,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);

        if (err.response && err.response.status === 401) {
          if (err.response.data && err.response.data.message) {
            alert(err.response.data.message);
          } else {
            alert("Invalid OTP");
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

export default useForgotVerify;
