// defines the Redux Actions for MergeRange

// MergeRange

export const FETCH_MERGERANGE_REQUEST = 'FETCH_MERGERANGE_REQUEST';
export const FETCH_MERGERANGE_SUCCESS = 'FETCH_MERGERANGE_SUCCESS';
export const FETCH_MERGERANGE_FAILURE = 'FETCH_MERGERANGE_FAILURE';

export const ADD_MERGERANGE_REQUEST = 'ADD_MERGERANGE_REQUEST';
export const ADD_MERGERANGE_SUCCESS = 'ADD_MERGERANGE_SUCCESS';
export const ADD_MERGERANGE_FAILURE = 'ADD_MERGERANGE_FAILURE';

export const UPDATE_MERGERANGE_REQUEST = 'UPDATE_MERGERANGE_REQUEST';
export const UPDATE_MERGERANGE_SUCCESS = 'UPDATE_MERGERANGE_SUCCESS';
export const UPDATE_MERGERANGE_FAILURE = 'UPDATE_MERGERANGE_FAILURE';

export const DELETE_MERGERANGE_REQUEST = 'DELETE_MERGERANGE_REQUEST';
export const DELETE_MERGERANGE_SUCCESS = 'DELETE_MERGERANGE_SUCCESS';
export const DELETE_MERGERANGE_FAILURE = 'DELETE_MERGERANGE_FAILURE';

export const LIST_MERGERANGE_REQUEST = 'LIST_MERGERANGE_REQUEST';
export const LIST_MERGERANGE_SUCCESS = 'LIST_MERGERANGE_SUCCESS';
export const LIST_MERGERANGE_FAILURE = 'LIST_MERGERANGE_FAILURE';

export const addMergeRangeRequest = () => ({
    type: ADD_MERGERANGE_REQUEST,
});

export const addMergeRangeSuccess = (MergeRanges) => ({
    type: ADD_MERGERANGE_SUCCESS,
    payload: MergeRanges,
});

export const addMergeRangeFailure = (error) => ({
    type: ADD_MERGERANGE_FAILURE,
    payload: error,
});


export const fetchMergeRangeRequest = () => ({
    type: FETCH_MERGERANGE_REQUEST,
});

export const fetchMergeRangeSuccess = (MergeRanges) => ({
    type: FETCH_MERGERANGE_SUCCESS,
    payload: MergeRanges,
});

export const fetchMergeRangeFailure = (error) => ({
    type: FETCH_MERGERANGE_FAILURE,
    payload: error,
});

export const listMergeRangeRequest = () => ({
    type: LIST_MERGERANGE_REQUEST,
});

export const listMergeRangeSuccess = (MergeRanges) => ({
    type: LIST_MERGERANGE_SUCCESS,
    payload: MergeRanges,
});

export const listMergeRangeFailure = (error) => ({
    type: LIST_MERGERANGE_FAILURE,
    payload: error,
});

export const updateMergeRangeRequest = (MergeRange) => ({
    type: UPDATE_MERGERANGE_REQUEST,
    payload: MergeRange,
});

export const updateMergeRangeSuccess = (MergeRange) => ({
    type: UPDATE_MERGERANGE_SUCCESS,
    payload: MergeRange,
});

export const updateMergeRangeFailure = (error) => ({
    type: UPDATE_MERGERANGE_FAILURE,
    payload: error,
});

export const deleteMergeRangeRequest = (MergeRange) => ({
    type: DELETE_MERGERANGE_REQUEST,
    payload: MergeRange,
});

export const deleteMergeRangeSuccess = (MergeRange) => ({
    type: DELETE_MERGERANGE_SUCCESS,
    payload: MergeRange,
});

export const deleteMergeRangeFailure = (error) => ({
    type: DELETE_MERGERANGE_FAILURE,
    payload: error,
});
