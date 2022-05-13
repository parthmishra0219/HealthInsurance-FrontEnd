import React,{useState} from "react";
import axios from "axios";

function BuyPolicy(){
    const [policyPurchase,setPolicyPurchase]= useState({
        policyPuchaseDuration :"",
        userId :"",
        
        policyId :"",
        
        
        
        
    })
    const handleChange = (event) => {
        setPolicyPurchase( policyPurchase => ({...policyPurchase,[event.target.name] : event.target.value}));
    }
    const handleSubmit = () => {
        const palyload = {
            policyId: policyPurchase.policyId ,
            policyPurchaseDuration: policyPurchase.policyPuchaseDuration ,
            userId: policyPurchase.userId
          }
        axios.post("http://localhost:8090/health/policyPurchase/add", palyload).then(resp=>alert("policyPurchase is saved with id:"+resp.data.policyPurchaseId));
    }
    return (
        <div className=" text-center my-5">
           <form className=" ml-5">
            <div>
                <label>User Id :-</label>
                <input type="number" name="userId" value={policyPurchase.userId} onChange={handleChange} />
            </div>
           
            <div>
                <label>Policy Id :-</label>
                <input type="number" name="policyId" value={policyPurchase.policyId} onChange={handleChange} />
            </div>
            <div>
                <label>Policy Puchase Duration In Year :-</label>
                <input type="number" name="policyPuchaseDuration" value={policyPurchase.policyPuchaseDuration} onChange={handleChange} />
            </div>
           </form>
                
            
           
            <div>
                <button className="btn btn-outline-success" onClick={handleSubmit}>Buy</button>
            </div>
        </div>
    )
}
export default BuyPolicy;