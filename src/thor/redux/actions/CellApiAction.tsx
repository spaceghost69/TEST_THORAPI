// defines the Redux Actions for Cell

// Cell

export const FETCH_CELL_REQUEST = 'FETCH_CELL_REQUEST';
export const FETCH_CELL_SUCCESS = 'FETCH_CELL_SUCCESS';
export const FETCH_CELL_FAILURE = 'FETCH_CELL_FAILURE';

export const ADD_CELL_REQUEST = 'ADD_CELL_REQUEST';
export const ADD_CELL_SUCCESS = 'ADD_CELL_SUCCESS';
export const ADD_CELL_FAILURE = 'ADD_CELL_FAILURE';

export const UPDATE_CELL_REQUEST = 'UPDATE_CELL_REQUEST';
export const UPDATE_CELL_SUCCESS = 'UPDATE_CELL_SUCCESS';
export const UPDATE_CELL_FAILURE = 'UPDATE_CELL_FAILURE';

export const DELETE_CELL_REQUEST = 'DELETE_CELL_REQUEST';
export const DELETE_CELL_SUCCESS = 'DELETE_CELL_SUCCESS';
export const DELETE_CELL_FAILURE = 'DELETE_CELL_FAILURE';

export const LIST_CELL_REQUEST = 'LIST_CELL_REQUEST';
export const LIST_CELL_SUCCESS = 'LIST_CELL_SUCCESS';
export const LIST_CELL_FAILURE = 'LIST_CELL_FAILURE';

export const addCellRequest = () => ({
    type: ADD_CELL_REQUEST,
});

export const addCellSuccess = (Cells) => ({
    type: ADD_CELL_SUCCESS,
    payload: Cells,
});

export const addCellFailure = (error) => ({
    type: ADD_CELL_FAILURE,
    payload: error,
});


export const fetchCellRequest = () => ({
    type: FETCH_CELL_REQUEST,
});

export const fetchCellSuccess = (Cells) => ({
    type: FETCH_CELL_SUCCESS,
    payload: Cells,
});

export const fetchCellFailure = (error) => ({
    type: FETCH_CELL_FAILURE,
    payload: error,
});

export const listCellRequest = () => ({
    type: LIST_CELL_REQUEST,
});

export const listCellSuccess = (Cells) => ({
    type: LIST_CELL_SUCCESS,
    payload: Cells,
});

export const listCellFailure = (error) => ({
    type: LIST_CELL_FAILURE,
    payload: error,
});

export const updateCellRequest = (Cell) => ({
    type: UPDATE_CELL_REQUEST,
    payload: Cell,
});

export const updateCellSuccess = (Cell) => ({
    type: UPDATE_CELL_SUCCESS,
    payload: Cell,
});

export const updateCellFailure = (error) => ({
    type: UPDATE_CELL_FAILURE,
    payload: error,
});

export const deleteCellRequest = (Cell) => ({
    type: DELETE_CELL_REQUEST,
    payload: Cell,
});

export const deleteCellSuccess = (Cell) => ({
    type: DELETE_CELL_SUCCESS,
    payload: Cell,
});

export const deleteCellFailure = (error) => ({
    type: DELETE_CELL_FAILURE,
    payload: error,
});
