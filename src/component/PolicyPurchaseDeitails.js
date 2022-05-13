import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PolicyPurchaseDeitails() {
    const [policyPurchase, setPolicyPurchase] = useState(null);

    const { id } = useParams();

    const fetchPolicyPurchaseById = () => {
        axios.get("http://localhost:8090/health/policyPurchase/get/" + id).then(resp => setPolicyPurchase(resp.data))
    }

    useEffect(fetchPolicyPurchaseById, []);
    return (
        <div>
            <h2 className='text-center my-5 display-5'>Policy Purchase Details</h2>
            {
                policyPurchase !== null &&
                <div>

                    <table class="table table-info table-bordered mx-5" >

                        <tr> <th>PolicyPurchaseId</th> <td> {policyPurchase.policyPurchaseId}</td></tr>
                        <tr> <th>UserId</th> <td> {policyPurchase.policyUser.userId}</td></tr>
                        <tr> <th>Name</th> <td> {policyPurchase.policyUser.name}</td></tr>
                        <tr> <th>PolicyId</th> <td> {policyPurchase.policy.policyId}</td></tr>
                        <tr> <th>PremiumAmount</th> <td>  {policyPurchase.premiumAmount}</td></tr>
                        <tr> <th>PolicyName</th> <td> {policyPurchase.policy.policyName}</td></tr>
                        <tr> <th>PolicyCost</th> <td> {policyPurchase.policy.policyCost}</td></tr>
                        {/* <tr> <th>PolicyDurationInYear</th> <td> {policyPurchase.policy.policyDurationInYear}</td></tr> */}
                        <tr> <th>UserName</th>  <td> {policyPurchase.policyUser.userName}</td></tr>
                        <tr> <th>Password</th> <td>{policyPurchase.policyUser.password}</td></tr>
                        <tr> <th>PhoneNo</th> <td>  {policyPurchase.policyUser.phoneNo}</td></tr>
                        <tr> <th>AadhaarNo</th> <td>  {policyPurchase.policyUser.aadhaarNo}</td></tr>
                        <tr> <th>Dob</th> <td> {policyPurchase.policyUser.dob}</td></tr>
                        <tr> <th>PolicyPuchaseDuration In Year</th> <td> {policyPurchase.policyPuchaseDuration}</td></tr>
                        <tr> <th>PurchaseDate</th>  <td> {policyPurchase.purchaseDate}</td></tr>
                        <tr> <th>PurchaseEndDate</th> <td> {policyPurchase.purchaseEndDate}</td></tr>

                    </table>

                </div>
            }
        </div>

    )
}
export default PolicyPurchaseDeitails;