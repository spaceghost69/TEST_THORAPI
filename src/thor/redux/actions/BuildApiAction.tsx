// defines the Redux Actions for Build

// Build

export const FETCH_BUILD_REQUEST = 'FETCH_BUILD_REQUEST';
export const FETCH_BUILD_SUCCESS = 'FETCH_BUILD_SUCCESS';
export const FETCH_BUILD_FAILURE = 'FETCH_BUILD_FAILURE';

export const ADD_BUILD_REQUEST = 'ADD_BUILD_REQUEST';
export const ADD_BUILD_SUCCESS = 'ADD_BUILD_SUCCESS';
export const ADD_BUILD_FAILURE = 'ADD_BUILD_FAILURE';

export const UPDATE_BUILD_REQUEST = 'UPDATE_BUILD_REQUEST';
export const UPDATE_BUILD_SUCCESS = 'UPDATE_BUILD_SUCCESS';
export const UPDATE_BUILD_FAILURE = 'UPDATE_BUILD_FAILURE';

export const DELETE_BUILD_REQUEST = 'DELETE_BUILD_REQUEST';
export const DELETE_BUILD_SUCCESS = 'DELETE_BUILD_SUCCESS';
export const DELETE_BUILD_FAILURE = 'DELETE_BUILD_FAILURE';

export const LIST_BUILD_REQUEST = 'LIST_BUILD_REQUEST';
export const LIST_BUILD_SUCCESS = 'LIST_BUILD_SUCCESS';
export const LIST_BUILD_FAILURE = 'LIST_BUILD_FAILURE';

export const addBuildRequest = () => ({
    type: ADD_BUILD_REQUEST,
});

export const addBuildSuccess = (Builds) => ({
    type: ADD_BUILD_SUCCESS,
    payload: Builds,
});

export const addBuildFailure = (error) => ({
    type: ADD_BUILD_FAILURE,
    payload: error,
});


export const fetchBuildRequest = () => ({
    type: FETCH_BUILD_REQUEST,
});

export const fetchBuildSuccess = (Builds) => ({
    type: FETCH_BUILD_SUCCESS,
    payload: Builds,
});

export const fetchBuildFailure = (error) => ({
    type: FETCH_BUILD_FAILURE,
    payload: error,
});

export const listBuildRequest = () => ({
    type: LIST_BUILD_REQUEST,
});

export const listBuildSuccess = (Builds) => ({
    type: LIST_BUILD_SUCCESS,
    payload: Builds,
});

export const listBuildFailure = (error) => ({
    type: LIST_BUILD_FAILURE,
    payload: error,
});

export const updateBuildRequest = (Build) => ({
    type: UPDATE_BUILD_REQUEST,
    payload: Build,
});

export const updateBuildSuccess = (Build) => ({
    type: UPDATE_BUILD_SUCCESS,
    payload: Build,
});

export const updateBuildFailure = (error) => ({
    type: UPDATE_BUILD_FAILURE,
    payload: error,
});

export const deleteBuildRequest = (Build) => ({
    type: DELETE_BUILD_REQUEST,
    payload: Build,
});

export const deleteBuildSuccess = (Build) => ({
    type: DELETE_BUILD_SUCCESS,
    payload: Build,
});

export const deleteBuildFailure = (error) => ({
    type: DELETE_BUILD_FAILURE,
    payload: error,
});
