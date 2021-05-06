import React from "react";
import Button from "react-bootstrap/Button";
import "./Register.css";
export default function Register(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Register</h5>
              <form class="form-signin">
                <div class="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Name"
                    required
                    autofocus
                  />
                  <label for="inputEmail">Name</label>
                </div>
                <div class="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Last Name"
                    required
                    autofocus
                  />
                  <label for="inputEmail">Last Name</label>
                </div>
                <div class="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    required
                    autofocus
                  />
                  <label for="inputEmail">Email address</label>
                </div>

                <div class="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                  <label for="inputPassword">Password</label>
                </div>

                <Button
                  variant="btn-pablo btn-block text-uppercase"
                  type="submit"
                  size="lg"
                  style={{ background: "#6e7ee0" }}
                >
                  Register
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
