import React from "react";

import  ReactDOM  from "react-dom";
import FetchAllPolicies1 from "../admin/FetchAllPolicies1";


// import {isTSAnyKeyword} from "@babel/types";

it( "renders without crushing",() =>{

    const div =document.createElement("div");

    ReactDOM.render(<FetchAllPolicies1></FetchAllPolicies1>,div)

})