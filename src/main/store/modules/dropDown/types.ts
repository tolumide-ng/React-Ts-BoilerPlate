import { SET_CLOSE_DROPDOWN, SET_DISPLAY_DROPDOWN } from "./actionTypes";

export interface setDropDownState {
    readonly display: boolean | undefined;
}

export interface setDisplayDropDownActionDef {
    type: typeof SET_DISPLAY_DROPDOWN;
    payload: setDropDownState;
}

export interface setCloseDropDownActionDef {
    type: typeof SET_CLOSE_DROPDOWN;
    payload: setDropDownState;
}

export type setDropDownActionTypeDef =
    | setDisplayDropDownActionDef
    | setCloseDropDownActionDef;
