import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FetchAllAdmins() {
  const [admins, setAdmins] = useState([]);

  const fetchAll = () => {
    axios.get("http://localhost:8090/health/admins").then((resp) => setAdmins(resp.data));
  };
  useEffect(fetchAll, []);

  return (
    <div className="container-fluid">
      <h3 className="text-center my-5 display-5">All Admins</h3>

      <table class="table table-dark mx-5">
        <thead>
          <tr>
            <th>SNo</th>
            {/* <th>AdminId</th> */}
            <th>FirstName</th>
            <th>LastName</th>
            {/* <th>UserName</th>
            <th>Password</th>
            <th>EmailId</th>
            <th>PhoneNumber</th> */}
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((a, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {/* <td>{a.adminId}</td> */}
              <td>{a.firstName}</td>
              <td>{a.lastName}</td>
              {/* <td>{a.userName}</td>
              <td>{a.password}</td>
              <td>{a.emailId}</td>
              <td>{a.phoneNumber}</td> */}
              <td>
                <Link to={`/admin/view/${a.adminId}`}>View</Link>
              </td>
              <td>
              <Link to={`/admin/edit/${a.adminId}`}>Edit</Link>
              </td>
              <td>
              <Link to ={`/admin/delete/${a.adminId}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button style={{ background: "yellow" }}>
          <p>
            <Link to="/admins/add"> Click here for Add Admin</Link>
          </p>
        </button> */}
    </div>
  );
}
export default FetchAllAdmins;
