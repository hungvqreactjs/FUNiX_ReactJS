import * as ActionTypes from './ActionTypes';

export const Department = (state = {
    departments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DEPARTMENTS:
            return {...state, departments: action.payload};
        default:
          return state;
      }
};