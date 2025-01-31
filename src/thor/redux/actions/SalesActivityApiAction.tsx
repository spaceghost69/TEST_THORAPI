// defines the Redux Actions for SalesActivity

// SalesActivity

export const FETCH_SALESACTIVITY_REQUEST = 'FETCH_SALESACTIVITY_REQUEST';
export const FETCH_SALESACTIVITY_SUCCESS = 'FETCH_SALESACTIVITY_SUCCESS';
export const FETCH_SALESACTIVITY_FAILURE = 'FETCH_SALESACTIVITY_FAILURE';

export const ADD_SALESACTIVITY_REQUEST = 'ADD_SALESACTIVITY_REQUEST';
export const ADD_SALESACTIVITY_SUCCESS = 'ADD_SALESACTIVITY_SUCCESS';
export const ADD_SALESACTIVITY_FAILURE = 'ADD_SALESACTIVITY_FAILURE';

export const UPDATE_SALESACTIVITY_REQUEST = 'UPDATE_SALESACTIVITY_REQUEST';
export const UPDATE_SALESACTIVITY_SUCCESS = 'UPDATE_SALESACTIVITY_SUCCESS';
export const UPDATE_SALESACTIVITY_FAILURE = 'UPDATE_SALESACTIVITY_FAILURE';

export const DELETE_SALESACTIVITY_REQUEST = 'DELETE_SALESACTIVITY_REQUEST';
export const DELETE_SALESACTIVITY_SUCCESS = 'DELETE_SALESACTIVITY_SUCCESS';
export const DELETE_SALESACTIVITY_FAILURE = 'DELETE_SALESACTIVITY_FAILURE';

export const LIST_SALESACTIVITY_REQUEST = 'LIST_SALESACTIVITY_REQUEST';
export const LIST_SALESACTIVITY_SUCCESS = 'LIST_SALESACTIVITY_SUCCESS';
export const LIST_SALESACTIVITY_FAILURE = 'LIST_SALESACTIVITY_FAILURE';

export const addSalesActivityRequest = () => ({
    type: ADD_SALESACTIVITY_REQUEST,
});

export const addSalesActivitySuccess = (SalesActivitys) => ({
    type: ADD_SALESACTIVITY_SUCCESS,
    payload: SalesActivitys,
});

export const addSalesActivityFailure = (error) => ({
    type: ADD_SALESACTIVITY_FAILURE,
    payload: error,
});


export const fetchSalesActivityRequest = () => ({
    type: FETCH_SALESACTIVITY_REQUEST,
});

export const fetchSalesActivitySuccess = (SalesActivitys) => ({
    type: FETCH_SALESACTIVITY_SUCCESS,
    payload: SalesActivitys,
});

export const fetchSalesActivityFailure = (error) => ({
    type: FETCH_SALESACTIVITY_FAILURE,
    payload: error,
});

export const listSalesActivityRequest = () => ({
    type: LIST_SALESACTIVITY_REQUEST,
});

export const listSalesActivitySuccess = (SalesActivitys) => ({
    type: LIST_SALESACTIVITY_SUCCESS,
    payload: SalesActivitys,
});

export const listSalesActivityFailure = (error) => ({
    type: LIST_SALESACTIVITY_FAILURE,
    payload: error,
});

export const updateSalesActivityRequest = (SalesActivity) => ({
    type: UPDATE_SALESACTIVITY_REQUEST,
    payload: SalesActivity,
});

export const updateSalesActivitySuccess = (SalesActivity) => ({
    type: UPDATE_SALESACTIVITY_SUCCESS,
    payload: SalesActivity,
});

export const updateSalesActivityFailure = (error) => ({
    type: UPDATE_SALESACTIVITY_FAILURE,
    payload: error,
});

export const deleteSalesActivityRequest = (SalesActivity) => ({
    type: DELETE_SALESACTIVITY_REQUEST,
    payload: SalesActivity,
});

export const deleteSalesActivitySuccess = (SalesActivity) => ({
    type: DELETE_SALESACTIVITY_SUCCESS,
    payload: SalesActivity,
});

export const deleteSalesActivityFailure = (error) => ({
    type: DELETE_SALESACTIVITY_FAILURE,
    payload: error,
});
