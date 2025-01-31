// defines the Redux Actions for Border

// Border

export const FETCH_BORDER_REQUEST = 'FETCH_BORDER_REQUEST';
export const FETCH_BORDER_SUCCESS = 'FETCH_BORDER_SUCCESS';
export const FETCH_BORDER_FAILURE = 'FETCH_BORDER_FAILURE';

export const ADD_BORDER_REQUEST = 'ADD_BORDER_REQUEST';
export const ADD_BORDER_SUCCESS = 'ADD_BORDER_SUCCESS';
export const ADD_BORDER_FAILURE = 'ADD_BORDER_FAILURE';

export const UPDATE_BORDER_REQUEST = 'UPDATE_BORDER_REQUEST';
export const UPDATE_BORDER_SUCCESS = 'UPDATE_BORDER_SUCCESS';
export const UPDATE_BORDER_FAILURE = 'UPDATE_BORDER_FAILURE';

export const DELETE_BORDER_REQUEST = 'DELETE_BORDER_REQUEST';
export const DELETE_BORDER_SUCCESS = 'DELETE_BORDER_SUCCESS';
export const DELETE_BORDER_FAILURE = 'DELETE_BORDER_FAILURE';

export const LIST_BORDER_REQUEST = 'LIST_BORDER_REQUEST';
export const LIST_BORDER_SUCCESS = 'LIST_BORDER_SUCCESS';
export const LIST_BORDER_FAILURE = 'LIST_BORDER_FAILURE';

export const addBorderRequest = () => ({
    type: ADD_BORDER_REQUEST,
});

export const addBorderSuccess = (Borders) => ({
    type: ADD_BORDER_SUCCESS,
    payload: Borders,
});

export const addBorderFailure = (error) => ({
    type: ADD_BORDER_FAILURE,
    payload: error,
});


export const fetchBorderRequest = () => ({
    type: FETCH_BORDER_REQUEST,
});

export const fetchBorderSuccess = (Borders) => ({
    type: FETCH_BORDER_SUCCESS,
    payload: Borders,
});

export const fetchBorderFailure = (error) => ({
    type: FETCH_BORDER_FAILURE,
    payload: error,
});

export const listBorderRequest = () => ({
    type: LIST_BORDER_REQUEST,
});

export const listBorderSuccess = (Borders) => ({
    type: LIST_BORDER_SUCCESS,
    payload: Borders,
});

export const listBorderFailure = (error) => ({
    type: LIST_BORDER_FAILURE,
    payload: error,
});

export const updateBorderRequest = (Border) => ({
    type: UPDATE_BORDER_REQUEST,
    payload: Border,
});

export const updateBorderSuccess = (Border) => ({
    type: UPDATE_BORDER_SUCCESS,
    payload: Border,
});

export const updateBorderFailure = (error) => ({
    type: UPDATE_BORDER_FAILURE,
    payload: error,
});

export const deleteBorderRequest = (Border) => ({
    type: DELETE_BORDER_REQUEST,
    payload: Border,
});

export const deleteBorderSuccess = (Border) => ({
    type: DELETE_BORDER_SUCCESS,
    payload: Border,
});

export const deleteBorderFailure = (error) => ({
    type: DELETE_BORDER_FAILURE,
    payload: error,
});
