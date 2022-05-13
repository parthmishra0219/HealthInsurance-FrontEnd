import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router";
// import { baseUrl } from "../util/AppConstants";

function DeletePolicy() {
  const [policy, setPolicy] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchPolicyById = () => {
    axios.get("http://localhost:8090/health/policies/get/" + id)
      .then((resp) => setPolicy(resp.data));
  };

  useEffect(fetchPolicyById, []);
  const deletePolicy = () => {
    axios.delete("http://localhost:8090/health/policies/delete/" + id)
      .then((resp) => alert(resp.data));
    navigate(-1);
  };
  return (
    <div>
      <br />
      <h2 className=" text-center">Policy Details</h2>
      <br />
      {policy !== null && (
        <div>
          {/* <p>PolicyId : {policy.policyId}</p>
          <p>PolicyName : {policy.policyName}</p>
          <p>PolicyCost : {policy.policyCost}</p>
          <p>PolicyDurationInYear : {policy.policyDurationInYear}</p> */}
          <table class="table table-bordered mx-">
            <tr>
              {" "}
              <th>PolicyId</th> <td> {policy.policyId}</td>
            </tr>
            <tr>
              {" "}
              <th>PolicyName</th> <td> {policy.policyName}</td>
            </tr>
            <tr>
              {" "}
              <th>PolicyCost</th> <td> {policy.policyCost}</td>
            </tr>
            <tr>
              {" "}
              <th>PolicyDurationInYear</th>{" "}
              <td>{policy.policyDurationInYear}</td>
            </tr>
          </table>
        </div>
      )}
      <div>
        <button class="btn btn-outline-danger btn-lg " onClick={deletePolicy}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default DeletePolicy;
