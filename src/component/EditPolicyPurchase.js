import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';

function EditPolicyPurchase() {

    const [policyPurchase, setPolicyPurchase] = useState({

        policyPurchaseId: "",
        premiumAmount: "",
        policyPuchaseDuration: "",
        purchaseDate: "",
        purchaseEndDate: "",
        policyId: "",
        policyName: "",
        policyCost: "",
        policyDurationInYear: "",
        userId: "",
        name:"",
        userName: "",
        password: "",
        phoneNo: "",
        emailId: "",
        aadhaarNo: "",
        dob: ""
    
    });

    //validation form
    const [formErrors, setFormErrors] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    const fetchPolicyPurchaseById = () => {
        axios.get("http://localhost:8090/health/policyPurchase/get/" + id).then(resp =>
         setPolicyPurchase({
            policyPurchaseId: resp.data.policyPurchaseId,
            premiumAmount: resp.data.premiumAmount,
            policyPuchaseDuration: resp.data.policyPuchaseDuration,
            purchaseDate: resp.data.purchaseDate,
            purchaseEndDate: resp.data.purchaseEndDate,
            policyId: resp.data.policy.policyId,
            policyName: resp.data.policy.policyName,
            policyCost: resp.data.policy.policyCost,
            policyDurationInYear: resp.data.policy.policyDurationInYear,
            userId: resp.data.policyUser.userId,
            name: resp.data.policyUser.name,
            userName: resp.data.policyUser.userName,
            password: resp.data.policyUser.password,
            phoneNo: resp.data.policyUser.phoneNo,
            emailId: resp.data.policyUser.emailId,
            aadhaarNo: resp.data.policyUser.aadhaarNo,
            dob: resp.data.policyUser.dob
             
            }))
    }
    useEffect(fetchPolicyPurchaseById, []);

    const handleChange = (event) => {
        setPolicyPurchase(policyPurchase => ({ ...policyPurchase, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {

        //validate form

        let errors = {};

        if (!policyPurchase.policyPuchaseDuration) {
            errors['policyPurchaseDurationErr'] = "PolicyPuchaseDuration is required";
        }

        if (!policyPurchase.purchaseDate) {
            errors['purchaseDateErr'] = "PurchaseDate  is required";
        }



        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const payload1 = {
                policyPurchaseId:  policyPurchase.policyPurchaseId,
                premiumAmount: policyPurchase.premiumAmount,
                policyPuchaseDuration:  policyPurchase.policyPuchaseDuration,
                purchaseDate: policyPurchase.purchaseDate,
                purchaseEndDate: policyPurchase.purchaseEndDate,
                policy: {
                    policyId: policyPurchase.policyId,
                    policyName: policyPurchase.policyName,
                    policyCost:policyPurchase.policyCost,
                    policyDurationInYear: policyPurchase.policyDurationInYear
                },
                policyUser: {
                    userId: policyPurchase.userId,
                    name: policyPurchase.name,
                    userName:  policyPurchase.userName,
                    password: policyPurchase.password,
                    phoneNo:  policyPurchase.phoneNo,
                    emailId:  policyPurchase.emailId,
                    aadhaarNo: policyPurchase.aadhaarNo,
                    dob: policyPurchase.dob
                }
            }
            
            

            
            axios.put("http://localhost:8090/health/policyPurchase/update", payload1).then(resp => alert("policyPurchase updated successfully:"));
            navigate(-1);
        }

    }

    return (
        <div>
            <div>
                <label>PolicyPurchase Id</label>
                <input type="number" name="policyPurchaseId" value={policyPurchase.policyPurchaseId} disabled />

            </div>
            <div>
                <label>Primium Amount</label>
                <input type="number" name="premiumAmount" value={policyPurchase.premiumAmount} disabled />

            </div>
            <div>
                <label>PolicyPurchase Duration</label>
                <input type="number" name="policyPuchaseDuration" value={policyPurchase.policyPuchaseDuration} onChange={handleChange} />
                {
                    formErrors.policyPurchaseDurationErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.policyPuchaseDurationErr}</div>
                }
            </div>
            <div>
                <label>PolicyPurchase Date</label>
                <input type="date" name="purchaseDate" value={policyPurchase.purchaseDate} disabled />
                {
                    formErrors.purchaseDateErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.purchaseDateErr}</div>
                }
            </div>
            <div>
                <label>PolicyPurchase End Date</label>
                <input type="date" name="purchaseEndDate" value={policyPurchase.purchaseEndDate} disabled />

            </div>
            <div>
                <label>Policy Id</label>
                <input type="number" name="policyId" value={policyPurchase.policyId} disabled />

            </div>
            <div>
                <label>Policy Name</label>
                <input type="text" name="policyName" value={policyPurchase.policyName} disabled />

            </div>
            <div>
                <label>Policy Cost</label>
                <input type="number" name="policyCost" value={policyPurchase.policyCost} disabled />

            </div>
            <div>
                <label>Policy DurationInYear</label>
                <input type="number" name="policyDurationInYear" value={policyPurchase.policyDurationInYear} disabled />

            </div>
            <div>
                <label>User Id</label>
                <input type="number" name="userId" value={policyPurchase.userId} disabled />

            </div>
            <div>
                <label> Name</label>
                <input type="text" name="name" value={policyPurchase.name} disabled />

            </div>
            <div>
                <label>User Name</label>
                <input type="text" name="userName" value={policyPurchase.userName} disabled />

            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password" value={policyPurchase.password} disabled />

            </div>
            <div>
                <label>Phone No</label>
                <input type="number" name="phoneNo" value={policyPurchase.phoneNo} disabled />

            </div>
            <div>
                <label>Email Id</label>
                <input type="text" name="emailId" value={policyPurchase.emailId} disabled />

            </div>
            <div>
                <label>Aadhaar No</label>
                <input type="number" name="aadhaarNo" value={policyPurchase.aadhaarNo} disabled />

            </div>
            <div>
                <label>Dob</label>
                <input type="date" name="dob" value={policyPurchase.dob} disabled />

            </div>
            <div>

                <button onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}
export default EditPolicyPurchase;