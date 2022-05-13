import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function FetchAllPolicyUsersA() {

    const [policyUsers, setPolicyUsers] = useState([]);

    const fetchAll = () => {
        axios.get("http://localhost:8090/health/policyuser/getall").then(resp => setPolicyUsers(resp.data))
    }
    useEffect(fetchAll, []);

    return (
        <div className='container-fluid'>
            <h3 className="text-center my-5 display-5" >All Users</h3>

            <table className="table table-dark mx-5 ">
                <thead>
                    <tr class="bg-warning text-white">
                        <th>SNo</th>
                        <th>Name</th>  
                        <th>UserId</th>
                        <th>UserName</th>
                        {/* <th>Password</th>
                        <th>PhoneNo</th>
                        <th>EmailId</th>
                        <th>AadhaarNo</th>
                        <th>DOB</th> */}
                        <th>View</th>
                        {/* <th>Edit</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        policyUsers.map((pu, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{pu.name}</td>
                                <td>{pu.userId}</td>
                                <td>{pu.userName}</td>
                                {/* <td>{pu.password}</td>
                                <td>{pu.phoneNo}</td>
                                <td>{pu.emailId}</td>
                                <td>{pu.aadhaarNo}</td>
                                <td>{pu.dob}</td> */}
                                <td ><Link to={`/policyUser/view/${pu.userId}`}>View</Link></td>
                                {/* <td><Link to={`/policyUser/edit/${pu.userId}`}>Edit</Link></td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>

            
        </div>
    )
}
export default FetchAllPolicyUsersA;