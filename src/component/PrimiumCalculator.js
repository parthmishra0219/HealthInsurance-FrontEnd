import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

function PrimiumCalculator() {
    const[primiumCalculator,setPrimiumCalculator]=useState({
        age: "",
        payingTerm: "",
       // policyTerm: "",
        sumAssured: ""

    })
    const [primiumAmount,setPrimiumAmount]=useState(0);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) =>{
        setPrimiumCalculator(primiumCalculator => ({...primiumCalculator,[event.target.name] : event.target.value}))

    }
    const handleSubmit = () =>{

      let errors = {};

      if(!primiumCalculator.age){
          errors['ageErr'] = "age Id is Required"
      }
  
      if(!primiumCalculator.payingTerm){
          errors['payingTermErr'] = "payingTerm is Required"
      }
    //   if(!primiumCalculator.policyTerm){
    //     errors['policyTermErr'] = "policyTerm Cost is Required"
    // }
    if(!primiumCalculator.sumAssured){
      errors['sumAssuredErr'] = "sumAssured is Required"
  }

  setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        
        if (noErrors) {
            const palyload = {
                age: primiumCalculator.age,
                payingTerm:primiumCalculator.payingTerm,
               // policyTerm: primiumCalculator.policyTerm,
                sumAssured: primiumCalculator.sumAssured  
        
    }
    axios.post("http://localhost:8090/health/primiumCalculator", palyload).then(resp => setPrimiumAmount(resp.data));
   // navigate(-1);
}
 }

    return(
        <div className="form-group text-center my-5 ">
            <div className="card bg-secondary text-white">
           <h2>Fill The Data Below and Get Your Primium Amount</h2>
       </div>
        <div>
            <br/>
            <br/>
         <label className="ml-5"> Age :-</label>
         <input type="text" name="age" placeholder="0" value={primiumCalculator.age} onChange= {handleChange}/>
         {
                    formErrors.ageErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.ageErr}</div>
           }
        
       </div>
       <div>
         <label> PayingTerm :-</label>
         <input type="text" name="payingTerm" placeholder="0" value={primiumCalculator.policyName} onChange={handleChange}/>
         {
                    formErrors.payingTermErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.payingTermErr}</div>
           }
         
       </div>
      
       <div>
         <label>sumAssured :- </label>
         <input type="text" name="sumAssured" placeholder="0" value={primiumCalculator.policyDurationInYear} onChange={handleChange}/>
         {
                    formErrors.sumAssuredErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.sumAssuredErr}</div>
           }
         
       </div>
      <br/>
       <button onClick={handleSubmit} class="btn btn-info btn-lg" >Calculate </button>
       <br/>
       <br/>
       <div className="card bg-warning">
           <h2>Your Primium Amount :- {primiumAmount}</h2>
       </div>
     </div>


    )
}
export default PrimiumCalculator;