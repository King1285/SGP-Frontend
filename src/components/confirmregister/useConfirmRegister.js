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
