import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function FetchPolicyById() {
  const [policy, setPolicy] = useState(null);
  const { id } = useParams();
  const fetchPolicyById = () => {
    axios.get("http://localhost:8090/health/policies/get/" + id).then((resp) => setPolicy(resp.data));
  };
  useEffect(fetchPolicyById, []);
  return (
    <div>
      <br />
      <h2 className="row h-100 justify-content-center align-items-center">
        {" "}
        Policy Details
      </h2>
      <br />
      {policy !== null && (
        <div>
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
    </div>
  );
}
export default FetchPolicyById;
