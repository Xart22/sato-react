import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { authenticate, isAuth } from "../helper/auth";
import axios from "axios";
import { Redirect } from "react-router-dom";
import sato from "../assets/img/sato.png";
import { Container, Form, Checkbox, Button } from "semantic-ui-react";
import imgSato from "../assets/img/slider/2.jpeg";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    textChange: "Daftar",
  });

  const { username, email, password1, password2, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password1) {
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .post(`http://localhost:5000/api/auth/login`, {
          username,
          email,
          password: password1,
          passwordVertif: password2,
        })
        .then((res) => {
          setFormData({
            ...formData,
            username: "",
            email: "",
            password1: "",
            password2: "",
            textChange: "Submitted",
          });

          toast.success(res.data.message);
        })
        .catch((err) => {
          setFormData({
            ...formData,
            username: "",
            email: "",
            password1: "",
            password2: "",
            textChange: "Daftar",
          });
          console.log(err.response);
          toast.error(err.response);
        });
    } else {
      toast.error("Please fill all fields");
    }
  };

  return (
    <>
      {isAuth() ? <Redirect to="/" /> : null}
      <div className="headerNav">
        <Container>
          <div className="item-header-2 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
              <a href="/">
                <img className="img-sato mr-3" src={sato} alt="Sato" />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className="container-body d-flex justify-content-center">
        <img className="img-sato mr-3" src={imgSato} alt="Sato" />
        <div className="container-form">
          <ToastContainer />
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Username / Email </label>
              <input
                placeholder="Username"
                onChange={handleChange("username")}
                value={username}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                onChange={handleChange("password1")}
                value={password1}
                type="password"
              />
            </Form.Field>
            <Button type="submit">
              <span className="ml-3">{textChange}</span>
            </Button>
          </Form>
          <span>
            <br />
            Belum punya akun ? <a href="/daftar">Daftar disini</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
