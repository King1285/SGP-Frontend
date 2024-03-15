import React from "react";
import { useState } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { routes } from "../../constants/routes";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

const Profile = ({ data, imageContainerDisplay }) => {
  return (
    <div className="profile-page">
      <div className="header">
        <Form>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
