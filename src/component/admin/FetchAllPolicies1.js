import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FetchAllPolicies1() {
  const [policies, setPolicies] = useState([]);
  const fetchAll = () => {
    axios .get("http://localhost:8090/health/policies/list").then((resp) => setPolicies(resp.data));
  };

  useEffect(fetchAll, []);
  return (
    <div className="container-fluid">
     <br/> <h2 className="row h-100 justify-content-center align-items-center">Policies</h2><br/>
      <table class="table table-striped mx-5 ">
        <thead class="thead-dark">
          <tr>
            <th>Policy Id </th>
            <th>Policy Name</th>
            {/* <th> PolicyCost</th> */}
            {/* <th>PolicyDuration</th> */}
            <th>View Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((a, index) => (
            <tr key={index}>
              <td > {a.policyId}</td>
              <td> {a.policyName}</td>
              {/* <td> {a.policyCost}</td> */}
              {/* <td> {a.policyDurationInYear}</td> */}

              <td>
                <Link to={`/policy/${a.policyId}`}>view</Link>
              </td>

              <td>
                <Link to={`/policy/edit/${a.policyId}`}>Edit</Link>
              </td>
              <td>
                <Link to={`/policy/delete/${a.policyId}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
      
    </div>
  );
}
export default FetchAllPolicies1;
