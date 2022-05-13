import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function FetchPolicyUser() {
  const [policyUser, setPolicyUser] = useState(null);

  const { id } = useParams();

  const fetchPolicyUserById = () => {
    axios.get("http://localhost:8090/health/policyuser/get/" + id)
      .then((resp) => setPolicyUser(resp.data));
  };

  useEffect(fetchPolicyUserById, []);
  return (
    <div>
      <br />{" "}
      <h2 className="row h-100 justify-content-center align-items-center">
        User Details
      </h2>
      <br />
      {policyUser !== null && (
        <div>
          <table class="table table-bordered mx-5 bg-info ">
            <tr>
              {" "}
              <th>User Name</th> <td> {policyUser.name}</td>
            </tr>
            <tr>
              {" "}
              <th>UserId</th> <td> {policyUser.userId}</td>
            </tr>
            <tr>
              {" "}
              <th>UserName</th> <td> {policyUser.userName}</td>
            </tr>
            <tr>
              {" "}
              <th>Password</th> <td> {policyUser.password}</td>
            </tr>
            <tr>
              {" "}
              <th>PhoneNo</th> <td> {policyUser.phoneNo}</td>
            </tr>
            <tr>
              {" "}
              <th>EmailId</th> <td> {policyUser.emailId}</td>
            </tr>
            <tr>
              {" "}
              <th>AadhaarNo</th> <td> {policyUser.aadhaarNo}</td>
            </tr>
            <tr>
              {" "}
              <th>DOB</th> <td>{policyUser.dob}</td>
            </tr>
          </table>
          <button className=" btn btn-warning mx-5  ">
            {" "}
            <td>
              {" "}
              <td>
                <Link to={`/policyUser/edit/${policyUser.userId}`}>
                  Update Deitails{" "}
                </Link>
              </td>
            </td>
          </button>
        </div>
      )}
    </div>
  );
}
export default FetchPolicyUser;
