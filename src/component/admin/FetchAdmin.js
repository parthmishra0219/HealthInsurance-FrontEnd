import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function FetchAdmin() {
  const [admin, setAdmin] = useState(null);

  const { id } = useParams();

  const fetchAdminById = () => {
    axios.get("http://localhost:8090/health/admins/get/" + id).then((resp) => setAdmin(resp.data));
  };

  useEffect(fetchAdminById, []);
  return (
    <div data-testid="FetchAdmin">
      <br />
      <h2 className="row h-100 justify-content-center align-items-center">
        Admin Details
      </h2>
      <br />
      {admin !== null && (
        <div>
          <table class="table table-bordered mx-5 bg-info">
            <tr>
              {" "}
              <th>AdminId</th> <td> {admin.adminId}</td>
            </tr>
            <tr>
              {" "}
              <th>FirstName</th> <td> {admin.firstName}</td>
            </tr>
            <tr>
              {" "}
              <th>LastName</th> <td> {admin.lastName}</td>
            </tr>
            <tr>
              {" "}
              <th>UserName</th> <td> {admin.userName}</td>
            </tr>
            <tr>
              {" "}
              <th>Password</th> <td> {admin.password}</td>
            </tr>
            <tr>
              {" "}
              <th>EmailId</th> <td> {admin.emailId}</td>
            </tr>
            <tr>
              {" "}
              <th>PhoneNumber</th> <td> {admin.phoneNumber}</td>
            </tr>

            {/* <Link to={`/admin/edit/${admin.adminId}`}>Edit</Link> */}
          </table>
          <button className=" btn btn-warning mx-5">
            {" "}
            <td>
              <Link to={`/admin/edit/${admin.adminId}`}>Edit Deitails</Link>
            </td>
          </button>
        </div>
      )}
    </div>
  );
}
export default FetchAdmin;
