// defines the Redux Actions for OasInfo

// OasInfo

export const FETCH_OASINFO_REQUEST = 'FETCH_OASINFO_REQUEST';
export const FETCH_OASINFO_SUCCESS = 'FETCH_OASINFO_SUCCESS';
export const FETCH_OASINFO_FAILURE = 'FETCH_OASINFO_FAILURE';

export const ADD_OASINFO_REQUEST = 'ADD_OASINFO_REQUEST';
export const ADD_OASINFO_SUCCESS = 'ADD_OASINFO_SUCCESS';
export const ADD_OASINFO_FAILURE = 'ADD_OASINFO_FAILURE';

export const UPDATE_OASINFO_REQUEST = 'UPDATE_OASINFO_REQUEST';
export const UPDATE_OASINFO_SUCCESS = 'UPDATE_OASINFO_SUCCESS';
export const UPDATE_OASINFO_FAILURE = 'UPDATE_OASINFO_FAILURE';

export const DELETE_OASINFO_REQUEST = 'DELETE_OASINFO_REQUEST';
export const DELETE_OASINFO_SUCCESS = 'DELETE_OASINFO_SUCCESS';
export const DELETE_OASINFO_FAILURE = 'DELETE_OASINFO_FAILURE';

export const LIST_OASINFO_REQUEST = 'LIST_OASINFO_REQUEST';
export const LIST_OASINFO_SUCCESS = 'LIST_OASINFO_SUCCESS';
export const LIST_OASINFO_FAILURE = 'LIST_OASINFO_FAILURE';

export const addOasInfoRequest = () => ({
    type: ADD_OASINFO_REQUEST,
});

export const addOasInfoSuccess = (OasInfos) => ({
    type: ADD_OASINFO_SUCCESS,
    payload: OasInfos,
});

export const addOasInfoFailure = (error) => ({
    type: ADD_OASINFO_FAILURE,
    payload: error,
});


export const fetchOasInfoRequest = () => ({
    type: FETCH_OASINFO_REQUEST,
});

export const fetchOasInfoSuccess = (OasInfos) => ({
    type: FETCH_OASINFO_SUCCESS,
    payload: OasInfos,
});

export const fetchOasInfoFailure = (error) => ({
    type: FETCH_OASINFO_FAILURE,
    payload: error,
});

export const listOasInfoRequest = () => ({
    type: LIST_OASINFO_REQUEST,
});

export const listOasInfoSuccess = (OasInfos) => ({
    type: LIST_OASINFO_SUCCESS,
    payload: OasInfos,
});

export const listOasInfoFailure = (error) => ({
    type: LIST_OASINFO_FAILURE,
    payload: error,
});

export const updateOasInfoRequest = (OasInfo) => ({
    type: UPDATE_OASINFO_REQUEST,
    payload: OasInfo,
});

export const updateOasInfoSuccess = (OasInfo) => ({
    type: UPDATE_OASINFO_SUCCESS,
    payload: OasInfo,
});

export const updateOasInfoFailure = (error) => ({
    type: UPDATE_OASINFO_FAILURE,
    payload: error,
});

export const deleteOasInfoRequest = (OasInfo) => ({
    type: DELETE_OASINFO_REQUEST,
    payload: OasInfo,
});

export const deleteOasInfoSuccess = (OasInfo) => ({
    type: DELETE_OASINFO_SUCCESS,
    payload: OasInfo,
});

export const deleteOasInfoFailure = (error) => ({
    type: DELETE_OASINFO_FAILURE,
    payload: error,
});
