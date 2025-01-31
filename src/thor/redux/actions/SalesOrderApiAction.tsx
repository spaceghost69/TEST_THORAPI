// defines the Redux Actions for SalesOrder

// SalesOrder

export const FETCH_SALESORDER_REQUEST = 'FETCH_SALESORDER_REQUEST';
export const FETCH_SALESORDER_SUCCESS = 'FETCH_SALESORDER_SUCCESS';
export const FETCH_SALESORDER_FAILURE = 'FETCH_SALESORDER_FAILURE';

export const ADD_SALESORDER_REQUEST = 'ADD_SALESORDER_REQUEST';
export const ADD_SALESORDER_SUCCESS = 'ADD_SALESORDER_SUCCESS';
export const ADD_SALESORDER_FAILURE = 'ADD_SALESORDER_FAILURE';

export const UPDATE_SALESORDER_REQUEST = 'UPDATE_SALESORDER_REQUEST';
export const UPDATE_SALESORDER_SUCCESS = 'UPDATE_SALESORDER_SUCCESS';
export const UPDATE_SALESORDER_FAILURE = 'UPDATE_SALESORDER_FAILURE';

export const DELETE_SALESORDER_REQUEST = 'DELETE_SALESORDER_REQUEST';
export const DELETE_SALESORDER_SUCCESS = 'DELETE_SALESORDER_SUCCESS';
export const DELETE_SALESORDER_FAILURE = 'DELETE_SALESORDER_FAILURE';

export const LIST_SALESORDER_REQUEST = 'LIST_SALESORDER_REQUEST';
export const LIST_SALESORDER_SUCCESS = 'LIST_SALESORDER_SUCCESS';
export const LIST_SALESORDER_FAILURE = 'LIST_SALESORDER_FAILURE';

export const addSalesOrderRequest = () => ({
    type: ADD_SALESORDER_REQUEST,
});

export const addSalesOrderSuccess = (SalesOrders) => ({
    type: ADD_SALESORDER_SUCCESS,
    payload: SalesOrders,
});

export const addSalesOrderFailure = (error) => ({
    type: ADD_SALESORDER_FAILURE,
    payload: error,
});


export const fetchSalesOrderRequest = () => ({
    type: FETCH_SALESORDER_REQUEST,
});

export const fetchSalesOrderSuccess = (SalesOrders) => ({
    type: FETCH_SALESORDER_SUCCESS,
    payload: SalesOrders,
});

export const fetchSalesOrderFailure = (error) => ({
    type: FETCH_SALESORDER_FAILURE,
    payload: error,
});

export const listSalesOrderRequest = () => ({
    type: LIST_SALESORDER_REQUEST,
});

export const listSalesOrderSuccess = (SalesOrders) => ({
    type: LIST_SALESORDER_SUCCESS,
    payload: SalesOrders,
});

export const listSalesOrderFailure = (error) => ({
    type: LIST_SALESORDER_FAILURE,
    payload: error,
});

export const updateSalesOrderRequest = (SalesOrder) => ({
    type: UPDATE_SALESORDER_REQUEST,
    payload: SalesOrder,
});

export const updateSalesOrderSuccess = (SalesOrder) => ({
    type: UPDATE_SALESORDER_SUCCESS,
    payload: SalesOrder,
});

export const updateSalesOrderFailure = (error) => ({
    type: UPDATE_SALESORDER_FAILURE,
    payload: error,
});

export const deleteSalesOrderRequest = (SalesOrder) => ({
    type: DELETE_SALESORDER_REQUEST,
    payload: SalesOrder,
});

export const deleteSalesOrderSuccess = (SalesOrder) => ({
    type: DELETE_SALESORDER_SUCCESS,
    payload: SalesOrder,
});

export const deleteSalesOrderFailure = (error) => ({
    type: DELETE_SALESORDER_FAILURE,
    payload: error,
});
