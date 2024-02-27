import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginForm from "./components/login/LoginForm";

import RegistrationForm from "./components/registration/RegistrationForm";
import Root from "./Root";
import InformationForm from "./components/information/InformationForm";
import ConfirmRegistration from "./components/confirmregister/ConfirmRegistration";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";
import ForgotVerify from "./components/forgotverify/ForgotVerify";
import ResetPassword from "./components/resetpassword/ResetPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route index path="/" element={<LoginForm />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="forgotverify" element={<ForgotVerify />} />
      <Route path="register" element={<RegistrationForm />} />
      <Route path="confirmregister" element={<ConfirmRegistration />} />
      <Route path="information" element={<InformationForm />} />
      <Route path="resetpassword" element={<ResetPassword />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
