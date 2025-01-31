// defines the Redux Actions for OasComponents

// OasComponents

export const FETCH_OASCOMPONENTS_REQUEST = 'FETCH_OASCOMPONENTS_REQUEST';
export const FETCH_OASCOMPONENTS_SUCCESS = 'FETCH_OASCOMPONENTS_SUCCESS';
export const FETCH_OASCOMPONENTS_FAILURE = 'FETCH_OASCOMPONENTS_FAILURE';

export const ADD_OASCOMPONENTS_REQUEST = 'ADD_OASCOMPONENTS_REQUEST';
export const ADD_OASCOMPONENTS_SUCCESS = 'ADD_OASCOMPONENTS_SUCCESS';
export const ADD_OASCOMPONENTS_FAILURE = 'ADD_OASCOMPONENTS_FAILURE';

export const UPDATE_OASCOMPONENTS_REQUEST = 'UPDATE_OASCOMPONENTS_REQUEST';
export const UPDATE_OASCOMPONENTS_SUCCESS = 'UPDATE_OASCOMPONENTS_SUCCESS';
export const UPDATE_OASCOMPONENTS_FAILURE = 'UPDATE_OASCOMPONENTS_FAILURE';

export const DELETE_OASCOMPONENTS_REQUEST = 'DELETE_OASCOMPONENTS_REQUEST';
export const DELETE_OASCOMPONENTS_SUCCESS = 'DELETE_OASCOMPONENTS_SUCCESS';
export const DELETE_OASCOMPONENTS_FAILURE = 'DELETE_OASCOMPONENTS_FAILURE';

export const LIST_OASCOMPONENTS_REQUEST = 'LIST_OASCOMPONENTS_REQUEST';
export const LIST_OASCOMPONENTS_SUCCESS = 'LIST_OASCOMPONENTS_SUCCESS';
export const LIST_OASCOMPONENTS_FAILURE = 'LIST_OASCOMPONENTS_FAILURE';

export const addOasComponentsRequest = () => ({
    type: ADD_OASCOMPONENTS_REQUEST,
});

export const addOasComponentsSuccess = (OasComponentss) => ({
    type: ADD_OASCOMPONENTS_SUCCESS,
    payload: OasComponentss,
});

export const addOasComponentsFailure = (error) => ({
    type: ADD_OASCOMPONENTS_FAILURE,
    payload: error,
});


export const fetchOasComponentsRequest = () => ({
    type: FETCH_OASCOMPONENTS_REQUEST,
});

export const fetchOasComponentsSuccess = (OasComponentss) => ({
    type: FETCH_OASCOMPONENTS_SUCCESS,
    payload: OasComponentss,
});

export const fetchOasComponentsFailure = (error) => ({
    type: FETCH_OASCOMPONENTS_FAILURE,
    payload: error,
});

export const listOasComponentsRequest = () => ({
    type: LIST_OASCOMPONENTS_REQUEST,
});

export const listOasComponentsSuccess = (OasComponentss) => ({
    type: LIST_OASCOMPONENTS_SUCCESS,
    payload: OasComponentss,
});

export const listOasComponentsFailure = (error) => ({
    type: LIST_OASCOMPONENTS_FAILURE,
    payload: error,
});

export const updateOasComponentsRequest = (OasComponents) => ({
    type: UPDATE_OASCOMPONENTS_REQUEST,
    payload: OasComponents,
});

export const updateOasComponentsSuccess = (OasComponents) => ({
    type: UPDATE_OASCOMPONENTS_SUCCESS,
    payload: OasComponents,
});

export const updateOasComponentsFailure = (error) => ({
    type: UPDATE_OASCOMPONENTS_FAILURE,
    payload: error,
});

export const deleteOasComponentsRequest = (OasComponents) => ({
    type: DELETE_OASCOMPONENTS_REQUEST,
    payload: OasComponents,
});

export const deleteOasComponentsSuccess = (OasComponents) => ({
    type: DELETE_OASCOMPONENTS_SUCCESS,
    payload: OasComponents,
});

export const deleteOasComponentsFailure = (error) => ({
    type: DELETE_OASCOMPONENTS_FAILURE,
    payload: error,
});
