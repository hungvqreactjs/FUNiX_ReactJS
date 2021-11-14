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

export const  fetchDepartment = () => (dispatch) => {
    dispatch(departmentsLoading(true));
    return fetch(baseUrl + 'departments')
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
    .then(departments => dispatch(addDepartments( departments)))
    .catch(error => dispatch(departmentsFailed(error.message)));  
    
}
export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
});

export const departmentsFailed = () => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    
});

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
    
});


export const  fetchStaffSalary = () => (dispatch) => {
    dispatch(staffsSalaryLoading(true));
    return fetch(baseUrl + 'staffsSalary')
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
    .then(staffsSalary => dispatch(addStaffsSalary( staffsSalary)))
    .catch(error => dispatch(staffsSalaryFailed(error.message)));
}

export const staffsSalaryLoading = () => ({
    type: ActionTypes.STAFFSSALARY_LOADING
});

export const staffsSalaryFailed = () => ({
    type: ActionTypes.STAFFSSALARY_FAILED,
   
});

export const addStaffsSalary = (staffsSalary) => ({
    type: ActionTypes.ADD_STAFFSSALARY,
    payload: staffsSalary
});
