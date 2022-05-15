import {combineReducers} from "redux";
import { policyPurchaseReducer, selectedPolicyPurchaseReducer } from "./policyPurchaseReducer";
import { policyReducer, selectedPolicyReducer } from "./policyReducer";

const reducers = combineReducers ({
    allPolicies: policyReducer,
    policy: selectedPolicyReducer,
    allPolicyPurchases: policyPurchaseReducer,
    policyPurchase: selectedPolicyPurchaseReducer,

});

export default reducers;