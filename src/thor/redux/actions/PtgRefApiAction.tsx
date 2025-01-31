// defines the Redux Actions for PtgRef

// PtgRef

export const FETCH_PTGREF_REQUEST = 'FETCH_PTGREF_REQUEST';
export const FETCH_PTGREF_SUCCESS = 'FETCH_PTGREF_SUCCESS';
export const FETCH_PTGREF_FAILURE = 'FETCH_PTGREF_FAILURE';

export const ADD_PTGREF_REQUEST = 'ADD_PTGREF_REQUEST';
export const ADD_PTGREF_SUCCESS = 'ADD_PTGREF_SUCCESS';
export const ADD_PTGREF_FAILURE = 'ADD_PTGREF_FAILURE';

export const UPDATE_PTGREF_REQUEST = 'UPDATE_PTGREF_REQUEST';
export const UPDATE_PTGREF_SUCCESS = 'UPDATE_PTGREF_SUCCESS';
export const UPDATE_PTGREF_FAILURE = 'UPDATE_PTGREF_FAILURE';

export const DELETE_PTGREF_REQUEST = 'DELETE_PTGREF_REQUEST';
export const DELETE_PTGREF_SUCCESS = 'DELETE_PTGREF_SUCCESS';
export const DELETE_PTGREF_FAILURE = 'DELETE_PTGREF_FAILURE';

export const LIST_PTGREF_REQUEST = 'LIST_PTGREF_REQUEST';
export const LIST_PTGREF_SUCCESS = 'LIST_PTGREF_SUCCESS';
export const LIST_PTGREF_FAILURE = 'LIST_PTGREF_FAILURE';

export const addPtgRefRequest = () => ({
    type: ADD_PTGREF_REQUEST,
});

export const addPtgRefSuccess = (PtgRefs) => ({
    type: ADD_PTGREF_SUCCESS,
    payload: PtgRefs,
});

export const addPtgRefFailure = (error) => ({
    type: ADD_PTGREF_FAILURE,
    payload: error,
});


export const fetchPtgRefRequest = () => ({
    type: FETCH_PTGREF_REQUEST,
});

export const fetchPtgRefSuccess = (PtgRefs) => ({
    type: FETCH_PTGREF_SUCCESS,
    payload: PtgRefs,
});

export const fetchPtgRefFailure = (error) => ({
    type: FETCH_PTGREF_FAILURE,
    payload: error,
});

export const listPtgRefRequest = () => ({
    type: LIST_PTGREF_REQUEST,
});

export const listPtgRefSuccess = (PtgRefs) => ({
    type: LIST_PTGREF_SUCCESS,
    payload: PtgRefs,
});

export const listPtgRefFailure = (error) => ({
    type: LIST_PTGREF_FAILURE,
    payload: error,
});

export const updatePtgRefRequest = (PtgRef) => ({
    type: UPDATE_PTGREF_REQUEST,
    payload: PtgRef,
});

export const updatePtgRefSuccess = (PtgRef) => ({
    type: UPDATE_PTGREF_SUCCESS,
    payload: PtgRef,
});

export const updatePtgRefFailure = (error) => ({
    type: UPDATE_PTGREF_FAILURE,
    payload: error,
});

export const deletePtgRefRequest = (PtgRef) => ({
    type: DELETE_PTGREF_REQUEST,
    payload: PtgRef,
});

export const deletePtgRefSuccess = (PtgRef) => ({
    type: DELETE_PTGREF_SUCCESS,
    payload: PtgRef,
});

export const deletePtgRefFailure = (error) => ({
    type: DELETE_PTGREF_FAILURE,
    payload: error,
});
