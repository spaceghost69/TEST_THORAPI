// defines the Redux Actions for AclEntry

// AclEntry

export const FETCH_ACLENTRY_REQUEST = 'FETCH_ACLENTRY_REQUEST';
export const FETCH_ACLENTRY_SUCCESS = 'FETCH_ACLENTRY_SUCCESS';
export const FETCH_ACLENTRY_FAILURE = 'FETCH_ACLENTRY_FAILURE';

export const ADD_ACLENTRY_REQUEST = 'ADD_ACLENTRY_REQUEST';
export const ADD_ACLENTRY_SUCCESS = 'ADD_ACLENTRY_SUCCESS';
export const ADD_ACLENTRY_FAILURE = 'ADD_ACLENTRY_FAILURE';

export const UPDATE_ACLENTRY_REQUEST = 'UPDATE_ACLENTRY_REQUEST';
export const UPDATE_ACLENTRY_SUCCESS = 'UPDATE_ACLENTRY_SUCCESS';
export const UPDATE_ACLENTRY_FAILURE = 'UPDATE_ACLENTRY_FAILURE';

export const DELETE_ACLENTRY_REQUEST = 'DELETE_ACLENTRY_REQUEST';
export const DELETE_ACLENTRY_SUCCESS = 'DELETE_ACLENTRY_SUCCESS';
export const DELETE_ACLENTRY_FAILURE = 'DELETE_ACLENTRY_FAILURE';

export const LIST_ACLENTRY_REQUEST = 'LIST_ACLENTRY_REQUEST';
export const LIST_ACLENTRY_SUCCESS = 'LIST_ACLENTRY_SUCCESS';
export const LIST_ACLENTRY_FAILURE = 'LIST_ACLENTRY_FAILURE';

export const addAclEntryRequest = () => ({
    type: ADD_ACLENTRY_REQUEST,
});

export const addAclEntrySuccess = (AclEntrys) => ({
    type: ADD_ACLENTRY_SUCCESS,
    payload: AclEntrys,
});

export const addAclEntryFailure = (error) => ({
    type: ADD_ACLENTRY_FAILURE,
    payload: error,
});


export const fetchAclEntryRequest = () => ({
    type: FETCH_ACLENTRY_REQUEST,
});

export const fetchAclEntrySuccess = (AclEntrys) => ({
    type: FETCH_ACLENTRY_SUCCESS,
    payload: AclEntrys,
});

export const fetchAclEntryFailure = (error) => ({
    type: FETCH_ACLENTRY_FAILURE,
    payload: error,
});

export const listAclEntryRequest = () => ({
    type: LIST_ACLENTRY_REQUEST,
});

export const listAclEntrySuccess = (AclEntrys) => ({
    type: LIST_ACLENTRY_SUCCESS,
    payload: AclEntrys,
});

export const listAclEntryFailure = (error) => ({
    type: LIST_ACLENTRY_FAILURE,
    payload: error,
});

export const updateAclEntryRequest = (AclEntry) => ({
    type: UPDATE_ACLENTRY_REQUEST,
    payload: AclEntry,
});

export const updateAclEntrySuccess = (AclEntry) => ({
    type: UPDATE_ACLENTRY_SUCCESS,
    payload: AclEntry,
});

export const updateAclEntryFailure = (error) => ({
    type: UPDATE_ACLENTRY_FAILURE,
    payload: error,
});

export const deleteAclEntryRequest = (AclEntry) => ({
    type: DELETE_ACLENTRY_REQUEST,
    payload: AclEntry,
});

export const deleteAclEntrySuccess = (AclEntry) => ({
    type: DELETE_ACLENTRY_SUCCESS,
    payload: AclEntry,
});

export const deleteAclEntryFailure = (error) => ({
    type: DELETE_ACLENTRY_FAILURE,
    payload: error,
});
