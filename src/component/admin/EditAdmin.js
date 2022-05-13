import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';

function EditAdmin() {

    const [admin, setAdmin] = useState({
        adminId: "",
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        emailId: "",
        phoneNumber: ""
    });

    //validation form
    const [formErrors, setFormErrors] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    const fetchAdminById = () => {
        axios.get("http://localhost:8090/health/admins/get/" + id).then(resp => setAdmin(resp.data))
    }
    useEffect(fetchAdminById, []);

    const handleChange = (event) => {
        setAdmin(admin => ({ ...admin, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {

        //validate form

        let errors = {};

        if (!admin.adminId) {
            errors['adminIdErr'] = "Admin Id is required";
        }

        if (!admin.firstName) {
            errors['firstNameErr'] = "First Name is required";
        }

        if (!admin.lastName) {
            errors['lastNameErr'] = "Last Name is required";
        }
        if (!admin.userName) {
            errors['userNameErr'] = "User Name is required"
        }
        if (!admin.password) {
            errors['passwordErr'] = "Password is required";
        }
        if (!admin.emailId) {
            errors['emailIdErr'] = "EmailId is required";
        }
        if (!admin.phoneNumber) {
            errors['phoneNumberErr'] = "PhoneNumber is required";
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const palyload = {
                adminId: admin.adminId,
                firstName: admin.firstName,
                lastName: admin.lastName,
                userName: admin.userName,
                password: admin.password,
                emailId: admin.emailId,
                phoneNumber: admin.phoneNumber
            }
            axios.put("http://localhost:8090/health/admins/update", palyload)
                .then(resp => alert("admin updated successfully:"));
            navigate(-1);
        }
    }

    return (
        <div className="text-center my-5">
            <div>
                <label>AdminId</label>
                <input type="text" name="adminId" value={admin.adminId} onChange={handleChange} disabled />
                {
                    formErrors.adminIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.adminIdErr}</div>
                }
            </div>
            <div>
                <label>FirstName</label>
                <input type="text" name="firstName" value={admin.firstName} onChange={handleChange} />
                {
                    formErrors.firstNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.firstNameErr}</div>
                }
            </div>
            <div>
                <label>LastName</label>
                <input type="text" name="lastName" value={admin.lastName} onChange={handleChange} />
                {
                    formErrors.lastNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.lastNameErr}</div>
                }
            </div>
            <div>
                <label>UserName</label>
                <input type="text" name="userName" value={admin.userName} onChange={handleChange} />
                {
                    formErrors.userNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.userNameErr}</div>
                }
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password" value={admin.password} onChange={handleChange} />
                {
                    formErrors.passwordErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.passwordErr}</div>
                }
            </div>
            <div>
                <label>EmailId</label>
                <input type="text" name="emailId" value={admin.emailId} onChange={handleChange} />
                {
                    formErrors.emailIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.emailIdErr}</div>
                }
            </div>
            <div>
                <label>PhoneNumber</label>
                <input type="number" name="phoneNumber" value={admin.phoneNumber} onChange={handleChange} />
                {
                    formErrors.phoneNumberErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.phoneNumberErr}</div>
                }
            </div>
            <div>

            <button class="btn btn-outline-success" onClick={handleSubmit}>Update</button>
            </div>


        </div>
    )
}
export default EditAdmin;