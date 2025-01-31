// defines the Redux Actions for OasSecurityScheme

// OasSecurityScheme

export const FETCH_OASSECURITYSCHEME_REQUEST = 'FETCH_OASSECURITYSCHEME_REQUEST';
export const FETCH_OASSECURITYSCHEME_SUCCESS = 'FETCH_OASSECURITYSCHEME_SUCCESS';
export const FETCH_OASSECURITYSCHEME_FAILURE = 'FETCH_OASSECURITYSCHEME_FAILURE';

export const ADD_OASSECURITYSCHEME_REQUEST = 'ADD_OASSECURITYSCHEME_REQUEST';
export const ADD_OASSECURITYSCHEME_SUCCESS = 'ADD_OASSECURITYSCHEME_SUCCESS';
export const ADD_OASSECURITYSCHEME_FAILURE = 'ADD_OASSECURITYSCHEME_FAILURE';

export const UPDATE_OASSECURITYSCHEME_REQUEST = 'UPDATE_OASSECURITYSCHEME_REQUEST';
export const UPDATE_OASSECURITYSCHEME_SUCCESS = 'UPDATE_OASSECURITYSCHEME_SUCCESS';
export const UPDATE_OASSECURITYSCHEME_FAILURE = 'UPDATE_OASSECURITYSCHEME_FAILURE';

export const DELETE_OASSECURITYSCHEME_REQUEST = 'DELETE_OASSECURITYSCHEME_REQUEST';
export const DELETE_OASSECURITYSCHEME_SUCCESS = 'DELETE_OASSECURITYSCHEME_SUCCESS';
export const DELETE_OASSECURITYSCHEME_FAILURE = 'DELETE_OASSECURITYSCHEME_FAILURE';

export const LIST_OASSECURITYSCHEME_REQUEST = 'LIST_OASSECURITYSCHEME_REQUEST';
export const LIST_OASSECURITYSCHEME_SUCCESS = 'LIST_OASSECURITYSCHEME_SUCCESS';
export const LIST_OASSECURITYSCHEME_FAILURE = 'LIST_OASSECURITYSCHEME_FAILURE';

export const addOasSecuritySchemeRequest = () => ({
    type: ADD_OASSECURITYSCHEME_REQUEST,
});

export const addOasSecuritySchemeSuccess = (OasSecuritySchemes) => ({
    type: ADD_OASSECURITYSCHEME_SUCCESS,
    payload: OasSecuritySchemes,
});

export const addOasSecuritySchemeFailure = (error) => ({
    type: ADD_OASSECURITYSCHEME_FAILURE,
    payload: error,
});


export const fetchOasSecuritySchemeRequest = () => ({
    type: FETCH_OASSECURITYSCHEME_REQUEST,
});

export const fetchOasSecuritySchemeSuccess = (OasSecuritySchemes) => ({
    type: FETCH_OASSECURITYSCHEME_SUCCESS,
    payload: OasSecuritySchemes,
});

export const fetchOasSecuritySchemeFailure = (error) => ({
    type: FETCH_OASSECURITYSCHEME_FAILURE,
    payload: error,
});

export const listOasSecuritySchemeRequest = () => ({
    type: LIST_OASSECURITYSCHEME_REQUEST,
});

export const listOasSecuritySchemeSuccess = (OasSecuritySchemes) => ({
    type: LIST_OASSECURITYSCHEME_SUCCESS,
    payload: OasSecuritySchemes,
});

export const listOasSecuritySchemeFailure = (error) => ({
    type: LIST_OASSECURITYSCHEME_FAILURE,
    payload: error,
});

export const updateOasSecuritySchemeRequest = (OasSecurityScheme) => ({
    type: UPDATE_OASSECURITYSCHEME_REQUEST,
    payload: OasSecurityScheme,
});

export const updateOasSecuritySchemeSuccess = (OasSecurityScheme) => ({
    type: UPDATE_OASSECURITYSCHEME_SUCCESS,
    payload: OasSecurityScheme,
});

export const updateOasSecuritySchemeFailure = (error) => ({
    type: UPDATE_OASSECURITYSCHEME_FAILURE,
    payload: error,
});

export const deleteOasSecuritySchemeRequest = (OasSecurityScheme) => ({
    type: DELETE_OASSECURITYSCHEME_REQUEST,
    payload: OasSecurityScheme,
});

export const deleteOasSecuritySchemeSuccess = (OasSecurityScheme) => ({
    type: DELETE_OASSECURITYSCHEME_SUCCESS,
    payload: OasSecurityScheme,
});

export const deleteOasSecuritySchemeFailure = (error) => ({
    type: DELETE_OASSECURITYSCHEME_FAILURE,
    payload: error,
});
