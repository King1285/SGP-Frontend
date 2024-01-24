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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="login" element={<LoginForm />} />
      <Route index path="register" element={<RegistrationForm />} />
      <Route path="information" element={<InformationForm />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
