// defines the Redux Actions for Formula

// Formula

export const FETCH_FORMULA_REQUEST = 'FETCH_FORMULA_REQUEST';
export const FETCH_FORMULA_SUCCESS = 'FETCH_FORMULA_SUCCESS';
export const FETCH_FORMULA_FAILURE = 'FETCH_FORMULA_FAILURE';

export const ADD_FORMULA_REQUEST = 'ADD_FORMULA_REQUEST';
export const ADD_FORMULA_SUCCESS = 'ADD_FORMULA_SUCCESS';
export const ADD_FORMULA_FAILURE = 'ADD_FORMULA_FAILURE';

export const UPDATE_FORMULA_REQUEST = 'UPDATE_FORMULA_REQUEST';
export const UPDATE_FORMULA_SUCCESS = 'UPDATE_FORMULA_SUCCESS';
export const UPDATE_FORMULA_FAILURE = 'UPDATE_FORMULA_FAILURE';

export const DELETE_FORMULA_REQUEST = 'DELETE_FORMULA_REQUEST';
export const DELETE_FORMULA_SUCCESS = 'DELETE_FORMULA_SUCCESS';
export const DELETE_FORMULA_FAILURE = 'DELETE_FORMULA_FAILURE';

export const LIST_FORMULA_REQUEST = 'LIST_FORMULA_REQUEST';
export const LIST_FORMULA_SUCCESS = 'LIST_FORMULA_SUCCESS';
export const LIST_FORMULA_FAILURE = 'LIST_FORMULA_FAILURE';

export const addFormulaRequest = () => ({
    type: ADD_FORMULA_REQUEST,
});

export const addFormulaSuccess = (Formulas) => ({
    type: ADD_FORMULA_SUCCESS,
    payload: Formulas,
});

export const addFormulaFailure = (error) => ({
    type: ADD_FORMULA_FAILURE,
    payload: error,
});


export const fetchFormulaRequest = () => ({
    type: FETCH_FORMULA_REQUEST,
});

export const fetchFormulaSuccess = (Formulas) => ({
    type: FETCH_FORMULA_SUCCESS,
    payload: Formulas,
});

export const fetchFormulaFailure = (error) => ({
    type: FETCH_FORMULA_FAILURE,
    payload: error,
});

export const listFormulaRequest = () => ({
    type: LIST_FORMULA_REQUEST,
});

export const listFormulaSuccess = (Formulas) => ({
    type: LIST_FORMULA_SUCCESS,
    payload: Formulas,
});

export const listFormulaFailure = (error) => ({
    type: LIST_FORMULA_FAILURE,
    payload: error,
});

export const updateFormulaRequest = (Formula) => ({
    type: UPDATE_FORMULA_REQUEST,
    payload: Formula,
});

export const updateFormulaSuccess = (Formula) => ({
    type: UPDATE_FORMULA_SUCCESS,
    payload: Formula,
});

export const updateFormulaFailure = (error) => ({
    type: UPDATE_FORMULA_FAILURE,
    payload: error,
});

export const deleteFormulaRequest = (Formula) => ({
    type: DELETE_FORMULA_REQUEST,
    payload: Formula,
});

export const deleteFormulaSuccess = (Formula) => ({
    type: DELETE_FORMULA_SUCCESS,
    payload: Formula,
});

export const deleteFormulaFailure = (error) => ({
    type: DELETE_FORMULA_FAILURE,
    payload: error,
});
