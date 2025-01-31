// defines the Redux Actions for Sheet

// Sheet

export const FETCH_SHEET_REQUEST = 'FETCH_SHEET_REQUEST';
export const FETCH_SHEET_SUCCESS = 'FETCH_SHEET_SUCCESS';
export const FETCH_SHEET_FAILURE = 'FETCH_SHEET_FAILURE';

export const ADD_SHEET_REQUEST = 'ADD_SHEET_REQUEST';
export const ADD_SHEET_SUCCESS = 'ADD_SHEET_SUCCESS';
export const ADD_SHEET_FAILURE = 'ADD_SHEET_FAILURE';

export const UPDATE_SHEET_REQUEST = 'UPDATE_SHEET_REQUEST';
export const UPDATE_SHEET_SUCCESS = 'UPDATE_SHEET_SUCCESS';
export const UPDATE_SHEET_FAILURE = 'UPDATE_SHEET_FAILURE';

export const DELETE_SHEET_REQUEST = 'DELETE_SHEET_REQUEST';
export const DELETE_SHEET_SUCCESS = 'DELETE_SHEET_SUCCESS';
export const DELETE_SHEET_FAILURE = 'DELETE_SHEET_FAILURE';

export const LIST_SHEET_REQUEST = 'LIST_SHEET_REQUEST';
export const LIST_SHEET_SUCCESS = 'LIST_SHEET_SUCCESS';
export const LIST_SHEET_FAILURE = 'LIST_SHEET_FAILURE';

export const addSheetRequest = () => ({
    type: ADD_SHEET_REQUEST,
});

export const addSheetSuccess = (Sheets) => ({
    type: ADD_SHEET_SUCCESS,
    payload: Sheets,
});

export const addSheetFailure = (error) => ({
    type: ADD_SHEET_FAILURE,
    payload: error,
});


export const fetchSheetRequest = () => ({
    type: FETCH_SHEET_REQUEST,
});

export const fetchSheetSuccess = (Sheets) => ({
    type: FETCH_SHEET_SUCCESS,
    payload: Sheets,
});

export const fetchSheetFailure = (error) => ({
    type: FETCH_SHEET_FAILURE,
    payload: error,
});

export const listSheetRequest = () => ({
    type: LIST_SHEET_REQUEST,
});

export const listSheetSuccess = (Sheets) => ({
    type: LIST_SHEET_SUCCESS,
    payload: Sheets,
});

export const listSheetFailure = (error) => ({
    type: LIST_SHEET_FAILURE,
    payload: error,
});

export const updateSheetRequest = (Sheet) => ({
    type: UPDATE_SHEET_REQUEST,
    payload: Sheet,
});

export const updateSheetSuccess = (Sheet) => ({
    type: UPDATE_SHEET_SUCCESS,
    payload: Sheet,
});

export const updateSheetFailure = (error) => ({
    type: UPDATE_SHEET_FAILURE,
    payload: error,
});

export const deleteSheetRequest = (Sheet) => ({
    type: DELETE_SHEET_REQUEST,
    payload: Sheet,
});

export const deleteSheetSuccess = (Sheet) => ({
    type: DELETE_SHEET_SUCCESS,
    payload: Sheet,
});

export const deleteSheetFailure = (error) => ({
    type: DELETE_SHEET_FAILURE,
    payload: error,
});
