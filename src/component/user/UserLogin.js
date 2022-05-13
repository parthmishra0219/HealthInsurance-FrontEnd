import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import visibility from './visibility.png'
import visibility1 from './visibility1.png'

function Login() {
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
    //Validation login form
    let errors = {};

    if (!loginForm.userName) {
      errors["userNameErr"] = "userName is Required";
    }

    if (!loginForm.password) {
      errors["passwordeErr"] = "Password is Required";
    }
    setFormErrors(errors);
    const noErrors = Object.keys(errors).length === 0;

    //if no errors call the login api
    if (noErrors) {
      let payload = {
        userName: loginForm.userName,
        password: loginForm.password,
      };
      axios.post("http://localhost:8090/health/policyuser/login", payload).then((resp) => {
          console.log(resp.data);
          alert("Welcome In Your Home");
          let user = {
            userId: resp.data.userId,
            userName: resp.data.userName,
            password: resp.data.password,
          };
          localStorage.setItem("myUser", JSON.stringify(user));
          
          navigate("/user/home");
        })
        .catch((error) => {
          console.log(error.responce);
          alert("Login Faild");
        });
    }
    event.preventDefault();
  };
  return (
    <div class="row h-100 justify-content-center align-items-center">
      <div className=" col-lg-5">
        <div className="form-group">
          <h1 class="text-center">
            User login
          </h1>
          <br />
          <br />
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter userName"
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
        <div >
          <label htmlFor="password">Password</label>
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative', cursor: 'pointer' }} >
          <input
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter password"
            className="form-control"
            data-toggle="password"
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
          {formErrors.passwordeErr && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {formErrors.passwordeErr}
            </div>
          )}
        </div>
        <br />
        

        <div>
          <button onClick={handleSubmit} className="btn btn-primary">
            {" "}
            Login{" "}
          </button>
        </div>
      </div>
    </div>
    
  );
}
export default Login;
