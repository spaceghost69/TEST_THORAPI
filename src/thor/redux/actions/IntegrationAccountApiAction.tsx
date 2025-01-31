// defines the Redux Actions for IntegrationAccount

// IntegrationAccount

export const FETCH_INTEGRATIONACCOUNT_REQUEST = 'FETCH_INTEGRATIONACCOUNT_REQUEST';
export const FETCH_INTEGRATIONACCOUNT_SUCCESS = 'FETCH_INTEGRATIONACCOUNT_SUCCESS';
export const FETCH_INTEGRATIONACCOUNT_FAILURE = 'FETCH_INTEGRATIONACCOUNT_FAILURE';

export const ADD_INTEGRATIONACCOUNT_REQUEST = 'ADD_INTEGRATIONACCOUNT_REQUEST';
export const ADD_INTEGRATIONACCOUNT_SUCCESS = 'ADD_INTEGRATIONACCOUNT_SUCCESS';
export const ADD_INTEGRATIONACCOUNT_FAILURE = 'ADD_INTEGRATIONACCOUNT_FAILURE';

export const UPDATE_INTEGRATIONACCOUNT_REQUEST = 'UPDATE_INTEGRATIONACCOUNT_REQUEST';
export const UPDATE_INTEGRATIONACCOUNT_SUCCESS = 'UPDATE_INTEGRATIONACCOUNT_SUCCESS';
export const UPDATE_INTEGRATIONACCOUNT_FAILURE = 'UPDATE_INTEGRATIONACCOUNT_FAILURE';

export const DELETE_INTEGRATIONACCOUNT_REQUEST = 'DELETE_INTEGRATIONACCOUNT_REQUEST';
export const DELETE_INTEGRATIONACCOUNT_SUCCESS = 'DELETE_INTEGRATIONACCOUNT_SUCCESS';
export const DELETE_INTEGRATIONACCOUNT_FAILURE = 'DELETE_INTEGRATIONACCOUNT_FAILURE';

export const LIST_INTEGRATIONACCOUNT_REQUEST = 'LIST_INTEGRATIONACCOUNT_REQUEST';
export const LIST_INTEGRATIONACCOUNT_SUCCESS = 'LIST_INTEGRATIONACCOUNT_SUCCESS';
export const LIST_INTEGRATIONACCOUNT_FAILURE = 'LIST_INTEGRATIONACCOUNT_FAILURE';

export const addIntegrationAccountRequest = () => ({
    type: ADD_INTEGRATIONACCOUNT_REQUEST,
});

export const addIntegrationAccountSuccess = (IntegrationAccounts) => ({
    type: ADD_INTEGRATIONACCOUNT_SUCCESS,
    payload: IntegrationAccounts,
});

export const addIntegrationAccountFailure = (error) => ({
    type: ADD_INTEGRATIONACCOUNT_FAILURE,
    payload: error,
});


export const fetchIntegrationAccountRequest = () => ({
    type: FETCH_INTEGRATIONACCOUNT_REQUEST,
});

export const fetchIntegrationAccountSuccess = (IntegrationAccounts) => ({
    type: FETCH_INTEGRATIONACCOUNT_SUCCESS,
    payload: IntegrationAccounts,
});

export const fetchIntegrationAccountFailure = (error) => ({
    type: FETCH_INTEGRATIONACCOUNT_FAILURE,
    payload: error,
});

export const listIntegrationAccountRequest = () => ({
    type: LIST_INTEGRATIONACCOUNT_REQUEST,
});

export const listIntegrationAccountSuccess = (IntegrationAccounts) => ({
    type: LIST_INTEGRATIONACCOUNT_SUCCESS,
    payload: IntegrationAccounts,
});

export const listIntegrationAccountFailure = (error) => ({
    type: LIST_INTEGRATIONACCOUNT_FAILURE,
    payload: error,
});

export const updateIntegrationAccountRequest = (IntegrationAccount) => ({
    type: UPDATE_INTEGRATIONACCOUNT_REQUEST,
    payload: IntegrationAccount,
});

export const updateIntegrationAccountSuccess = (IntegrationAccount) => ({
    type: UPDATE_INTEGRATIONACCOUNT_SUCCESS,
    payload: IntegrationAccount,
});

export const updateIntegrationAccountFailure = (error) => ({
    type: UPDATE_INTEGRATIONACCOUNT_FAILURE,
    payload: error,
});

export const deleteIntegrationAccountRequest = (IntegrationAccount) => ({
    type: DELETE_INTEGRATIONACCOUNT_REQUEST,
    payload: IntegrationAccount,
});

export const deleteIntegrationAccountSuccess = (IntegrationAccount) => ({
    type: DELETE_INTEGRATIONACCOUNT_SUCCESS,
    payload: IntegrationAccount,
});

export const deleteIntegrationAccountFailure = (error) => ({
    type: DELETE_INTEGRATIONACCOUNT_FAILURE,
    payload: error,
});
