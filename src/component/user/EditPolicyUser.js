import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';

function EditPolicyUser() {

    const [policyUser, setPolicyUser] = useState({
        name:"",
        userId: "",
        userName: "",
        password: "",
        phoneNo: "",
        emailId: "",
        aadhaarNo: "",
        dob: ""
    });

    const [formErrors, setFormErrors] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    const fetchPolicyUserById = () => {
        axios.get("http://localhost:8090/health/policyuser/get/" + id).then(resp => setPolicyUser(resp.data))
    }

    useEffect(fetchPolicyUserById, []);

    const handleChange = (event) => {
        setPolicyUser(policyUser => ({ ...policyUser, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {

        //validate form

        let errors = {};
        if (!policyUser.name) {
            errors['nameErr'] = "User Name is required";
        }

        if (!policyUser.userId) {
            errors['userIdErr'] = "User Id is required";
        }

        if (!policyUser.userName) {
            errors['userNameErr'] = "User Name is required";
        }

        if (!policyUser.password) {
            errors['passwordErr'] = "Password Cost is required";
        }
        if (!policyUser.phoneNo) {
            errors['phoneNoErr'] = "Phone Number is required"
        }
        if (!policyUser.emailId) {
            errors['emailIdErr'] = "EmailId is required";
        }
        if (!policyUser.aadhaarNo) {
            errors['aadhaarNoErr'] = "Aadhaae Number is required";
        }
        if (!policyUser.dob) {
            errors['dobErr'] = "dob is required";
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const palyload = {
                name: policyUser.name,
                userId: policyUser.userId,
                userName: policyUser.userName,
                password: policyUser.password,
                phoneNo: policyUser.phoneNo,
                emailId: policyUser.emailId,
                aadhaarNo: policyUser.aadhaarNo,
                dob: policyUser.dob

            }
            axios.put("http://localhost:8090/health/policyuser/update", palyload)
                .then(resp => alert("policy updated successfully:"));
            navigate(-1);
        }
    }


    return (
        <div className='text-center'>
            <br/><br/>
            <div>
                <label>User Name :-</label>
                <input type="text" name="name" value={policyUser.name} onChange={handleChange} />
                {
                    formErrors.nameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.nameErr}</div>
                }
            </div>
            <div>
                <label>UserId :-</label>
                <input type="text" name="userId" value={policyUser.userId} onChange={handleChange} />
                {
                    formErrors.userIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.userIdErr}</div>
                }
            </div>
            <div>
                <label>UserName :-</label>
                <input type="text" name="userName" value={policyUser.userName} onChange={handleChange} />
                {
                    formErrors.userNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.userNameErr}</div>
                }
            </div>
            <div>
                <label>Password :-</label>
                <input type="text" name="password" value={policyUser.password} onChange={handleChange} />
                {
                    formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                }
            </div>
            <div>
                <label>PhoneNo :-</label>
                <input type="number" name="phoneNo" value={policyUser.phoneNo} onChange={handleChange} />
                {
                    formErrors.phoneNoErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.phoneNoErr}</div>
                }
            </div>
            <div>
                <label>EmailId :-</label>
                <input type="text" name="emailId" value={policyUser.emailId} onChange={handleChange} />
                {
                    formErrors.emailIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.emailIdErr}</div>
                }
            </div>
            <div>
                <label>AadhaarNo ;-</label>
                <input type="number" name="aadhaarNo" value={policyUser.aadhaarNo} onChange={handleChange} />
                {
                    formErrors.aadhaarNoErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.aadhaarNoErr}</div>
                }
            </div>
            <div>
                <label>DOB :-</label>
                <input type="date" name="dob" value={policyUser.dob} onChange={handleChange} />
                {
                    formErrors.dobErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.dobErr}</div>
                }
            </div>
            <br/>

            <div>

                <button className='btn-success btn-lg' onClick={handleSubmit}>Save</button>
            </div>

        </div>
    )
}
export default EditPolicyUser;