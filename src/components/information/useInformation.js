import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    choice: yup.string().required("Please select an option"),
  })
  .required();

const useInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      choice: "",
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

export default useInformation;
