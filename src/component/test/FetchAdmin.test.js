import React from "react";
import  ReactDOM  from "react-dom";
import FetchAdmin from "../admin/FetchAdmin";


// import {isTSAnyKeyword} from "@babel/types";
it( "renders without crushing",() =>{
    const div =document.createElement("div");
    ReactDOM.render(<FetchAdmin></FetchAdmin>,div)
});