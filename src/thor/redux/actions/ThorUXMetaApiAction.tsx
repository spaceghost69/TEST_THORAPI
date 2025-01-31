// defines the Redux Actions for ThorUXMeta

// ThorUXMeta

export const FETCH_THORUXMETA_REQUEST = 'FETCH_THORUXMETA_REQUEST';
export const FETCH_THORUXMETA_SUCCESS = 'FETCH_THORUXMETA_SUCCESS';
export const FETCH_THORUXMETA_FAILURE = 'FETCH_THORUXMETA_FAILURE';

export const ADD_THORUXMETA_REQUEST = 'ADD_THORUXMETA_REQUEST';
export const ADD_THORUXMETA_SUCCESS = 'ADD_THORUXMETA_SUCCESS';
export const ADD_THORUXMETA_FAILURE = 'ADD_THORUXMETA_FAILURE';

export const UPDATE_THORUXMETA_REQUEST = 'UPDATE_THORUXMETA_REQUEST';
export const UPDATE_THORUXMETA_SUCCESS = 'UPDATE_THORUXMETA_SUCCESS';
export const UPDATE_THORUXMETA_FAILURE = 'UPDATE_THORUXMETA_FAILURE';

export const DELETE_THORUXMETA_REQUEST = 'DELETE_THORUXMETA_REQUEST';
export const DELETE_THORUXMETA_SUCCESS = 'DELETE_THORUXMETA_SUCCESS';
export const DELETE_THORUXMETA_FAILURE = 'DELETE_THORUXMETA_FAILURE';

export const LIST_THORUXMETA_REQUEST = 'LIST_THORUXMETA_REQUEST';
export const LIST_THORUXMETA_SUCCESS = 'LIST_THORUXMETA_SUCCESS';
export const LIST_THORUXMETA_FAILURE = 'LIST_THORUXMETA_FAILURE';

export const addThorUXMetaRequest = () => ({
    type: ADD_THORUXMETA_REQUEST,
});

export const addThorUXMetaSuccess = (ThorUXMetas) => ({
    type: ADD_THORUXMETA_SUCCESS,
    payload: ThorUXMetas,
});

export const addThorUXMetaFailure = (error) => ({
    type: ADD_THORUXMETA_FAILURE,
    payload: error,
});


export const fetchThorUXMetaRequest = () => ({
    type: FETCH_THORUXMETA_REQUEST,
});

export const fetchThorUXMetaSuccess = (ThorUXMetas) => ({
    type: FETCH_THORUXMETA_SUCCESS,
    payload: ThorUXMetas,
});

export const fetchThorUXMetaFailure = (error) => ({
    type: FETCH_THORUXMETA_FAILURE,
    payload: error,
});

export const listThorUXMetaRequest = () => ({
    type: LIST_THORUXMETA_REQUEST,
});

export const listThorUXMetaSuccess = (ThorUXMetas) => ({
    type: LIST_THORUXMETA_SUCCESS,
    payload: ThorUXMetas,
});

export const listThorUXMetaFailure = (error) => ({
    type: LIST_THORUXMETA_FAILURE,
    payload: error,
});

export const updateThorUXMetaRequest = (ThorUXMeta) => ({
    type: UPDATE_THORUXMETA_REQUEST,
    payload: ThorUXMeta,
});

export const updateThorUXMetaSuccess = (ThorUXMeta) => ({
    type: UPDATE_THORUXMETA_SUCCESS,
    payload: ThorUXMeta,
});

export const updateThorUXMetaFailure = (error) => ({
    type: UPDATE_THORUXMETA_FAILURE,
    payload: error,
});

export const deleteThorUXMetaRequest = (ThorUXMeta) => ({
    type: DELETE_THORUXMETA_REQUEST,
    payload: ThorUXMeta,
});

export const deleteThorUXMetaSuccess = (ThorUXMeta) => ({
    type: DELETE_THORUXMETA_SUCCESS,
    payload: ThorUXMeta,
});

export const deleteThorUXMetaFailure = (error) => ({
    type: DELETE_THORUXMETA_FAILURE,
    payload: error,
});
