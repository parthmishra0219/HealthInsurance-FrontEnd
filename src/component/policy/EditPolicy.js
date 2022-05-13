import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router';

function EditPolicy() {

    const [policy, setPolicy] = useState({
        policyId: "",
        policyName: "",
        policyCost: "",
        policyDurationInYear: ""
    });

    //validation form
    const [formErrors, setFormErrors] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    const fetchPolicyById = () => {
        axios.get("http://localhost:8090/health/policies/get/" + id).then(resp => setPolicy(resp.data))
    }
    useEffect(fetchPolicyById, []);

    const handleChange = (event) => {
        setPolicy(policy => ({ ...policy, [event.target.name]: event.target.value }));
    }
    const handleSubmit = () => {

        //validate form

        let errors = {};

        if (!policy.policyId) {
            errors['policyIdErr'] = "Policy Id is required";
        }

        if (!policy.policyName) {
            errors['policyNameErr'] = "Policy Name is required";
        }

        if (!policy.policyCost) {
            errors['policyCostErr'] = "Policy Cost is required";
        }
        else if (policy.policyCost < 0) {
            errors['policyCostErr'] = "Policy Cost Should not be negative"
        }

        if (!policy.policyDurationInYear) {
            errors['policyDurationInYearErr'] = "Year is required";
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const palyload = {
                policyId: policy.policyId,
                policyName: policy.policyName,
                policyCost: policy.policyCost,
                policyDurationInYear: policy.policyDurationInYear
            }
            axios.put("http://localhost:8090/health/policies/update", palyload)
                .then(resp => alert("policy updated successfully:"));
            navigate(-1);
        }

    }

    return (
        <div>
            <div>
                <label>Policy Id</label>
                <input type="text" name="policyId" value={policy.policyId}  />
                {
                    formErrors.policyIdErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.policyIdErr}</div>
                }
            </div>
            <div>
                <label>Policy Name</label>
                <input type="text" name="policyName" value={policy.policyName} onChange={handleChange} />
                {
                    formErrors.policyNameErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.policyNameErr}</div>
                }
            </div>
            <div>
                <label>Policy Cost</label>
                <input type="number" name="policyCost" value={policy.policyCost} onChange={handleChange} />
                {
                    formErrors.policyCostErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.policyCostErr}</div>
                }
            </div>
            <div>
                <label>Policy DurationInYear</label>
                <input type="text" name="policyDurationInYear" value={policy.policyDurationInYear} onChange={handleChange} />
                {
                    formErrors.policyDurationInYearErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.policyDurationInYearErr}</div>
                }
            </div>
            <div>

                <button onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}
export default EditPolicy;