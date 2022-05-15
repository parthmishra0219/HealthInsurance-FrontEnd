import { Actiontypes } from "../constants/action-types"

export const setPolicies = (policies) => {
    return {
        type: Actiontypes.SET_POLICIES,
        payload : policies,
    };
};

export const selectedPolicy = (policy) => {
    return {
        type: Actiontypes.SELECTED_POLICY,
        payload : policy,
    };
};