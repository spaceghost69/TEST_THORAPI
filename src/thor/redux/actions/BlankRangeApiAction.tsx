// defines the Redux Actions for BlankRange

// BlankRange

export const FETCH_BLANKRANGE_REQUEST = 'FETCH_BLANKRANGE_REQUEST';
export const FETCH_BLANKRANGE_SUCCESS = 'FETCH_BLANKRANGE_SUCCESS';
export const FETCH_BLANKRANGE_FAILURE = 'FETCH_BLANKRANGE_FAILURE';

export const ADD_BLANKRANGE_REQUEST = 'ADD_BLANKRANGE_REQUEST';
export const ADD_BLANKRANGE_SUCCESS = 'ADD_BLANKRANGE_SUCCESS';
export const ADD_BLANKRANGE_FAILURE = 'ADD_BLANKRANGE_FAILURE';

export const UPDATE_BLANKRANGE_REQUEST = 'UPDATE_BLANKRANGE_REQUEST';
export const UPDATE_BLANKRANGE_SUCCESS = 'UPDATE_BLANKRANGE_SUCCESS';
export const UPDATE_BLANKRANGE_FAILURE = 'UPDATE_BLANKRANGE_FAILURE';

export const DELETE_BLANKRANGE_REQUEST = 'DELETE_BLANKRANGE_REQUEST';
export const DELETE_BLANKRANGE_SUCCESS = 'DELETE_BLANKRANGE_SUCCESS';
export const DELETE_BLANKRANGE_FAILURE = 'DELETE_BLANKRANGE_FAILURE';

export const LIST_BLANKRANGE_REQUEST = 'LIST_BLANKRANGE_REQUEST';
export const LIST_BLANKRANGE_SUCCESS = 'LIST_BLANKRANGE_SUCCESS';
export const LIST_BLANKRANGE_FAILURE = 'LIST_BLANKRANGE_FAILURE';

export const addBlankRangeRequest = () => ({
    type: ADD_BLANKRANGE_REQUEST,
});

export const addBlankRangeSuccess = (BlankRanges) => ({
    type: ADD_BLANKRANGE_SUCCESS,
    payload: BlankRanges,
});

export const addBlankRangeFailure = (error) => ({
    type: ADD_BLANKRANGE_FAILURE,
    payload: error,
});


export const fetchBlankRangeRequest = () => ({
    type: FETCH_BLANKRANGE_REQUEST,
});

export const fetchBlankRangeSuccess = (BlankRanges) => ({
    type: FETCH_BLANKRANGE_SUCCESS,
    payload: BlankRanges,
});

export const fetchBlankRangeFailure = (error) => ({
    type: FETCH_BLANKRANGE_FAILURE,
    payload: error,
});

export const listBlankRangeRequest = () => ({
    type: LIST_BLANKRANGE_REQUEST,
});

export const listBlankRangeSuccess = (BlankRanges) => ({
    type: LIST_BLANKRANGE_SUCCESS,
    payload: BlankRanges,
});

export const listBlankRangeFailure = (error) => ({
    type: LIST_BLANKRANGE_FAILURE,
    payload: error,
});

export const updateBlankRangeRequest = (BlankRange) => ({
    type: UPDATE_BLANKRANGE_REQUEST,
    payload: BlankRange,
});

export const updateBlankRangeSuccess = (BlankRange) => ({
    type: UPDATE_BLANKRANGE_SUCCESS,
    payload: BlankRange,
});

export const updateBlankRangeFailure = (error) => ({
    type: UPDATE_BLANKRANGE_FAILURE,
    payload: error,
});

export const deleteBlankRangeRequest = (BlankRange) => ({
    type: DELETE_BLANKRANGE_REQUEST,
    payload: BlankRange,
});

export const deleteBlankRangeSuccess = (BlankRange) => ({
    type: DELETE_BLANKRANGE_SUCCESS,
    payload: BlankRange,
});

export const deleteBlankRangeFailure = (error) => ({
    type: DELETE_BLANKRANGE_FAILURE,
    payload: error,
});
