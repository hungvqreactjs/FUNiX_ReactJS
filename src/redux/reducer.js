import { STAFFS, DEPARTMENTS } from "../data/staffs";

export const initialState = {
    staff: STAFFS,
    department: DEPARTMENTS,
   
};

export const Reducer = (state = initialState, action) => {
    return state;
};