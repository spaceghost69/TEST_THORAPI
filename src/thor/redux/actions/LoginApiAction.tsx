// defines the Redux Actions for Login

// Login

export const FETCH_LOGIN_REQUEST = 'FETCH_LOGIN_REQUEST';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';

export const ADD_LOGIN_REQUEST = 'ADD_LOGIN_REQUEST';
export const ADD_LOGIN_SUCCESS = 'ADD_LOGIN_SUCCESS';
export const ADD_LOGIN_FAILURE = 'ADD_LOGIN_FAILURE';

export const UPDATE_LOGIN_REQUEST = 'UPDATE_LOGIN_REQUEST';
export const UPDATE_LOGIN_SUCCESS = 'UPDATE_LOGIN_SUCCESS';
export const UPDATE_LOGIN_FAILURE = 'UPDATE_LOGIN_FAILURE';

export const DELETE_LOGIN_REQUEST = 'DELETE_LOGIN_REQUEST';
export const DELETE_LOGIN_SUCCESS = 'DELETE_LOGIN_SUCCESS';
export const DELETE_LOGIN_FAILURE = 'DELETE_LOGIN_FAILURE';

export const LIST_LOGIN_REQUEST = 'LIST_LOGIN_REQUEST';
export const LIST_LOGIN_SUCCESS = 'LIST_LOGIN_SUCCESS';
export const LIST_LOGIN_FAILURE = 'LIST_LOGIN_FAILURE';

export const addLoginRequest = () => ({
    type: ADD_LOGIN_REQUEST,
});

export const addLoginSuccess = (Logins) => ({
    type: ADD_LOGIN_SUCCESS,
    payload: Logins,
});

export const addLoginFailure = (error) => ({
    type: ADD_LOGIN_FAILURE,
    payload: error,
});


export const fetchLoginRequest = () => ({
    type: FETCH_LOGIN_REQUEST,
});

export const fetchLoginSuccess = (Logins) => ({
    type: FETCH_LOGIN_SUCCESS,
    payload: Logins,
});

export const fetchLoginFailure = (error) => ({
    type: FETCH_LOGIN_FAILURE,
    payload: error,
});

export const listLoginRequest = () => ({
    type: LIST_LOGIN_REQUEST,
});

export const listLoginSuccess = (Logins) => ({
    type: LIST_LOGIN_SUCCESS,
    payload: Logins,
});

export const listLoginFailure = (error) => ({
    type: LIST_LOGIN_FAILURE,
    payload: error,
});

export const updateLoginRequest = (Login) => ({
    type: UPDATE_LOGIN_REQUEST,
    payload: Login,
});

export const updateLoginSuccess = (Login) => ({
    type: UPDATE_LOGIN_SUCCESS,
    payload: Login,
});

export const updateLoginFailure = (error) => ({
    type: UPDATE_LOGIN_FAILURE,
    payload: error,
});

export const deleteLoginRequest = (Login) => ({
    type: DELETE_LOGIN_REQUEST,
    payload: Login,
});

export const deleteLoginSuccess = (Login) => ({
    type: DELETE_LOGIN_SUCCESS,
    payload: Login,
});

export const deleteLoginFailure = (error) => ({
    type: DELETE_LOGIN_FAILURE,
    payload: error,
});
