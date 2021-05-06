import "./Login.css";
import { Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

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
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email address"
                    defaultValue={formData.email}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>

                  <Form.Control
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    defaultValue={formData.password}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {!signInLoading ? (
                    "Iniciar sesión"
                  ) : (
                    <Spinner animation="border" />
                  )}
                </Button>
              </Form>
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
