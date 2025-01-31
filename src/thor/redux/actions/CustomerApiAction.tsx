// defines the Redux Actions for Customer

// Customer

export const FETCH_CUSTOMER_REQUEST = 'FETCH_CUSTOMER_REQUEST';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';

export const ADD_CUSTOMER_REQUEST = 'ADD_CUSTOMER_REQUEST';
export const ADD_CUSTOMER_SUCCESS = 'ADD_CUSTOMER_SUCCESS';
export const ADD_CUSTOMER_FAILURE = 'ADD_CUSTOMER_FAILURE';

export const UPDATE_CUSTOMER_REQUEST = 'UPDATE_CUSTOMER_REQUEST';
export const UPDATE_CUSTOMER_SUCCESS = 'UPDATE_CUSTOMER_SUCCESS';
export const UPDATE_CUSTOMER_FAILURE = 'UPDATE_CUSTOMER_FAILURE';

export const DELETE_CUSTOMER_REQUEST = 'DELETE_CUSTOMER_REQUEST';
export const DELETE_CUSTOMER_SUCCESS = 'DELETE_CUSTOMER_SUCCESS';
export const DELETE_CUSTOMER_FAILURE = 'DELETE_CUSTOMER_FAILURE';

export const LIST_CUSTOMER_REQUEST = 'LIST_CUSTOMER_REQUEST';
export const LIST_CUSTOMER_SUCCESS = 'LIST_CUSTOMER_SUCCESS';
export const LIST_CUSTOMER_FAILURE = 'LIST_CUSTOMER_FAILURE';

export const addCustomerRequest = () => ({
    type: ADD_CUSTOMER_REQUEST,
});

export const addCustomerSuccess = (Customers) => ({
    type: ADD_CUSTOMER_SUCCESS,
    payload: Customers,
});

export const addCustomerFailure = (error) => ({
    type: ADD_CUSTOMER_FAILURE,
    payload: error,
});


export const fetchCustomerRequest = () => ({
    type: FETCH_CUSTOMER_REQUEST,
});

export const fetchCustomerSuccess = (Customers) => ({
    type: FETCH_CUSTOMER_SUCCESS,
    payload: Customers,
});

export const fetchCustomerFailure = (error) => ({
    type: FETCH_CUSTOMER_FAILURE,
    payload: error,
});

export const listCustomerRequest = () => ({
    type: LIST_CUSTOMER_REQUEST,
});

export const listCustomerSuccess = (Customers) => ({
    type: LIST_CUSTOMER_SUCCESS,
    payload: Customers,
});

export const listCustomerFailure = (error) => ({
    type: LIST_CUSTOMER_FAILURE,
    payload: error,
});

export const updateCustomerRequest = (Customer) => ({
    type: UPDATE_CUSTOMER_REQUEST,
    payload: Customer,
});

export const updateCustomerSuccess = (Customer) => ({
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: Customer,
});

export const updateCustomerFailure = (error) => ({
    type: UPDATE_CUSTOMER_FAILURE,
    payload: error,
});

export const deleteCustomerRequest = (Customer) => ({
    type: DELETE_CUSTOMER_REQUEST,
    payload: Customer,
});

export const deleteCustomerSuccess = (Customer) => ({
    type: DELETE_CUSTOMER_SUCCESS,
    payload: Customer,
});

export const deleteCustomerFailure = (error) => ({
    type: DELETE_CUSTOMER_FAILURE,
    payload: error,
});
