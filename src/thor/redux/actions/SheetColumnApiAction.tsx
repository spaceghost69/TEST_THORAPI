// defines the Redux Actions for SheetColumn

// SheetColumn

export const FETCH_SHEETCOLUMN_REQUEST = 'FETCH_SHEETCOLUMN_REQUEST';
export const FETCH_SHEETCOLUMN_SUCCESS = 'FETCH_SHEETCOLUMN_SUCCESS';
export const FETCH_SHEETCOLUMN_FAILURE = 'FETCH_SHEETCOLUMN_FAILURE';

export const ADD_SHEETCOLUMN_REQUEST = 'ADD_SHEETCOLUMN_REQUEST';
export const ADD_SHEETCOLUMN_SUCCESS = 'ADD_SHEETCOLUMN_SUCCESS';
export const ADD_SHEETCOLUMN_FAILURE = 'ADD_SHEETCOLUMN_FAILURE';

export const UPDATE_SHEETCOLUMN_REQUEST = 'UPDATE_SHEETCOLUMN_REQUEST';
export const UPDATE_SHEETCOLUMN_SUCCESS = 'UPDATE_SHEETCOLUMN_SUCCESS';
export const UPDATE_SHEETCOLUMN_FAILURE = 'UPDATE_SHEETCOLUMN_FAILURE';

export const DELETE_SHEETCOLUMN_REQUEST = 'DELETE_SHEETCOLUMN_REQUEST';
export const DELETE_SHEETCOLUMN_SUCCESS = 'DELETE_SHEETCOLUMN_SUCCESS';
export const DELETE_SHEETCOLUMN_FAILURE = 'DELETE_SHEETCOLUMN_FAILURE';

export const LIST_SHEETCOLUMN_REQUEST = 'LIST_SHEETCOLUMN_REQUEST';
export const LIST_SHEETCOLUMN_SUCCESS = 'LIST_SHEETCOLUMN_SUCCESS';
export const LIST_SHEETCOLUMN_FAILURE = 'LIST_SHEETCOLUMN_FAILURE';

export const addSheetColumnRequest = () => ({
    type: ADD_SHEETCOLUMN_REQUEST,
});

export const addSheetColumnSuccess = (SheetColumns) => ({
    type: ADD_SHEETCOLUMN_SUCCESS,
    payload: SheetColumns,
});

export const addSheetColumnFailure = (error) => ({
    type: ADD_SHEETCOLUMN_FAILURE,
    payload: error,
});


export const fetchSheetColumnRequest = () => ({
    type: FETCH_SHEETCOLUMN_REQUEST,
});

export const fetchSheetColumnSuccess = (SheetColumns) => ({
    type: FETCH_SHEETCOLUMN_SUCCESS,
    payload: SheetColumns,
});

export const fetchSheetColumnFailure = (error) => ({
    type: FETCH_SHEETCOLUMN_FAILURE,
    payload: error,
});

export const listSheetColumnRequest = () => ({
    type: LIST_SHEETCOLUMN_REQUEST,
});

export const listSheetColumnSuccess = (SheetColumns) => ({
    type: LIST_SHEETCOLUMN_SUCCESS,
    payload: SheetColumns,
});

export const listSheetColumnFailure = (error) => ({
    type: LIST_SHEETCOLUMN_FAILURE,
    payload: error,
});

export const updateSheetColumnRequest = (SheetColumn) => ({
    type: UPDATE_SHEETCOLUMN_REQUEST,
    payload: SheetColumn,
});

export const updateSheetColumnSuccess = (SheetColumn) => ({
    type: UPDATE_SHEETCOLUMN_SUCCESS,
    payload: SheetColumn,
});

export const updateSheetColumnFailure = (error) => ({
    type: UPDATE_SHEETCOLUMN_FAILURE,
    payload: error,
});

export const deleteSheetColumnRequest = (SheetColumn) => ({
    type: DELETE_SHEETCOLUMN_REQUEST,
    payload: SheetColumn,
});

export const deleteSheetColumnSuccess = (SheetColumn) => ({
    type: DELETE_SHEETCOLUMN_SUCCESS,
    payload: SheetColumn,
});

export const deleteSheetColumnFailure = (error) => ({
    type: DELETE_SHEETCOLUMN_FAILURE,
    payload: error,
});
