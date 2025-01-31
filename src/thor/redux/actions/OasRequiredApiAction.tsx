// defines the Redux Actions for OasRequired

// OasRequired

export const FETCH_OASREQUIRED_REQUEST = 'FETCH_OASREQUIRED_REQUEST';
export const FETCH_OASREQUIRED_SUCCESS = 'FETCH_OASREQUIRED_SUCCESS';
export const FETCH_OASREQUIRED_FAILURE = 'FETCH_OASREQUIRED_FAILURE';

export const ADD_OASREQUIRED_REQUEST = 'ADD_OASREQUIRED_REQUEST';
export const ADD_OASREQUIRED_SUCCESS = 'ADD_OASREQUIRED_SUCCESS';
export const ADD_OASREQUIRED_FAILURE = 'ADD_OASREQUIRED_FAILURE';

export const UPDATE_OASREQUIRED_REQUEST = 'UPDATE_OASREQUIRED_REQUEST';
export const UPDATE_OASREQUIRED_SUCCESS = 'UPDATE_OASREQUIRED_SUCCESS';
export const UPDATE_OASREQUIRED_FAILURE = 'UPDATE_OASREQUIRED_FAILURE';

export const DELETE_OASREQUIRED_REQUEST = 'DELETE_OASREQUIRED_REQUEST';
export const DELETE_OASREQUIRED_SUCCESS = 'DELETE_OASREQUIRED_SUCCESS';
export const DELETE_OASREQUIRED_FAILURE = 'DELETE_OASREQUIRED_FAILURE';

export const LIST_OASREQUIRED_REQUEST = 'LIST_OASREQUIRED_REQUEST';
export const LIST_OASREQUIRED_SUCCESS = 'LIST_OASREQUIRED_SUCCESS';
export const LIST_OASREQUIRED_FAILURE = 'LIST_OASREQUIRED_FAILURE';

export const addOasRequiredRequest = () => ({
    type: ADD_OASREQUIRED_REQUEST,
});

export const addOasRequiredSuccess = (OasRequireds) => ({
    type: ADD_OASREQUIRED_SUCCESS,
    payload: OasRequireds,
});

export const addOasRequiredFailure = (error) => ({
    type: ADD_OASREQUIRED_FAILURE,
    payload: error,
});


export const fetchOasRequiredRequest = () => ({
    type: FETCH_OASREQUIRED_REQUEST,
});

export const fetchOasRequiredSuccess = (OasRequireds) => ({
    type: FETCH_OASREQUIRED_SUCCESS,
    payload: OasRequireds,
});

export const fetchOasRequiredFailure = (error) => ({
    type: FETCH_OASREQUIRED_FAILURE,
    payload: error,
});

export const listOasRequiredRequest = () => ({
    type: LIST_OASREQUIRED_REQUEST,
});

export const listOasRequiredSuccess = (OasRequireds) => ({
    type: LIST_OASREQUIRED_SUCCESS,
    payload: OasRequireds,
});

export const listOasRequiredFailure = (error) => ({
    type: LIST_OASREQUIRED_FAILURE,
    payload: error,
});

export const updateOasRequiredRequest = (OasRequired) => ({
    type: UPDATE_OASREQUIRED_REQUEST,
    payload: OasRequired,
});

export const updateOasRequiredSuccess = (OasRequired) => ({
    type: UPDATE_OASREQUIRED_SUCCESS,
    payload: OasRequired,
});

export const updateOasRequiredFailure = (error) => ({
    type: UPDATE_OASREQUIRED_FAILURE,
    payload: error,
});

export const deleteOasRequiredRequest = (OasRequired) => ({
    type: DELETE_OASREQUIRED_REQUEST,
    payload: OasRequired,
});

export const deleteOasRequiredSuccess = (OasRequired) => ({
    type: DELETE_OASREQUIRED_SUCCESS,
    payload: OasRequired,
});

export const deleteOasRequiredFailure = (error) => ({
    type: DELETE_OASREQUIRED_FAILURE,
    payload: error,
});
