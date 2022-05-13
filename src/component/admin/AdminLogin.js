import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import visibility from './visibility.png'
import visibility1 from './visibility1.png'

function AdminLogin() {
  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    setLoginForm((loginForm) => ({
      ...loginForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    //validation login form
    let errors = {};

    if (!loginForm.userName) {
      errors["userNameErr"] = "userName is required";
    }
    if (!loginForm.password) {
      errors["passwordErr"] = "password is required";
    }
    setFormErrors(errors);

    const noErrors = Object.keys(errors).length === 0;
    // if no error call the login api
    if (noErrors) {
      let payload = {
        userName: loginForm.userName,
        password: loginForm.password,
      };
      axios
        .post("http://localhost:8090/health/admins/login", payload)
        .then((resp) => {
          console.log(resp.data);
          alert("Welcome " + resp.data.firstName);

          let admin = {
            adminId: resp.data.adminId,
            customerId: resp.data.userName,
            password: resp.data.password,
          };
          localStorage.setItem("myAdmin", JSON.stringify(admin));
          navigate("/admin/home");
        })
        .catch((error) => {
          console.log(error.response);
          alert("login failed");
        });
    }
    event.preventDefault();
  };

  return (
    <div className="row h-100 justify-content-center align-items-center ">
      <div className="col-8 col-md-8 col-lg-4 ">
        <div className="form-group ">
          <br />
          <br />
          <h1 className="row h-100 justify-content-center align-items-center">
            Admin Login
          </h1>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="username"
            placeholder="Enter Username"
            className="form-control"
            value={loginForm.userName}
            onChange={handleChange}
          />
          {formErrors.userNameErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.userNameErr}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative', cursor: 'pointer' }} >
          <input
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter password"
            className="form-control"
            value={loginForm.password}
            onChange={handleChange}
          />
          <div style={{ position: 'absolute', right: '10px' }} onClick={() => setShowPass(val => !val)} >
                            {
                                showPass
                                ? <img src={visibility} style={{ width: '25px', height: '25px' }} />
                                : <img src={visibility1} style={{ width: '25px', height: '25px' }} />
                            } 

                        </div>
                        </div>
          <Form.Text className="text-muted">
            {" "}
            We'll never share your Password with anyone else.{" "}
          </Form.Text>
          {formErrors.passwordErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.passwordErr}
            </div>
          )}
        </div>
        <div>
          <button onClick={handleSubmit} className="btn btn-primary col-3">
            Login
          </button>
          &nbsp;
          &nbsp; &nbsp;
          <button className=" btn btn-outline-primary col-3 " > <Link to={`/admins/add`}>Sign Up</Link></button>
        </div>
        <br/>
        
      </div>
    </div>
  );
}
export default AdminLogin;
