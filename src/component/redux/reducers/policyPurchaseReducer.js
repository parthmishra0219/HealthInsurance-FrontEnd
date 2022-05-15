import { Actiontypes } from "../constants/action-types";

const initialState2 = {
    policyPurchases: [
        {
            policyPurchaseId: 10,
            premiumAmount: 4000,
            policyPuchaseDuration: 5,
            purchaseDate: "2022-05-13",
            purchaseEndDate: "2027-05-13",
            policy: {
              policyId: 10,
              policyName: "SecureHealth6",
              policyCost: 200000,
              policyDurationInYear: 2,
            },
            policyUser: {
              userId: 55,
              name: "tabrez",
              userName: "tab123",
              password: "tab@123",
              phoneNo: 998877665,
              emailId: "kiz@gmail.com",
              aadhaarNo: 123212345434,
              dob: "1994-07-22"
            }


        },

    ],
    
};

export const policyPurchaseReducer = (state = initialState2 , {type,payload}) =>{
switch (type){
    case Actiontypes.SET_POLICYPURCHASES:
        return {...state, policyPurchases:payload};
        default:
            return state;
}
};

export const selectedPolicyPurchaseReducer=(state = {}, {type,payload}) =>{
    switch (type){
        case Actiontypes.SELECTED_POLICYPURCHASE:
            return {...state, ...payload};
            default:
                return state;
    }
    };   