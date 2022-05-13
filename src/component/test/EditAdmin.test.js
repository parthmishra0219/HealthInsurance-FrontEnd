import React from "react";

import  ReactDOM  from "react-dom";
import EditAdmin from "../admin/EditAdmin";



// import {isTSAnyKeyword} from "@babel/types";

it( "renders without crushing",() =>{

    const div =document.createElement("div");

    ReactDOM.render(<EditAdmin></EditAdmin>,div)

})