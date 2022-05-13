import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function CreateUser(){
    const [user,setUser]= useState({
        
    userName: "",
    name: "",
    password: "",
    phoneNo: "",
    emailId: "",
    aadhaarNo: "",
    dob: ""
       
    })
    const handleChange = (event) => {
        setUser( user => ({...user,[event.target.name] : event.target.value}));
    }
    const navigate = useNavigate();
    const handleSubmit = () => {
        const payload = {
                    
            userName: user.userName,
            name: user.name,
            password: user.password,
            phoneNo: user.phoneNo,
            emailId: user.emailId,
            aadhaarNo: user.aadhaarNo,
            dob: user.dob
        }
        axios.post("http://localhost:8090/health/policyuser/add", payload)
        .then(resp=>alert("user is saved with id:"+resp.data.userId));
        navigate(-1);
    }
    return (
        <div className=" text-center my-5">
            
            <div>
                <label>Name</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} />
            </div>
            <div>
                <label>User Name</label>
                <input type="text" name="userName" value={user.userName} onChange={handleChange} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password" value={user.password} onChange={handleChange} />
            </div>
           
            <div>
                <label>Phone No</label>
                <input type="number" name="phoneNo" value={user.phoneNo} onChange={handleChange} />
            </div>
           
            <div>
                <label>Email Id</label>
                <input type="text" name="emailId" value={user.emailId} onChange={handleChange} />
            </div>
            
            <div>
                <label>Aadhaar No</label>
                <input type="number" name="aadhaarNo" value={user.aadhaarNo} onChange={handleChange} />
            </div>
            <div>
                <label>Dob</label>
                <input type="date" name="dob" value={user.dob} onChange={handleChange} />
            </div>

            <div>
                <button className="btn btn-outline-primary" onClick={handleSubmit}>Register</button>
            </div>
        </div>
    )
}
export default CreateUser;