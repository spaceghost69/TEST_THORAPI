// defines the Redux Actions for Role

// Role

export const FETCH_ROLE_REQUEST = 'FETCH_ROLE_REQUEST';
export const FETCH_ROLE_SUCCESS = 'FETCH_ROLE_SUCCESS';
export const FETCH_ROLE_FAILURE = 'FETCH_ROLE_FAILURE';

export const ADD_ROLE_REQUEST = 'ADD_ROLE_REQUEST';
export const ADD_ROLE_SUCCESS = 'ADD_ROLE_SUCCESS';
export const ADD_ROLE_FAILURE = 'ADD_ROLE_FAILURE';

export const UPDATE_ROLE_REQUEST = 'UPDATE_ROLE_REQUEST';
export const UPDATE_ROLE_SUCCESS = 'UPDATE_ROLE_SUCCESS';
export const UPDATE_ROLE_FAILURE = 'UPDATE_ROLE_FAILURE';

export const DELETE_ROLE_REQUEST = 'DELETE_ROLE_REQUEST';
export const DELETE_ROLE_SUCCESS = 'DELETE_ROLE_SUCCESS';
export const DELETE_ROLE_FAILURE = 'DELETE_ROLE_FAILURE';

export const LIST_ROLE_REQUEST = 'LIST_ROLE_REQUEST';
export const LIST_ROLE_SUCCESS = 'LIST_ROLE_SUCCESS';
export const LIST_ROLE_FAILURE = 'LIST_ROLE_FAILURE';

export const addRoleRequest = () => ({
    type: ADD_ROLE_REQUEST,
});

export const addRoleSuccess = (Roles) => ({
    type: ADD_ROLE_SUCCESS,
    payload: Roles,
});

export const addRoleFailure = (error) => ({
    type: ADD_ROLE_FAILURE,
    payload: error,
});


export const fetchRoleRequest = () => ({
    type: FETCH_ROLE_REQUEST,
});

export const fetchRoleSuccess = (Roles) => ({
    type: FETCH_ROLE_SUCCESS,
    payload: Roles,
});

export const fetchRoleFailure = (error) => ({
    type: FETCH_ROLE_FAILURE,
    payload: error,
});

export const listRoleRequest = () => ({
    type: LIST_ROLE_REQUEST,
});

export const listRoleSuccess = (Roles) => ({
    type: LIST_ROLE_SUCCESS,
    payload: Roles,
});

export const listRoleFailure = (error) => ({
    type: LIST_ROLE_FAILURE,
    payload: error,
});

export const updateRoleRequest = (Role) => ({
    type: UPDATE_ROLE_REQUEST,
    payload: Role,
});

export const updateRoleSuccess = (Role) => ({
    type: UPDATE_ROLE_SUCCESS,
    payload: Role,
});

export const updateRoleFailure = (error) => ({
    type: UPDATE_ROLE_FAILURE,
    payload: error,
});

export const deleteRoleRequest = (Role) => ({
    type: DELETE_ROLE_REQUEST,
    payload: Role,
});

export const deleteRoleSuccess = (Role) => ({
    type: DELETE_ROLE_SUCCESS,
    payload: Role,
});

export const deleteRoleFailure = (error) => ({
    type: DELETE_ROLE_FAILURE,
    payload: error,
});
