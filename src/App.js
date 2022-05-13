import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserHome from "./component/user/UserDashboard";
import FetchPolicy from "./component/policy/FetchPolicies";
import FetchPolicyById from "./component/policy/FetchPolicyById";
import AddPolicy from "./component/policy/AddPolicy";
import DeletePolicy from "./component/policy/DeletePolicy";
import EditPolicy from "./component/policy/EditPolicy";
import { Nav, Navbar, Container } from "react-bootstrap";
import Login from "./component/user/UserLogin";
import AdminLogin from "./component/admin/AdminLogin";
import FetchAllPolicyUsers from "./component/user/FetchAllPolicyUsers";
import FetchPolicyUser from "./component/user/FetchPolicyUser";
import FetchAllAdmins from "./component/admin/FetchAllAdmins";
import FetchAdmin from "./component/admin/FetchAdmin";
import AddAdmins from "./component/admin/AddAdmin";
import AdminHome from "./component/admin/AdminDashboard";
import Home from "./component/Home";
import EditAdmin from "./component/admin/EditAdmin";
import DeleteAdmin from "./component/admin/DeleteAdmin";
import EditPolicyUser from "./component/user/EditPolicyUser";
import AddPolicyUser from "./component/user/AddPolicyUser";
import PrimiumCalculator from "./component/PrimiumCalculator";
import WhyHealthInsu from "./component/About/WhyHealthInsu";
import FetchAllPolicies1 from "./component/admin/FetchAllPolicies1";
import BuyPolicy from "./component/BuyPolicy";
import PolicyPurchaseDeitails from "./component/PolicyPurchaseDeitails";
import AllPolicyPurchases from "./component/AllPolicyPurchase";
import FetchAllPolicyUsersA from "./component/admin/FetchAllPolicyUsersA";
import EditPolicyPurchase from "./component/EditPolicyPurchase";


function App() {
  return (
    <div className="App " >
      <Navbar bg="dark" variant="dark ">
    < Container>
    <Navbar.Brand href="/">Health Insurance</Navbar.Brand>
    <Nav className="me-auto mx-5">
      {/* <Nav.Link href="/admin/login ">Admin Login </Nav.Link>
      <Nav.Link href="/admins/add">New  Admin</Nav.Link> */}
      {/* <Nav.Link href="/user/login">User Login</Nav.Link>
      <Nav.Link href="/policyUser/add">New User</Nav.Link> */}
     
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle mx-3" href="#" id="navbardrop" data-toggle="dropdown">
        Admin 
      </a>
      
      <div className="dropdown-menu">
        <a className="dropdown-item" href="/admin/login">Login </a>
        <a className="dropdown-item" href="/admins/add">New Registration </a>
       
      </div>
      </li>
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        User 
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="/user/login">Login </a>
        <a className="dropdown-item" href="/policyUser/add">New Registration </a>
       
      </div>
      </li>
      <Nav.Link href="/primiumCalculator" className="mx-3"> Primium Calculator</Nav.Link>
      <Nav.Link href="/whyHealthInsu" className="mx-3">Why Need Health Insurance</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>

      <Router>
        <Routes>

           <Route path="/" element={<Home />} />

           <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/policy/user" element={<FetchAllPolicyUsers />} />
          <Route path="/policyUser/view/:id" element={<FetchPolicyUser />} />
          <Route path="/policyUser/edit/:id" element={<EditPolicyUser/>} />
          <Route path="/policyUser/add" element={<AddPolicyUser />} />

          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admins/all" element={<FetchAllAdmins />} />
          <Route path="/admin/view/:id" element={<FetchAdmin />} />
          <Route path= "/admins/add" element ={<AddAdmins/>} />
          <Route path="/admin/edit/:id" element={<EditAdmin />} />
          <Route path="/admin/delete/:id" element={<DeleteAdmin />} />
          <Route path="/policy/user/a" element={<FetchAllPolicyUsersA />} />
         

          <Route path="/fetchPolicy" element={<FetchPolicy />} />
          <Route path="/fetchPolicy/admin" element={<FetchAllPolicies1 />} />
          <Route path="/policy/:id" element={<FetchPolicyById />} />
          <Route path="/Policy/add" element={<AddPolicy />} />
          <Route path="/policy/delete/:id" element={<DeletePolicy />} />
          <Route path="/policy/edit/:id" element={<EditPolicy />} />

          <Route path="/policy/buy" element={<BuyPolicy />} />
          <Route path="/policy/purchase/view" element={<AllPolicyPurchases />} />
          <Route path="/policy/purchase/view/:id" element={<PolicyPurchaseDeitails />} /> 
          <Route path="/policy/purchase/edit/:id" element={<EditPolicyPurchase />} />
                  

          <Route path="/primiumCalculator" element={<PrimiumCalculator />} />

          <Route path="/whyHealthInsu" element={<WhyHealthInsu />} />
          
                
        </Routes>
      </Router>
    </div>
  );
}

export default App;
