// defines the Redux Actions for OasEnum

// OasEnum

export const FETCH_OASENUM_REQUEST = 'FETCH_OASENUM_REQUEST';
export const FETCH_OASENUM_SUCCESS = 'FETCH_OASENUM_SUCCESS';
export const FETCH_OASENUM_FAILURE = 'FETCH_OASENUM_FAILURE';

export const ADD_OASENUM_REQUEST = 'ADD_OASENUM_REQUEST';
export const ADD_OASENUM_SUCCESS = 'ADD_OASENUM_SUCCESS';
export const ADD_OASENUM_FAILURE = 'ADD_OASENUM_FAILURE';

export const UPDATE_OASENUM_REQUEST = 'UPDATE_OASENUM_REQUEST';
export const UPDATE_OASENUM_SUCCESS = 'UPDATE_OASENUM_SUCCESS';
export const UPDATE_OASENUM_FAILURE = 'UPDATE_OASENUM_FAILURE';

export const DELETE_OASENUM_REQUEST = 'DELETE_OASENUM_REQUEST';
export const DELETE_OASENUM_SUCCESS = 'DELETE_OASENUM_SUCCESS';
export const DELETE_OASENUM_FAILURE = 'DELETE_OASENUM_FAILURE';

export const LIST_OASENUM_REQUEST = 'LIST_OASENUM_REQUEST';
export const LIST_OASENUM_SUCCESS = 'LIST_OASENUM_SUCCESS';
export const LIST_OASENUM_FAILURE = 'LIST_OASENUM_FAILURE';

export const addOasEnumRequest = () => ({
    type: ADD_OASENUM_REQUEST,
});

export const addOasEnumSuccess = (OasEnums) => ({
    type: ADD_OASENUM_SUCCESS,
    payload: OasEnums,
});

export const addOasEnumFailure = (error) => ({
    type: ADD_OASENUM_FAILURE,
    payload: error,
});


export const fetchOasEnumRequest = () => ({
    type: FETCH_OASENUM_REQUEST,
});

export const fetchOasEnumSuccess = (OasEnums) => ({
    type: FETCH_OASENUM_SUCCESS,
    payload: OasEnums,
});

export const fetchOasEnumFailure = (error) => ({
    type: FETCH_OASENUM_FAILURE,
    payload: error,
});

export const listOasEnumRequest = () => ({
    type: LIST_OASENUM_REQUEST,
});

export const listOasEnumSuccess = (OasEnums) => ({
    type: LIST_OASENUM_SUCCESS,
    payload: OasEnums,
});

export const listOasEnumFailure = (error) => ({
    type: LIST_OASENUM_FAILURE,
    payload: error,
});

export const updateOasEnumRequest = (OasEnum) => ({
    type: UPDATE_OASENUM_REQUEST,
    payload: OasEnum,
});

export const updateOasEnumSuccess = (OasEnum) => ({
    type: UPDATE_OASENUM_SUCCESS,
    payload: OasEnum,
});

export const updateOasEnumFailure = (error) => ({
    type: UPDATE_OASENUM_FAILURE,
    payload: error,
});

export const deleteOasEnumRequest = (OasEnum) => ({
    type: DELETE_OASENUM_REQUEST,
    payload: OasEnum,
});

export const deleteOasEnumSuccess = (OasEnum) => ({
    type: DELETE_OASENUM_SUCCESS,
    payload: OasEnum,
});

export const deleteOasEnumFailure = (error) => ({
    type: DELETE_OASENUM_FAILURE,
    payload: error,
});
