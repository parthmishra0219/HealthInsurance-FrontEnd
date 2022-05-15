import { Actiontypes } from "../constants/action-types";


const initialState = {
    policies: [
        {
            policyId: 1,
            policyName: "HealthRedux",
            policyCost: 200000,
            policyDurationInYear: 2,


        },

    ],
    
};

export const policyReducer = (state = initialState , {type,payload}) =>{
switch (type){
    case Actiontypes.SET_POLICIES:
        return {...state, policies:payload};
        default:
            return state;
}
};

export const selectedPolicyReducer=(state = {}, {type,payload}) =>{
    switch (type){
        case Actiontypes.SELECTED_POLICY:
            return {...state, ...payload};
            default:
                return state;
    }
    };