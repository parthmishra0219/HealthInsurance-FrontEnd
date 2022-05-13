import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function DeleteAdmin() {
  const [admin, setAdmin] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchAdminById = () => {
    axios
      .get("http://localhost:8090/health/admins/get/" + id)
      .then((resp) => setAdmin(resp.data));
  };
  useEffect(fetchAdminById, []);

  const deleteAdmin = () => {
    axios
      .delete("http://localhost:8090/health/admins/delete/" + id)
      .then((resp) => alert(resp.data));
      navigate(-1);

  };

  return (
    <div>
      <br />{" "}
      <h2 className="row h-100 justify-content-center align-items-center">
        Admin Details
      </h2>
      <br />
      {admin !== null && (
        <div>
          <table class="table table-bordered">
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
          </table>
        </div>
      )}
      <div>
        <button className=" btn btn-outline-danger btn-lg" onClick={deleteAdmin}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default DeleteAdmin;
