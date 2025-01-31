// defines the Redux Actions for Format

// Format

export const FETCH_FORMAT_REQUEST = 'FETCH_FORMAT_REQUEST';
export const FETCH_FORMAT_SUCCESS = 'FETCH_FORMAT_SUCCESS';
export const FETCH_FORMAT_FAILURE = 'FETCH_FORMAT_FAILURE';

export const ADD_FORMAT_REQUEST = 'ADD_FORMAT_REQUEST';
export const ADD_FORMAT_SUCCESS = 'ADD_FORMAT_SUCCESS';
export const ADD_FORMAT_FAILURE = 'ADD_FORMAT_FAILURE';

export const UPDATE_FORMAT_REQUEST = 'UPDATE_FORMAT_REQUEST';
export const UPDATE_FORMAT_SUCCESS = 'UPDATE_FORMAT_SUCCESS';
export const UPDATE_FORMAT_FAILURE = 'UPDATE_FORMAT_FAILURE';

export const DELETE_FORMAT_REQUEST = 'DELETE_FORMAT_REQUEST';
export const DELETE_FORMAT_SUCCESS = 'DELETE_FORMAT_SUCCESS';
export const DELETE_FORMAT_FAILURE = 'DELETE_FORMAT_FAILURE';

export const LIST_FORMAT_REQUEST = 'LIST_FORMAT_REQUEST';
export const LIST_FORMAT_SUCCESS = 'LIST_FORMAT_SUCCESS';
export const LIST_FORMAT_FAILURE = 'LIST_FORMAT_FAILURE';

export const addFormatRequest = () => ({
    type: ADD_FORMAT_REQUEST,
});

export const addFormatSuccess = (Formats) => ({
    type: ADD_FORMAT_SUCCESS,
    payload: Formats,
});

export const addFormatFailure = (error) => ({
    type: ADD_FORMAT_FAILURE,
    payload: error,
});


export const fetchFormatRequest = () => ({
    type: FETCH_FORMAT_REQUEST,
});

export const fetchFormatSuccess = (Formats) => ({
    type: FETCH_FORMAT_SUCCESS,
    payload: Formats,
});

export const fetchFormatFailure = (error) => ({
    type: FETCH_FORMAT_FAILURE,
    payload: error,
});

export const listFormatRequest = () => ({
    type: LIST_FORMAT_REQUEST,
});

export const listFormatSuccess = (Formats) => ({
    type: LIST_FORMAT_SUCCESS,
    payload: Formats,
});

export const listFormatFailure = (error) => ({
    type: LIST_FORMAT_FAILURE,
    payload: error,
});

export const updateFormatRequest = (Format) => ({
    type: UPDATE_FORMAT_REQUEST,
    payload: Format,
});

export const updateFormatSuccess = (Format) => ({
    type: UPDATE_FORMAT_SUCCESS,
    payload: Format,
});

export const updateFormatFailure = (error) => ({
    type: UPDATE_FORMAT_FAILURE,
    payload: error,
});

export const deleteFormatRequest = (Format) => ({
    type: DELETE_FORMAT_REQUEST,
    payload: Format,
});

export const deleteFormatSuccess = (Format) => ({
    type: DELETE_FORMAT_SUCCESS,
    payload: Format,
});

export const deleteFormatFailure = (error) => ({
    type: DELETE_FORMAT_FAILURE,
    payload: error,
});
