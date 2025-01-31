// defines the Redux Actions for NamedRange

// NamedRange

export const FETCH_NAMEDRANGE_REQUEST = 'FETCH_NAMEDRANGE_REQUEST';
export const FETCH_NAMEDRANGE_SUCCESS = 'FETCH_NAMEDRANGE_SUCCESS';
export const FETCH_NAMEDRANGE_FAILURE = 'FETCH_NAMEDRANGE_FAILURE';

export const ADD_NAMEDRANGE_REQUEST = 'ADD_NAMEDRANGE_REQUEST';
export const ADD_NAMEDRANGE_SUCCESS = 'ADD_NAMEDRANGE_SUCCESS';
export const ADD_NAMEDRANGE_FAILURE = 'ADD_NAMEDRANGE_FAILURE';

export const UPDATE_NAMEDRANGE_REQUEST = 'UPDATE_NAMEDRANGE_REQUEST';
export const UPDATE_NAMEDRANGE_SUCCESS = 'UPDATE_NAMEDRANGE_SUCCESS';
export const UPDATE_NAMEDRANGE_FAILURE = 'UPDATE_NAMEDRANGE_FAILURE';

export const DELETE_NAMEDRANGE_REQUEST = 'DELETE_NAMEDRANGE_REQUEST';
export const DELETE_NAMEDRANGE_SUCCESS = 'DELETE_NAMEDRANGE_SUCCESS';
export const DELETE_NAMEDRANGE_FAILURE = 'DELETE_NAMEDRANGE_FAILURE';

export const LIST_NAMEDRANGE_REQUEST = 'LIST_NAMEDRANGE_REQUEST';
export const LIST_NAMEDRANGE_SUCCESS = 'LIST_NAMEDRANGE_SUCCESS';
export const LIST_NAMEDRANGE_FAILURE = 'LIST_NAMEDRANGE_FAILURE';

export const addNamedRangeRequest = () => ({
    type: ADD_NAMEDRANGE_REQUEST,
});

export const addNamedRangeSuccess = (NamedRanges) => ({
    type: ADD_NAMEDRANGE_SUCCESS,
    payload: NamedRanges,
});

export const addNamedRangeFailure = (error) => ({
    type: ADD_NAMEDRANGE_FAILURE,
    payload: error,
});


export const fetchNamedRangeRequest = () => ({
    type: FETCH_NAMEDRANGE_REQUEST,
});

export const fetchNamedRangeSuccess = (NamedRanges) => ({
    type: FETCH_NAMEDRANGE_SUCCESS,
    payload: NamedRanges,
});

export const fetchNamedRangeFailure = (error) => ({
    type: FETCH_NAMEDRANGE_FAILURE,
    payload: error,
});

export const listNamedRangeRequest = () => ({
    type: LIST_NAMEDRANGE_REQUEST,
});

export const listNamedRangeSuccess = (NamedRanges) => ({
    type: LIST_NAMEDRANGE_SUCCESS,
    payload: NamedRanges,
});

export const listNamedRangeFailure = (error) => ({
    type: LIST_NAMEDRANGE_FAILURE,
    payload: error,
});

export const updateNamedRangeRequest = (NamedRange) => ({
    type: UPDATE_NAMEDRANGE_REQUEST,
    payload: NamedRange,
});

export const updateNamedRangeSuccess = (NamedRange) => ({
    type: UPDATE_NAMEDRANGE_SUCCESS,
    payload: NamedRange,
});

export const updateNamedRangeFailure = (error) => ({
    type: UPDATE_NAMEDRANGE_FAILURE,
    payload: error,
});

export const deleteNamedRangeRequest = (NamedRange) => ({
    type: DELETE_NAMEDRANGE_REQUEST,
    payload: NamedRange,
});

export const deleteNamedRangeSuccess = (NamedRange) => ({
    type: DELETE_NAMEDRANGE_SUCCESS,
    payload: NamedRange,
});

export const deleteNamedRangeFailure = (error) => ({
    type: DELETE_NAMEDRANGE_FAILURE,
    payload: error,
});
