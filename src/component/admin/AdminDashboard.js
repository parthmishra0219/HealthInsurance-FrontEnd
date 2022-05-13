import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function AdminDashboard() {
  const myAdmin = JSON.parse(localStorage.getItem("myAdmin"));
  const navigate = useNavigate();

  const logoutButton = () => {
    if (myAdmin != null) {
      localStorage.removeItem("myAdmin");
      localStorage.clear();
      alert("You have successfully logged out.");
      navigate("/");
    }
  };
  return (
    <div className="bg-warning">
      <div>
        <br />
        <jumbotron>
          <h1 className="text-center"> Admin Dashboard </h1>
        </jumbotron>
        <button
          className="btn btn-outline-danger btn-lg float-right "
          onClick={logoutButton}
        >
          logout{" "}
        </button>
      </div>
      <br />
      <br />

      <button className=" btn btn-lg btn-info my-5">
        {" "}
        <td>
          <Link to={`/admin/view/${myAdmin.adminId}`}>View Admin Details</Link>
        </td>
      </button>

      {/* </div><div class="card" > */}
      {/* <div class="card-body">
  <h4 className="text-primary text-center my-5">As an Admin, you can view and manage all the Boards under an enterprise by clicking the All Boards tile on the Admin page </h4></div>
</div> */}
      <div className="container">
        <div className="card bg-warning text-white">
          <div className="card-body ">
            <h5>
              As an Admin, you can view and manage all the Boards under an
              enterprise by clicking the All Boards tile on the Admin page{" "}
            </h5>{" "}
          </div>
        </div>
      </div>
      <br />

    

      <div className="card text-center mx-5">
        <div className="card-header">
          <h4>View All Policy Users </h4>
        </div>
        <div className="card-body">
          <h5 className="card-title text-success">
            You can View the all Policy users Here By clicking "VIEW USERS"
            button
          </h5>

          <a href="/policy/user/a" className="btn btn-primary">
            VIEW USERS{" "}
          </a>
        </div>
        <div className="card-footer text-muted">
          <br />
        </div>
      </div>

      <div className="card text-center mx-5 ">
        <div className="card-header">
          <h4>Policies Availbale</h4>
        </div>

        <div className="card-body">
          <h5 className="card-title text-success">
            You can see all Policies Here
          </h5>
          <a href="/fetchPolicy/admin" className="btn btn-primary">
            VIEW POLICIES
          </a>
        </div>
        <div className="card-footer text-muted">
          <br />
        </div>
      </div>

      <div className="card text-center mx-5 ">
        <div className="card-header">
          <h4>Add Policies </h4>
        </div>
        <div className="card-body">
          <h5 className="card-title text-success">
            You can Add New Policies Here By clicking "ADD POLICIES" button
          </h5>

          <a href="/Policy/add" className="btn btn-primary">
            ADD POLICIES{" "}
          </a>
        </div>
        <div className="card-footer text-muted">
          <br />
        </div>

        <div className="card text-center mx-5 ">
          <div className="card-header">
            <h4>Policy Purchase Details </h4>
          </div>
          <div className="card-body">
            <h5 className="card-title text-success">
              You can view Policies Deitails Here By clicking "VIEW DETAILS"
              button
            </h5>

            <a href="/policy/purchase/view" className="btn btn-primary">
              VIEW DETAILS{" "}
            </a>
          </div>
          <div className="card-footer text-muted">
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
