// defines the Redux Actions for SecureKey

// SecureKey

export const FETCH_SECUREKEY_REQUEST = 'FETCH_SECUREKEY_REQUEST';
export const FETCH_SECUREKEY_SUCCESS = 'FETCH_SECUREKEY_SUCCESS';
export const FETCH_SECUREKEY_FAILURE = 'FETCH_SECUREKEY_FAILURE';

export const ADD_SECUREKEY_REQUEST = 'ADD_SECUREKEY_REQUEST';
export const ADD_SECUREKEY_SUCCESS = 'ADD_SECUREKEY_SUCCESS';
export const ADD_SECUREKEY_FAILURE = 'ADD_SECUREKEY_FAILURE';

export const UPDATE_SECUREKEY_REQUEST = 'UPDATE_SECUREKEY_REQUEST';
export const UPDATE_SECUREKEY_SUCCESS = 'UPDATE_SECUREKEY_SUCCESS';
export const UPDATE_SECUREKEY_FAILURE = 'UPDATE_SECUREKEY_FAILURE';

export const DELETE_SECUREKEY_REQUEST = 'DELETE_SECUREKEY_REQUEST';
export const DELETE_SECUREKEY_SUCCESS = 'DELETE_SECUREKEY_SUCCESS';
export const DELETE_SECUREKEY_FAILURE = 'DELETE_SECUREKEY_FAILURE';

export const LIST_SECUREKEY_REQUEST = 'LIST_SECUREKEY_REQUEST';
export const LIST_SECUREKEY_SUCCESS = 'LIST_SECUREKEY_SUCCESS';
export const LIST_SECUREKEY_FAILURE = 'LIST_SECUREKEY_FAILURE';

export const addSecureKeyRequest = () => ({
    type: ADD_SECUREKEY_REQUEST,
});

export const addSecureKeySuccess = (SecureKeys) => ({
    type: ADD_SECUREKEY_SUCCESS,
    payload: SecureKeys,
});

export const addSecureKeyFailure = (error) => ({
    type: ADD_SECUREKEY_FAILURE,
    payload: error,
});


export const fetchSecureKeyRequest = () => ({
    type: FETCH_SECUREKEY_REQUEST,
});

export const fetchSecureKeySuccess = (SecureKeys) => ({
    type: FETCH_SECUREKEY_SUCCESS,
    payload: SecureKeys,
});

export const fetchSecureKeyFailure = (error) => ({
    type: FETCH_SECUREKEY_FAILURE,
    payload: error,
});

export const listSecureKeyRequest = () => ({
    type: LIST_SECUREKEY_REQUEST,
});

export const listSecureKeySuccess = (SecureKeys) => ({
    type: LIST_SECUREKEY_SUCCESS,
    payload: SecureKeys,
});

export const listSecureKeyFailure = (error) => ({
    type: LIST_SECUREKEY_FAILURE,
    payload: error,
});

export const updateSecureKeyRequest = (SecureKey) => ({
    type: UPDATE_SECUREKEY_REQUEST,
    payload: SecureKey,
});

export const updateSecureKeySuccess = (SecureKey) => ({
    type: UPDATE_SECUREKEY_SUCCESS,
    payload: SecureKey,
});

export const updateSecureKeyFailure = (error) => ({
    type: UPDATE_SECUREKEY_FAILURE,
    payload: error,
});

export const deleteSecureKeyRequest = (SecureKey) => ({
    type: DELETE_SECUREKEY_REQUEST,
    payload: SecureKey,
});

export const deleteSecureKeySuccess = (SecureKey) => ({
    type: DELETE_SECUREKEY_SUCCESS,
    payload: SecureKey,
});

export const deleteSecureKeyFailure = (error) => ({
    type: DELETE_SECUREKEY_FAILURE,
    payload: error,
});
