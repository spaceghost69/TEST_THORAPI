// defines the Redux Actions for Application

// Application

export const FETCH_APPLICATION_REQUEST = 'FETCH_APPLICATION_REQUEST';
export const FETCH_APPLICATION_SUCCESS = 'FETCH_APPLICATION_SUCCESS';
export const FETCH_APPLICATION_FAILURE = 'FETCH_APPLICATION_FAILURE';

export const ADD_APPLICATION_REQUEST = 'ADD_APPLICATION_REQUEST';
export const ADD_APPLICATION_SUCCESS = 'ADD_APPLICATION_SUCCESS';
export const ADD_APPLICATION_FAILURE = 'ADD_APPLICATION_FAILURE';

export const UPDATE_APPLICATION_REQUEST = 'UPDATE_APPLICATION_REQUEST';
export const UPDATE_APPLICATION_SUCCESS = 'UPDATE_APPLICATION_SUCCESS';
export const UPDATE_APPLICATION_FAILURE = 'UPDATE_APPLICATION_FAILURE';

export const DELETE_APPLICATION_REQUEST = 'DELETE_APPLICATION_REQUEST';
export const DELETE_APPLICATION_SUCCESS = 'DELETE_APPLICATION_SUCCESS';
export const DELETE_APPLICATION_FAILURE = 'DELETE_APPLICATION_FAILURE';

export const LIST_APPLICATION_REQUEST = 'LIST_APPLICATION_REQUEST';
export const LIST_APPLICATION_SUCCESS = 'LIST_APPLICATION_SUCCESS';
export const LIST_APPLICATION_FAILURE = 'LIST_APPLICATION_FAILURE';

export const addApplicationRequest = () => ({
    type: ADD_APPLICATION_REQUEST,
});

export const addApplicationSuccess = (Applications) => ({
    type: ADD_APPLICATION_SUCCESS,
    payload: Applications,
});

export const addApplicationFailure = (error) => ({
    type: ADD_APPLICATION_FAILURE,
    payload: error,
});


export const fetchApplicationRequest = () => ({
    type: FETCH_APPLICATION_REQUEST,
});

export const fetchApplicationSuccess = (Applications) => ({
    type: FETCH_APPLICATION_SUCCESS,
    payload: Applications,
});

export const fetchApplicationFailure = (error) => ({
    type: FETCH_APPLICATION_FAILURE,
    payload: error,
});

export const listApplicationRequest = () => ({
    type: LIST_APPLICATION_REQUEST,
});

export const listApplicationSuccess = (Applications) => ({
    type: LIST_APPLICATION_SUCCESS,
    payload: Applications,
});

export const listApplicationFailure = (error) => ({
    type: LIST_APPLICATION_FAILURE,
    payload: error,
});

export const updateApplicationRequest = (Application) => ({
    type: UPDATE_APPLICATION_REQUEST,
    payload: Application,
});

export const updateApplicationSuccess = (Application) => ({
    type: UPDATE_APPLICATION_SUCCESS,
    payload: Application,
});

export const updateApplicationFailure = (error) => ({
    type: UPDATE_APPLICATION_FAILURE,
    payload: error,
});

export const deleteApplicationRequest = (Application) => ({
    type: DELETE_APPLICATION_REQUEST,
    payload: Application,
});

export const deleteApplicationSuccess = (Application) => ({
    type: DELETE_APPLICATION_SUCCESS,
    payload: Application,
});

export const deleteApplicationFailure = (error) => ({
    type: DELETE_APPLICATION_FAILURE,
    payload: error,
});
