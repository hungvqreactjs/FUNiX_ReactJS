import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';


export const  fetchStaff = () => (dispatch) => {
    dispatch(staffsLoading(true));
    return fetch(baseUrl + 'staffs')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(staffs => dispatch(addStaffs( staffs)))
    .catch(error => dispatch(staffsFailed(error.message)));
}

export const staffsLoading = () => ({
    type: ActionTypes.STAFFS_LOADING
});

export const staffsFailed = () => ({
    type: ActionTypes.STAFFS_FAILED,
   
});

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
});

