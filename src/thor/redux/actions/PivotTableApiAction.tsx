// defines the Redux Actions for PivotTable

// PivotTable

export const FETCH_PIVOTTABLE_REQUEST = 'FETCH_PIVOTTABLE_REQUEST';
export const FETCH_PIVOTTABLE_SUCCESS = 'FETCH_PIVOTTABLE_SUCCESS';
export const FETCH_PIVOTTABLE_FAILURE = 'FETCH_PIVOTTABLE_FAILURE';

export const ADD_PIVOTTABLE_REQUEST = 'ADD_PIVOTTABLE_REQUEST';
export const ADD_PIVOTTABLE_SUCCESS = 'ADD_PIVOTTABLE_SUCCESS';
export const ADD_PIVOTTABLE_FAILURE = 'ADD_PIVOTTABLE_FAILURE';

export const UPDATE_PIVOTTABLE_REQUEST = 'UPDATE_PIVOTTABLE_REQUEST';
export const UPDATE_PIVOTTABLE_SUCCESS = 'UPDATE_PIVOTTABLE_SUCCESS';
export const UPDATE_PIVOTTABLE_FAILURE = 'UPDATE_PIVOTTABLE_FAILURE';

export const DELETE_PIVOTTABLE_REQUEST = 'DELETE_PIVOTTABLE_REQUEST';
export const DELETE_PIVOTTABLE_SUCCESS = 'DELETE_PIVOTTABLE_SUCCESS';
export const DELETE_PIVOTTABLE_FAILURE = 'DELETE_PIVOTTABLE_FAILURE';

export const LIST_PIVOTTABLE_REQUEST = 'LIST_PIVOTTABLE_REQUEST';
export const LIST_PIVOTTABLE_SUCCESS = 'LIST_PIVOTTABLE_SUCCESS';
export const LIST_PIVOTTABLE_FAILURE = 'LIST_PIVOTTABLE_FAILURE';

export const addPivotTableRequest = () => ({
    type: ADD_PIVOTTABLE_REQUEST,
});

export const addPivotTableSuccess = (PivotTables) => ({
    type: ADD_PIVOTTABLE_SUCCESS,
    payload: PivotTables,
});

export const addPivotTableFailure = (error) => ({
    type: ADD_PIVOTTABLE_FAILURE,
    payload: error,
});


export const fetchPivotTableRequest = () => ({
    type: FETCH_PIVOTTABLE_REQUEST,
});

export const fetchPivotTableSuccess = (PivotTables) => ({
    type: FETCH_PIVOTTABLE_SUCCESS,
    payload: PivotTables,
});

export const fetchPivotTableFailure = (error) => ({
    type: FETCH_PIVOTTABLE_FAILURE,
    payload: error,
});

export const listPivotTableRequest = () => ({
    type: LIST_PIVOTTABLE_REQUEST,
});

export const listPivotTableSuccess = (PivotTables) => ({
    type: LIST_PIVOTTABLE_SUCCESS,
    payload: PivotTables,
});

export const listPivotTableFailure = (error) => ({
    type: LIST_PIVOTTABLE_FAILURE,
    payload: error,
});

export const updatePivotTableRequest = (PivotTable) => ({
    type: UPDATE_PIVOTTABLE_REQUEST,
    payload: PivotTable,
});

export const updatePivotTableSuccess = (PivotTable) => ({
    type: UPDATE_PIVOTTABLE_SUCCESS,
    payload: PivotTable,
});

export const updatePivotTableFailure = (error) => ({
    type: UPDATE_PIVOTTABLE_FAILURE,
    payload: error,
});

export const deletePivotTableRequest = (PivotTable) => ({
    type: DELETE_PIVOTTABLE_REQUEST,
    payload: PivotTable,
});

export const deletePivotTableSuccess = (PivotTable) => ({
    type: DELETE_PIVOTTABLE_SUCCESS,
    payload: PivotTable,
});

export const deletePivotTableFailure = (error) => ({
    type: DELETE_PIVOTTABLE_FAILURE,
    payload: error,
});
