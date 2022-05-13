import React from "react";

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  const myUser = JSON.parse(localStorage.getItem("myUser"));
  const navigate = useNavigate();

  const logoutButton = () => {
    if (myUser != null) {
      localStorage.removeItem("myUser");
      localStorage.clear();
      alert("You have successfully logged out.");
      navigate("/");
    }
  };
  return (
    <div className=" mx-5">

      <br /> <h1 className="row h-100 justify-content-center align-items-center">User Dashboard</h1>

      <button className="btn btn-danger float-right btn-lg " onClick={logoutButton} >logout </button>
      {/* <button class="btn btn-success btn-lg float-right" type="submit">Submit</button> */}
      <br />
      <br />
      <br />

      <button className=" btn btn-info"> <td ><Link to={`/policyUser/view/${myUser.userId}`}>View User Details</Link></td></button>
      <br />
      <br />

      <div class="card mx-4 bg-warning" >
        <div class="card-body text-center">
          <h5 class="card-title">View Policies</h5>
          <p class="card-text">You can view the  all policies and buy the Policies and safe the your life.</p>
          <button className=" btn btn-outline-primary mr-3"> <a href="/fetchPolicy" class="card-link"> VIEW POLICIES</a></button>
          {/* <button className=" btn btn-outline-success "><a href="#" class="card-link">Another link</a></button> */}
        </div>
      </div>
      <br />
      <br />

      <div class="card mx-4 bg-warning" >
        <div class="card-body text-center">
          <h5 class="card-title">Buy the Policy</h5>

          <p class="card-text">You can view the  all policies and buy the Policies and safe the your life.</p>
          <button className=" btn btn-outline-primary mr-3"> <a href="/policy/buy" class="card-link"> Buy  </a></button>
          {/* <button className=" btn btn-outline-success  "><a href="#" class="card-link">Another link</a></button> */}
        </div>
      </div>
      <br />
      <br />

      <div class="card mx-4 bg-warning" >
        <div class="card-body text-center">
          <h5 class="card-title">Policy Purchase Deitails  </h5>

          <p class="card-text">You can view the  Policy Purchase Details .</p>
          <button className=" btn  btn-outline-primary mr-3"> <a href="/policy/purchase/view" class="card-link"> View Details  </a></button>
          {/* <button className=" btn btn-outline-success  "><a href="#" class="card-link">Another link</a></button> */}
        </div>
      </div>
      <br />
      <br />

    </div>
  );
}
