import { Actiontypes } from "../constants/action-types"

export const setPolicyPurchases = (policyPurchases) => {
    return {
        type: Actiontypes.SET_POLICYPURCHASES,
        payload : policyPurchases,
    };
};

export const selectedPolicyPurchase = (policyPurchase) => {
    return {
        type: Actiontypes.SELECTED_POLICYPURCHASE,
        payload : policyPurchase,
    };
};