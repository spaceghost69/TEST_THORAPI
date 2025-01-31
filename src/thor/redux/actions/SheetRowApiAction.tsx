// defines the Redux Actions for SheetRow

// SheetRow

export const FETCH_SHEETROW_REQUEST = 'FETCH_SHEETROW_REQUEST';
export const FETCH_SHEETROW_SUCCESS = 'FETCH_SHEETROW_SUCCESS';
export const FETCH_SHEETROW_FAILURE = 'FETCH_SHEETROW_FAILURE';

export const ADD_SHEETROW_REQUEST = 'ADD_SHEETROW_REQUEST';
export const ADD_SHEETROW_SUCCESS = 'ADD_SHEETROW_SUCCESS';
export const ADD_SHEETROW_FAILURE = 'ADD_SHEETROW_FAILURE';

export const UPDATE_SHEETROW_REQUEST = 'UPDATE_SHEETROW_REQUEST';
export const UPDATE_SHEETROW_SUCCESS = 'UPDATE_SHEETROW_SUCCESS';
export const UPDATE_SHEETROW_FAILURE = 'UPDATE_SHEETROW_FAILURE';

export const DELETE_SHEETROW_REQUEST = 'DELETE_SHEETROW_REQUEST';
export const DELETE_SHEETROW_SUCCESS = 'DELETE_SHEETROW_SUCCESS';
export const DELETE_SHEETROW_FAILURE = 'DELETE_SHEETROW_FAILURE';

export const LIST_SHEETROW_REQUEST = 'LIST_SHEETROW_REQUEST';
export const LIST_SHEETROW_SUCCESS = 'LIST_SHEETROW_SUCCESS';
export const LIST_SHEETROW_FAILURE = 'LIST_SHEETROW_FAILURE';

export const addSheetRowRequest = () => ({
    type: ADD_SHEETROW_REQUEST,
});

export const addSheetRowSuccess = (SheetRows) => ({
    type: ADD_SHEETROW_SUCCESS,
    payload: SheetRows,
});

export const addSheetRowFailure = (error) => ({
    type: ADD_SHEETROW_FAILURE,
    payload: error,
});


export const fetchSheetRowRequest = () => ({
    type: FETCH_SHEETROW_REQUEST,
});

export const fetchSheetRowSuccess = (SheetRows) => ({
    type: FETCH_SHEETROW_SUCCESS,
    payload: SheetRows,
});

export const fetchSheetRowFailure = (error) => ({
    type: FETCH_SHEETROW_FAILURE,
    payload: error,
});

export const listSheetRowRequest = () => ({
    type: LIST_SHEETROW_REQUEST,
});

export const listSheetRowSuccess = (SheetRows) => ({
    type: LIST_SHEETROW_SUCCESS,
    payload: SheetRows,
});

export const listSheetRowFailure = (error) => ({
    type: LIST_SHEETROW_FAILURE,
    payload: error,
});

export const updateSheetRowRequest = (SheetRow) => ({
    type: UPDATE_SHEETROW_REQUEST,
    payload: SheetRow,
});

export const updateSheetRowSuccess = (SheetRow) => ({
    type: UPDATE_SHEETROW_SUCCESS,
    payload: SheetRow,
});

export const updateSheetRowFailure = (error) => ({
    type: UPDATE_SHEETROW_FAILURE,
    payload: error,
});

export const deleteSheetRowRequest = (SheetRow) => ({
    type: DELETE_SHEETROW_REQUEST,
    payload: SheetRow,
});

export const deleteSheetRowSuccess = (SheetRow) => ({
    type: DELETE_SHEETROW_SUCCESS,
    payload: SheetRow,
});

export const deleteSheetRowFailure = (error) => ({
    type: DELETE_SHEETROW_FAILURE,
    payload: error,
});
