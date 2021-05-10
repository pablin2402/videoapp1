import "./Login.css";
import { Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { size, values } from "lodash";
import { isEmailValid } from "../../utils/validation";

export default function Login(props) {
  const { setRefreshCheckLogin } = props;
  const [formData, setFormData] = useState(initialFormValue());
  const [signInLoading, setSignInLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });

    if (size(formData) !== validCount) {
      toast.warning("Completa todo los campos del formulario");
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warning("Email es invalido");
      } else {
        setSignInLoading(true);
        axios.post("http://localhost:4000/api/signin", formData).then(
          (response) => {
            console.log(response);
            console.log("caca");
            toast.warning(response.message);
            <Link to="/register">Home</Link>;
          },
          (error) => {
            console.log(error.data);
            toast.error("Error del servidor, inténtelo más tarde");
          }
        );
      }
    }
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div class="card card-signin flex-row my-5">
            <div class="card-img-left d-none d-md-flex"></div>
            <div class="card-body">
              <h5 class="card-title text-center">Login</h5>
              <br />
              <br />
              <br />
              <br />

              <form class="form-signin" onSubmit={onSubmit} onChange={onChange}>
                <div class="form-label-group">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    defaultValue={formData.email}
                  />
                  <label for="inputEmail">Email address</label>
                </div>

                <br />

                <div class="form-label-group">
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    defaultValue={formData.password}
                  />
                  <label for="inputPassword">Password</label>
                </div>

                <button
                  class="btn btn-lg text-uppercase btn-dark"
                  type="submit"
                >
                  {!signInLoading ? "Login" : <Spinner animation="border" />}{" "}
                </button>
                <br />
                <br />
                <Link to="/register">
                  <p class="text-muted font-weight-bold">
                    Don't you have an account?{" "}
                    <a href="#" class="text-primary ml-2">
                      Register
                    </a>
                  </p>
                </Link>

                <hr class="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function initialFormValue() {
  return {
    email: "",
    password: "",
  };
}
