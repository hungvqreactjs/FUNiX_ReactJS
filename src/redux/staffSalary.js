import * as ActionTypes from './ActionTypes';

export const StaffSalary = (state = {
    isLoading: true,
    errMess: null,
    staffSalary: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFFSSALARY:
            return {...state, isLoading: false, errMess: null, staffSalary: action.payload};
        case ActionTypes.STAFFSSALARY_LOADING:
            return {...state, isLoading: true, errMess: null, staffSalary: []}
        
        case ActionTypes.STAFFSSALARY_FAILED:
            return {...state, isLoading: false, errMess: action.payload}
        default:
          return state;
      }
};