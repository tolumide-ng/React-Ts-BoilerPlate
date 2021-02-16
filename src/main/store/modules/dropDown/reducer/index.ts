import actionTypes from "../actionTypes";
import { appDropDown as initialState } from "../index";
import { setDropDownActionTypeDef, setDropDownState } from "../types";

const dropDownTypes = actionTypes;

export const dropDownReducer = (
    state = initialState,
    dropDownProps: setDropDownActionTypeDef
): setDropDownState => {
    return dropDownTypes.includes(dropDownProps.type)
        ? { ...state, ...dropDownProps.payload }
        : state;
};

export default dropDownReducer;
