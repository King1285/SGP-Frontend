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
    forgot_verify: yup.string().required("Please enter a valid OTP"),
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

export default useForgotVerify;
