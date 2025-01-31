// defines the Redux Actions for OasParameter

// OasParameter

export const FETCH_OASPARAMETER_REQUEST = 'FETCH_OASPARAMETER_REQUEST';
export const FETCH_OASPARAMETER_SUCCESS = 'FETCH_OASPARAMETER_SUCCESS';
export const FETCH_OASPARAMETER_FAILURE = 'FETCH_OASPARAMETER_FAILURE';

export const ADD_OASPARAMETER_REQUEST = 'ADD_OASPARAMETER_REQUEST';
export const ADD_OASPARAMETER_SUCCESS = 'ADD_OASPARAMETER_SUCCESS';
export const ADD_OASPARAMETER_FAILURE = 'ADD_OASPARAMETER_FAILURE';

export const UPDATE_OASPARAMETER_REQUEST = 'UPDATE_OASPARAMETER_REQUEST';
export const UPDATE_OASPARAMETER_SUCCESS = 'UPDATE_OASPARAMETER_SUCCESS';
export const UPDATE_OASPARAMETER_FAILURE = 'UPDATE_OASPARAMETER_FAILURE';

export const DELETE_OASPARAMETER_REQUEST = 'DELETE_OASPARAMETER_REQUEST';
export const DELETE_OASPARAMETER_SUCCESS = 'DELETE_OASPARAMETER_SUCCESS';
export const DELETE_OASPARAMETER_FAILURE = 'DELETE_OASPARAMETER_FAILURE';

export const LIST_OASPARAMETER_REQUEST = 'LIST_OASPARAMETER_REQUEST';
export const LIST_OASPARAMETER_SUCCESS = 'LIST_OASPARAMETER_SUCCESS';
export const LIST_OASPARAMETER_FAILURE = 'LIST_OASPARAMETER_FAILURE';

export const addOasParameterRequest = () => ({
    type: ADD_OASPARAMETER_REQUEST,
});

export const addOasParameterSuccess = (OasParameters) => ({
    type: ADD_OASPARAMETER_SUCCESS,
    payload: OasParameters,
});

export const addOasParameterFailure = (error) => ({
    type: ADD_OASPARAMETER_FAILURE,
    payload: error,
});


export const fetchOasParameterRequest = () => ({
    type: FETCH_OASPARAMETER_REQUEST,
});

export const fetchOasParameterSuccess = (OasParameters) => ({
    type: FETCH_OASPARAMETER_SUCCESS,
    payload: OasParameters,
});

export const fetchOasParameterFailure = (error) => ({
    type: FETCH_OASPARAMETER_FAILURE,
    payload: error,
});

export const listOasParameterRequest = () => ({
    type: LIST_OASPARAMETER_REQUEST,
});

export const listOasParameterSuccess = (OasParameters) => ({
    type: LIST_OASPARAMETER_SUCCESS,
    payload: OasParameters,
});

export const listOasParameterFailure = (error) => ({
    type: LIST_OASPARAMETER_FAILURE,
    payload: error,
});

export const updateOasParameterRequest = (OasParameter) => ({
    type: UPDATE_OASPARAMETER_REQUEST,
    payload: OasParameter,
});

export const updateOasParameterSuccess = (OasParameter) => ({
    type: UPDATE_OASPARAMETER_SUCCESS,
    payload: OasParameter,
});

export const updateOasParameterFailure = (error) => ({
    type: UPDATE_OASPARAMETER_FAILURE,
    payload: error,
});

export const deleteOasParameterRequest = (OasParameter) => ({
    type: DELETE_OASPARAMETER_REQUEST,
    payload: OasParameter,
});

export const deleteOasParameterSuccess = (OasParameter) => ({
    type: DELETE_OASPARAMETER_SUCCESS,
    payload: OasParameter,
});

export const deleteOasParameterFailure = (error) => ({
    type: DELETE_OASPARAMETER_FAILURE,
    payload: error,
});
