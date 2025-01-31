// defines the Redux Actions for OasOpenAPISpec

// OasOpenAPISpec

export const FETCH_OASOPENAPISPEC_REQUEST = 'FETCH_OASOPENAPISPEC_REQUEST';
export const FETCH_OASOPENAPISPEC_SUCCESS = 'FETCH_OASOPENAPISPEC_SUCCESS';
export const FETCH_OASOPENAPISPEC_FAILURE = 'FETCH_OASOPENAPISPEC_FAILURE';

export const ADD_OASOPENAPISPEC_REQUEST = 'ADD_OASOPENAPISPEC_REQUEST';
export const ADD_OASOPENAPISPEC_SUCCESS = 'ADD_OASOPENAPISPEC_SUCCESS';
export const ADD_OASOPENAPISPEC_FAILURE = 'ADD_OASOPENAPISPEC_FAILURE';

export const UPDATE_OASOPENAPISPEC_REQUEST = 'UPDATE_OASOPENAPISPEC_REQUEST';
export const UPDATE_OASOPENAPISPEC_SUCCESS = 'UPDATE_OASOPENAPISPEC_SUCCESS';
export const UPDATE_OASOPENAPISPEC_FAILURE = 'UPDATE_OASOPENAPISPEC_FAILURE';

export const DELETE_OASOPENAPISPEC_REQUEST = 'DELETE_OASOPENAPISPEC_REQUEST';
export const DELETE_OASOPENAPISPEC_SUCCESS = 'DELETE_OASOPENAPISPEC_SUCCESS';
export const DELETE_OASOPENAPISPEC_FAILURE = 'DELETE_OASOPENAPISPEC_FAILURE';

export const LIST_OASOPENAPISPEC_REQUEST = 'LIST_OASOPENAPISPEC_REQUEST';
export const LIST_OASOPENAPISPEC_SUCCESS = 'LIST_OASOPENAPISPEC_SUCCESS';
export const LIST_OASOPENAPISPEC_FAILURE = 'LIST_OASOPENAPISPEC_FAILURE';

export const addOasOpenAPISpecRequest = () => ({
    type: ADD_OASOPENAPISPEC_REQUEST,
});

export const addOasOpenAPISpecSuccess = (OasOpenAPISpecs) => ({
    type: ADD_OASOPENAPISPEC_SUCCESS,
    payload: OasOpenAPISpecs,
});

export const addOasOpenAPISpecFailure = (error) => ({
    type: ADD_OASOPENAPISPEC_FAILURE,
    payload: error,
});


export const fetchOasOpenAPISpecRequest = () => ({
    type: FETCH_OASOPENAPISPEC_REQUEST,
});

export const fetchOasOpenAPISpecSuccess = (OasOpenAPISpecs) => ({
    type: FETCH_OASOPENAPISPEC_SUCCESS,
    payload: OasOpenAPISpecs,
});

export const fetchOasOpenAPISpecFailure = (error) => ({
    type: FETCH_OASOPENAPISPEC_FAILURE,
    payload: error,
});

export const listOasOpenAPISpecRequest = () => ({
    type: LIST_OASOPENAPISPEC_REQUEST,
});

export const listOasOpenAPISpecSuccess = (OasOpenAPISpecs) => ({
    type: LIST_OASOPENAPISPEC_SUCCESS,
    payload: OasOpenAPISpecs,
});

export const listOasOpenAPISpecFailure = (error) => ({
    type: LIST_OASOPENAPISPEC_FAILURE,
    payload: error,
});

export const updateOasOpenAPISpecRequest = (OasOpenAPISpec) => ({
    type: UPDATE_OASOPENAPISPEC_REQUEST,
    payload: OasOpenAPISpec,
});

export const updateOasOpenAPISpecSuccess = (OasOpenAPISpec) => ({
    type: UPDATE_OASOPENAPISPEC_SUCCESS,
    payload: OasOpenAPISpec,
});

export const updateOasOpenAPISpecFailure = (error) => ({
    type: UPDATE_OASOPENAPISPEC_FAILURE,
    payload: error,
});

export const deleteOasOpenAPISpecRequest = (OasOpenAPISpec) => ({
    type: DELETE_OASOPENAPISPEC_REQUEST,
    payload: OasOpenAPISpec,
});

export const deleteOasOpenAPISpecSuccess = (OasOpenAPISpec) => ({
    type: DELETE_OASOPENAPISPEC_SUCCESS,
    payload: OasOpenAPISpec,
});

export const deleteOasOpenAPISpecFailure = (error) => ({
    type: DELETE_OASOPENAPISPEC_FAILURE,
    payload: error,
});
