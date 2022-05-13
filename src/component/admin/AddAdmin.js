import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
// import {Link} from 'react-router-dom';

function AddAdmin() {
    const [admins,setAdmins] = useState({
        firstName: "",
        lastName:"",
        userName:"",
        password: "",
        emailId: "",
        phoneNumber: "",
    })
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        setAdmins( admins => ({...admins,[event.target.name] : event.target.value}));
    }
    const handleSubmit = () => {
          //validate form
          let errors = {};
          if (!admins.firstName) {
              errors['firstNameErr'] = "FirstName is required";
          }
          if (!admins.lastName) {
              errors['lastNameErr'] = "LastName is required";
          }
           if (!admins.userName) {
              errors['userNameErr'] = "UserName is required";
          }
          if (!admins.password) {
              errors['passwordErr'] = "Password is required";
          }
          if (!admins.emailId) {
              errors['emailIdErr'] = "EmailId is required";
          }
          if (!admins.phoneNumber) {
            errors['phoneNumberErr'] = "PhoneNumber is required"
        }
          setFormErrors(errors);
          const noErrors = Object.keys(errors).length === 0;
          if (noErrors) {
        const palyload = {  
            firstName:admins.firstName,
            lastName:admins.lastName,
            userName:admins.userName,
            password:admins.password,
            emailId:admins.emailId,
            phoneNumber:admins.phoneNumber,      
           
        }
        axios.post("http://localhost:8090/health/admins/add", palyload)
        .then(resp=>alert("admins is saved with id:"+resp.data.adminId));
        navigate(-1);
    }
}
    return (
        <div className='text-center '>
            {/* <div className='form-group'> */}
            <h1  className=' my-5'>Register Admin</h1>
            
            <div>
                <label>FirstName :- </label>
                <input type="text" name="firstName" value={admins.firstName} onChange={handleChange} />
                {
                    formErrors.firstNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.firstNameErr}</div>
                }
            </div>
            <div>
                <label>LastName :-</label>
                <input type="text" name="lastName" value={admins.lastName} onChange={handleChange} />
                {
                    formErrors.lastNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.lastNameErr}</div>
                }
            </div>
            <div>
                <label>UserName :-</label>
                <input type="text" name="userName" value={admins.userName} onChange={handleChange} />
                {
                    formErrors.userNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.userNameErr}</div>
                }
            </div>
            <div>
                <label>Password :-</label>
                <input type="text" name="password" value={admins.password} onChange={handleChange} />
                {
                    formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                }
            </div>
            <div>
                <label>EmailId :-</label>
                <input type="text" name="emailId" value={admins.emailId} onChange={handleChange} />
                {
                    formErrors.emailIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.emailIdErr}</div>
                }
            </div>
            <div>
                <label>PhoneNumber :-</label>
                <input type="text" name="phoneNumber" value={admins.phoneNumber} onChange={handleChange} />
                {
                    formErrors.phoneNumberErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.phoneNumberErr}</div>
                }
            </div>
            <div>
                <button  onClick={handleSubmit} className="btn btn-primary" >Sing Up</button>
                </div>
            </div>
        // </div>
    )
}

export default AddAdmin;