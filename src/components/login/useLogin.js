import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import axios from "axios";
import { LOGIN } from "../../constants/api";

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
        "Password must have at least 8 characters and one special character"
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
    axios
      .post(LOGIN, data)
      .then((res) => {
        console.log(res.status, res.data);
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data?.data));
          navigate(routes.information);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 404) {
          // Display specific error message based on the response data
          if (err.response.data && err.response.data.message) {
            alert(err.response.data.message);
          } else {
            alert("User not Found");
          }
        } else if (err.response && err.response.status === 400) {
          // Display specific error message based on the response data
          if (err.response.data && err.response.data.message) {
            alert(err.response.data.message);
          } else {
            alert("Please fill all the fields");
          }
        } else if (err.response && err.response.status === 401) {
          // Display specific error message based on the response data
          if (err.response.data && err.response.data.message) {
            alert(err.response.data.message);
          } else {
            alert("Invalid password");
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

export default useLogin;
