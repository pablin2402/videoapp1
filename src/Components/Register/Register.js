import { Form, Button, Spinner } from "react-bootstrap";
import "./Register.css";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { validCount, isEmailValid } from "../../utils/validation";
export default function Register(props) {
  //SAVE FILES FOR SEND TO BACK-END
  const [formData, setFormData] = useState(initialFormValue());
  const { setShowModal } = props;
  const [signUpLoading, setSignUpLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(size(formData));
    let validCount = 0;

    values(formData).some((value) => {
      value && validCount++;
      return null;
    });
    console.log(validCount);

    if (validCount !== 4) {
      toast.warning("Debe llenar los formularios porfavor");
    } else {
      setSignUpLoading(true);
      axios.post("http://localhost:4000/api/user", formData).then(
        (response) => {
          console.log(response);
          toast.warning("Registrado correctamente");
        },
        (error) => {
          console.log(error.data);
          toast.error("Error del servidor, inténtelo más tarde");
        }
      );
      //   }
    }
  };
  const onChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div class="card card-signin flex-row my-5">
            <div class="card-img-left d-none d-md-flex"></div>
            <div class="card-body">
              <h5 class="card-title text-center">Register</h5>
              <br />
              <br />
              <br />
              <br />

              <form class="form-signin" onSubmit={onSubmit} onChange={onChange}>
                <div class="form-label-group">
                  <input defaultValue={formData.name} type="text" name="name" />
                  <label for="inputName">Name</label>
                </div>

                <div class="form-label-group">
                  <input
                    type="text"
                    name="lastName"
                    defaultValue={formData.lastName}
                  />
                  <label for="inputLastname">Last Name</label>
                </div>

                <div class="form-label-group">
                  <input
                    name="email"
                    type="email"
                    defaultValue={formData.email}
                  />
                  <label for="inputEmail">Email address</label>
                </div>

                <div class="form-label-group">
                  <input
                    type="password"
                    name="password"
                    defaultValue={formData.password}
                  />
                  <label for="inputPassword">Password</label>
                </div>

                <div class="form-label-group">
                  <input
                    id="passwordConfirmation"
                    type="password"
                    name="passwordConfirmation"
                  />
                  <label for="inputPasswordRepeat">Repeat Password</label>
                </div>

                <div class="form-group col-lg-12 mx-auto mb-0">
                  <Button
                    variant="primary"
                    type="submit"
                    class="btn btn-lg text-uppercase btn-dark"
                  >
                    {!signUpLoading ? (
                      "Registrarse"
                    ) : (
                      <Spinner animation="border" />
                    )}
                  </Button>
                </div>

                <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div class="border-bottom w-100 ml-5"></div>
                  <span class="px-3 small text-muted font-weight-bold ">
                    OR
                  </span>
                  <div class="border-bottom w-100 mr-5"></div>
                </div>
                <Link to="/login">
                  <div class="text-center w-100">
                    <p class="text-muted font-weight-bold">
                      Already Registered?
                      <a href="#" class="text-primary ml-2">
                        Login
                      </a>
                    </p>
                  </div>
                </Link>
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
    name: "",
    lastName: "",
    email: "",
    password: "",
  };
}
