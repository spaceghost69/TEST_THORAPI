// defines the Redux Actions for ContentData

// ContentData

export const FETCH_CONTENTDATA_REQUEST = 'FETCH_CONTENTDATA_REQUEST';
export const FETCH_CONTENTDATA_SUCCESS = 'FETCH_CONTENTDATA_SUCCESS';
export const FETCH_CONTENTDATA_FAILURE = 'FETCH_CONTENTDATA_FAILURE';

export const ADD_CONTENTDATA_REQUEST = 'ADD_CONTENTDATA_REQUEST';
export const ADD_CONTENTDATA_SUCCESS = 'ADD_CONTENTDATA_SUCCESS';
export const ADD_CONTENTDATA_FAILURE = 'ADD_CONTENTDATA_FAILURE';

export const UPDATE_CONTENTDATA_REQUEST = 'UPDATE_CONTENTDATA_REQUEST';
export const UPDATE_CONTENTDATA_SUCCESS = 'UPDATE_CONTENTDATA_SUCCESS';
export const UPDATE_CONTENTDATA_FAILURE = 'UPDATE_CONTENTDATA_FAILURE';

export const DELETE_CONTENTDATA_REQUEST = 'DELETE_CONTENTDATA_REQUEST';
export const DELETE_CONTENTDATA_SUCCESS = 'DELETE_CONTENTDATA_SUCCESS';
export const DELETE_CONTENTDATA_FAILURE = 'DELETE_CONTENTDATA_FAILURE';

export const LIST_CONTENTDATA_REQUEST = 'LIST_CONTENTDATA_REQUEST';
export const LIST_CONTENTDATA_SUCCESS = 'LIST_CONTENTDATA_SUCCESS';
export const LIST_CONTENTDATA_FAILURE = 'LIST_CONTENTDATA_FAILURE';

export const addContentDataRequest = () => ({
    type: ADD_CONTENTDATA_REQUEST,
});

export const addContentDataSuccess = (ContentDatas) => ({
    type: ADD_CONTENTDATA_SUCCESS,
    payload: ContentDatas,
});

export const addContentDataFailure = (error) => ({
    type: ADD_CONTENTDATA_FAILURE,
    payload: error,
});


export const fetchContentDataRequest = () => ({
    type: FETCH_CONTENTDATA_REQUEST,
});

export const fetchContentDataSuccess = (ContentDatas) => ({
    type: FETCH_CONTENTDATA_SUCCESS,
    payload: ContentDatas,
});

export const fetchContentDataFailure = (error) => ({
    type: FETCH_CONTENTDATA_FAILURE,
    payload: error,
});

export const listContentDataRequest = () => ({
    type: LIST_CONTENTDATA_REQUEST,
});

export const listContentDataSuccess = (ContentDatas) => ({
    type: LIST_CONTENTDATA_SUCCESS,
    payload: ContentDatas,
});

export const listContentDataFailure = (error) => ({
    type: LIST_CONTENTDATA_FAILURE,
    payload: error,
});

export const updateContentDataRequest = (ContentData) => ({
    type: UPDATE_CONTENTDATA_REQUEST,
    payload: ContentData,
});

export const updateContentDataSuccess = (ContentData) => ({
    type: UPDATE_CONTENTDATA_SUCCESS,
    payload: ContentData,
});

export const updateContentDataFailure = (error) => ({
    type: UPDATE_CONTENTDATA_FAILURE,
    payload: error,
});

export const deleteContentDataRequest = (ContentData) => ({
    type: DELETE_CONTENTDATA_REQUEST,
    payload: ContentData,
});

export const deleteContentDataSuccess = (ContentData) => ({
    type: DELETE_CONTENTDATA_SUCCESS,
    payload: ContentData,
});

export const deleteContentDataFailure = (error) => ({
    type: DELETE_CONTENTDATA_FAILURE,
    payload: error,
});
