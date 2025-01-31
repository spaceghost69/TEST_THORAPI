// defines the Redux Actions for Organization

// Organization

export const FETCH_ORGANIZATION_REQUEST = 'FETCH_ORGANIZATION_REQUEST';
export const FETCH_ORGANIZATION_SUCCESS = 'FETCH_ORGANIZATION_SUCCESS';
export const FETCH_ORGANIZATION_FAILURE = 'FETCH_ORGANIZATION_FAILURE';

export const ADD_ORGANIZATION_REQUEST = 'ADD_ORGANIZATION_REQUEST';
export const ADD_ORGANIZATION_SUCCESS = 'ADD_ORGANIZATION_SUCCESS';
export const ADD_ORGANIZATION_FAILURE = 'ADD_ORGANIZATION_FAILURE';

export const UPDATE_ORGANIZATION_REQUEST = 'UPDATE_ORGANIZATION_REQUEST';
export const UPDATE_ORGANIZATION_SUCCESS = 'UPDATE_ORGANIZATION_SUCCESS';
export const UPDATE_ORGANIZATION_FAILURE = 'UPDATE_ORGANIZATION_FAILURE';

export const DELETE_ORGANIZATION_REQUEST = 'DELETE_ORGANIZATION_REQUEST';
export const DELETE_ORGANIZATION_SUCCESS = 'DELETE_ORGANIZATION_SUCCESS';
export const DELETE_ORGANIZATION_FAILURE = 'DELETE_ORGANIZATION_FAILURE';

export const LIST_ORGANIZATION_REQUEST = 'LIST_ORGANIZATION_REQUEST';
export const LIST_ORGANIZATION_SUCCESS = 'LIST_ORGANIZATION_SUCCESS';
export const LIST_ORGANIZATION_FAILURE = 'LIST_ORGANIZATION_FAILURE';

export const addOrganizationRequest = () => ({
    type: ADD_ORGANIZATION_REQUEST,
});

export const addOrganizationSuccess = (Organizations) => ({
    type: ADD_ORGANIZATION_SUCCESS,
    payload: Organizations,
});

export const addOrganizationFailure = (error) => ({
    type: ADD_ORGANIZATION_FAILURE,
    payload: error,
});


export const fetchOrganizationRequest = () => ({
    type: FETCH_ORGANIZATION_REQUEST,
});

export const fetchOrganizationSuccess = (Organizations) => ({
    type: FETCH_ORGANIZATION_SUCCESS,
    payload: Organizations,
});

export const fetchOrganizationFailure = (error) => ({
    type: FETCH_ORGANIZATION_FAILURE,
    payload: error,
});

export const listOrganizationRequest = () => ({
    type: LIST_ORGANIZATION_REQUEST,
});

export const listOrganizationSuccess = (Organizations) => ({
    type: LIST_ORGANIZATION_SUCCESS,
    payload: Organizations,
});

export const listOrganizationFailure = (error) => ({
    type: LIST_ORGANIZATION_FAILURE,
    payload: error,
});

export const updateOrganizationRequest = (Organization) => ({
    type: UPDATE_ORGANIZATION_REQUEST,
    payload: Organization,
});

export const updateOrganizationSuccess = (Organization) => ({
    type: UPDATE_ORGANIZATION_SUCCESS,
    payload: Organization,
});

export const updateOrganizationFailure = (error) => ({
    type: UPDATE_ORGANIZATION_FAILURE,
    payload: error,
});

export const deleteOrganizationRequest = (Organization) => ({
    type: DELETE_ORGANIZATION_REQUEST,
    payload: Organization,
});

export const deleteOrganizationSuccess = (Organization) => ({
    type: DELETE_ORGANIZATION_SUCCESS,
    payload: Organization,
});

export const deleteOrganizationFailure = (error) => ({
    type: DELETE_ORGANIZATION_FAILURE,
    payload: error,
});
