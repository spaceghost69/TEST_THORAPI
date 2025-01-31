// defines the Redux Actions for Ptg

// Ptg

export const FETCH_PTG_REQUEST = 'FETCH_PTG_REQUEST';
export const FETCH_PTG_SUCCESS = 'FETCH_PTG_SUCCESS';
export const FETCH_PTG_FAILURE = 'FETCH_PTG_FAILURE';

export const ADD_PTG_REQUEST = 'ADD_PTG_REQUEST';
export const ADD_PTG_SUCCESS = 'ADD_PTG_SUCCESS';
export const ADD_PTG_FAILURE = 'ADD_PTG_FAILURE';

export const UPDATE_PTG_REQUEST = 'UPDATE_PTG_REQUEST';
export const UPDATE_PTG_SUCCESS = 'UPDATE_PTG_SUCCESS';
export const UPDATE_PTG_FAILURE = 'UPDATE_PTG_FAILURE';

export const DELETE_PTG_REQUEST = 'DELETE_PTG_REQUEST';
export const DELETE_PTG_SUCCESS = 'DELETE_PTG_SUCCESS';
export const DELETE_PTG_FAILURE = 'DELETE_PTG_FAILURE';

export const LIST_PTG_REQUEST = 'LIST_PTG_REQUEST';
export const LIST_PTG_SUCCESS = 'LIST_PTG_SUCCESS';
export const LIST_PTG_FAILURE = 'LIST_PTG_FAILURE';

export const addPtgRequest = () => ({
    type: ADD_PTG_REQUEST,
});

export const addPtgSuccess = (Ptgs) => ({
    type: ADD_PTG_SUCCESS,
    payload: Ptgs,
});

export const addPtgFailure = (error) => ({
    type: ADD_PTG_FAILURE,
    payload: error,
});


export const fetchPtgRequest = () => ({
    type: FETCH_PTG_REQUEST,
});

export const fetchPtgSuccess = (Ptgs) => ({
    type: FETCH_PTG_SUCCESS,
    payload: Ptgs,
});

export const fetchPtgFailure = (error) => ({
    type: FETCH_PTG_FAILURE,
    payload: error,
});

export const listPtgRequest = () => ({
    type: LIST_PTG_REQUEST,
});

export const listPtgSuccess = (Ptgs) => ({
    type: LIST_PTG_SUCCESS,
    payload: Ptgs,
});

export const listPtgFailure = (error) => ({
    type: LIST_PTG_FAILURE,
    payload: error,
});

export const updatePtgRequest = (Ptg) => ({
    type: UPDATE_PTG_REQUEST,
    payload: Ptg,
});

export const updatePtgSuccess = (Ptg) => ({
    type: UPDATE_PTG_SUCCESS,
    payload: Ptg,
});

export const updatePtgFailure = (error) => ({
    type: UPDATE_PTG_FAILURE,
    payload: error,
});

export const deletePtgRequest = (Ptg) => ({
    type: DELETE_PTG_REQUEST,
    payload: Ptg,
});

export const deletePtgSuccess = (Ptg) => ({
    type: DELETE_PTG_SUCCESS,
    payload: Ptg,
});

export const deletePtgFailure = (error) => ({
    type: DELETE_PTG_FAILURE,
    payload: error,
});
