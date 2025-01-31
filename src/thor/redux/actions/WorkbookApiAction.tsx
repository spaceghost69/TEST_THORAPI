// defines the Redux Actions for Workbook

// Workbook

export const FETCH_WORKBOOK_REQUEST = 'FETCH_WORKBOOK_REQUEST';
export const FETCH_WORKBOOK_SUCCESS = 'FETCH_WORKBOOK_SUCCESS';
export const FETCH_WORKBOOK_FAILURE = 'FETCH_WORKBOOK_FAILURE';

export const ADD_WORKBOOK_REQUEST = 'ADD_WORKBOOK_REQUEST';
export const ADD_WORKBOOK_SUCCESS = 'ADD_WORKBOOK_SUCCESS';
export const ADD_WORKBOOK_FAILURE = 'ADD_WORKBOOK_FAILURE';

export const UPDATE_WORKBOOK_REQUEST = 'UPDATE_WORKBOOK_REQUEST';
export const UPDATE_WORKBOOK_SUCCESS = 'UPDATE_WORKBOOK_SUCCESS';
export const UPDATE_WORKBOOK_FAILURE = 'UPDATE_WORKBOOK_FAILURE';

export const DELETE_WORKBOOK_REQUEST = 'DELETE_WORKBOOK_REQUEST';
export const DELETE_WORKBOOK_SUCCESS = 'DELETE_WORKBOOK_SUCCESS';
export const DELETE_WORKBOOK_FAILURE = 'DELETE_WORKBOOK_FAILURE';

export const LIST_WORKBOOK_REQUEST = 'LIST_WORKBOOK_REQUEST';
export const LIST_WORKBOOK_SUCCESS = 'LIST_WORKBOOK_SUCCESS';
export const LIST_WORKBOOK_FAILURE = 'LIST_WORKBOOK_FAILURE';

export const addWorkbookRequest = () => ({
    type: ADD_WORKBOOK_REQUEST,
});

export const addWorkbookSuccess = (Workbooks) => ({
    type: ADD_WORKBOOK_SUCCESS,
    payload: Workbooks,
});

export const addWorkbookFailure = (error) => ({
    type: ADD_WORKBOOK_FAILURE,
    payload: error,
});


export const fetchWorkbookRequest = () => ({
    type: FETCH_WORKBOOK_REQUEST,
});

export const fetchWorkbookSuccess = (Workbooks) => ({
    type: FETCH_WORKBOOK_SUCCESS,
    payload: Workbooks,
});

export const fetchWorkbookFailure = (error) => ({
    type: FETCH_WORKBOOK_FAILURE,
    payload: error,
});

export const listWorkbookRequest = () => ({
    type: LIST_WORKBOOK_REQUEST,
});

export const listWorkbookSuccess = (Workbooks) => ({
    type: LIST_WORKBOOK_SUCCESS,
    payload: Workbooks,
});

export const listWorkbookFailure = (error) => ({
    type: LIST_WORKBOOK_FAILURE,
    payload: error,
});

export const updateWorkbookRequest = (Workbook) => ({
    type: UPDATE_WORKBOOK_REQUEST,
    payload: Workbook,
});

export const updateWorkbookSuccess = (Workbook) => ({
    type: UPDATE_WORKBOOK_SUCCESS,
    payload: Workbook,
});

export const updateWorkbookFailure = (error) => ({
    type: UPDATE_WORKBOOK_FAILURE,
    payload: error,
});

export const deleteWorkbookRequest = (Workbook) => ({
    type: DELETE_WORKBOOK_REQUEST,
    payload: Workbook,
});

export const deleteWorkbookSuccess = (Workbook) => ({
    type: DELETE_WORKBOOK_SUCCESS,
    payload: Workbook,
});

export const deleteWorkbookFailure = (error) => ({
    type: DELETE_WORKBOOK_FAILURE,
    payload: error,
});
