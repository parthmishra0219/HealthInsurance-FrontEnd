import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function AllPolicyPurchases(){
    const [policyPurchases,setPolicyPurchases]=useState([]);

    const fetchAll= () => {
        axios.get("http://localhost:8090/health/policyPurchase").then(resp => setPolicyPurchases( resp.data))
            
    }

    useEffect(fetchAll,[])

    return(
        <div className="container-fluid">
            <h3 className=" text-center my-5  ">All PolicyPurchases</h3>
            <table className="table table-info">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>PrchaseId</th>
                        <th>PremiumAmount</th>
                        <th>PolicyPuchaseDuration</th>
                        <th>PurchaseDate</th>
                        <th>PurchaseEndDate</th>
                        <th>View</th>
                        <th>Renew</th>

                        {/* <th>PolicyId</th>
                        <th>PolicyName</th>
                        <th>PolicyCost</th>
                        <th>PolicyDurationInYear</th>                       
                        <th>UserId</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>PhNo</th>
                        <th>EmailId</th>
                        <th>AadhaarNo</th>
                        <th>Dob</th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        policyPurchases.map((a, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{a.policyPurchaseId}</td>
                                <td>{a.premiumAmount}</td>
                                <td>{a.policyPuchaseDuration}</td>
                                <td>{a.purchaseDate}</td>
                                <td>{a.purchaseEndDate}</td>
                                <td> <button className="btn-warning   "><Link to={`/policy/purchase/view/${a.policyPurchaseId}`}>View Details</Link>  </button></td>
                                <td><button className="btn-warning  "><Link to={`/policy/purchase/edit/${a.policyPurchaseId}`}>Renew</Link>  </button></td>
                                
                                {/* <td>{a.policy.policyId}</td>
                                <td>{a.policy.policyName}</td>
                                <td>{a.policy.policyCost}</td>
                                <td>{a.policy.policyDurationInYear}</td>
                                <td>{a.policyUser.userId}</td>
                                <td>{a.policyUser.userName}</td>
                                <td>{a.policyUser.password}</td>
                                <td>{a.policyUser.phoneNo}</td>
                                <td>{a.policyUser.emailId}</td>
                                <td>{a.policyUser.aadhaarNo}</td>
                                <td>{a.policyUser.dob}</td> */}
                                {/* <td><button className=" btn-danger"> <Link to={`/policy/purchase/view/${a.policyPurchaseId}`} > Purchase Details</Link></button><br/><br/></td> */}
                               
                                {/* <button><Link to={`/policy/purchase/edit/${a.policyPurchaseId}`}>Renew</Link></button> */}
                            </tr>

                        )
                    }
                </tbody>
            </table>
           
        </div>
    )
}
export default AllPolicyPurchases;