// defines the Redux Actions for ContentMediaLink

// ContentMediaLink

export const FETCH_CONTENTMEDIALINK_REQUEST = 'FETCH_CONTENTMEDIALINK_REQUEST';
export const FETCH_CONTENTMEDIALINK_SUCCESS = 'FETCH_CONTENTMEDIALINK_SUCCESS';
export const FETCH_CONTENTMEDIALINK_FAILURE = 'FETCH_CONTENTMEDIALINK_FAILURE';

export const ADD_CONTENTMEDIALINK_REQUEST = 'ADD_CONTENTMEDIALINK_REQUEST';
export const ADD_CONTENTMEDIALINK_SUCCESS = 'ADD_CONTENTMEDIALINK_SUCCESS';
export const ADD_CONTENTMEDIALINK_FAILURE = 'ADD_CONTENTMEDIALINK_FAILURE';

export const UPDATE_CONTENTMEDIALINK_REQUEST = 'UPDATE_CONTENTMEDIALINK_REQUEST';
export const UPDATE_CONTENTMEDIALINK_SUCCESS = 'UPDATE_CONTENTMEDIALINK_SUCCESS';
export const UPDATE_CONTENTMEDIALINK_FAILURE = 'UPDATE_CONTENTMEDIALINK_FAILURE';

export const DELETE_CONTENTMEDIALINK_REQUEST = 'DELETE_CONTENTMEDIALINK_REQUEST';
export const DELETE_CONTENTMEDIALINK_SUCCESS = 'DELETE_CONTENTMEDIALINK_SUCCESS';
export const DELETE_CONTENTMEDIALINK_FAILURE = 'DELETE_CONTENTMEDIALINK_FAILURE';

export const LIST_CONTENTMEDIALINK_REQUEST = 'LIST_CONTENTMEDIALINK_REQUEST';
export const LIST_CONTENTMEDIALINK_SUCCESS = 'LIST_CONTENTMEDIALINK_SUCCESS';
export const LIST_CONTENTMEDIALINK_FAILURE = 'LIST_CONTENTMEDIALINK_FAILURE';

export const addContentMediaLinkRequest = () => ({
    type: ADD_CONTENTMEDIALINK_REQUEST,
});

export const addContentMediaLinkSuccess = (ContentMediaLinks) => ({
    type: ADD_CONTENTMEDIALINK_SUCCESS,
    payload: ContentMediaLinks,
});

export const addContentMediaLinkFailure = (error) => ({
    type: ADD_CONTENTMEDIALINK_FAILURE,
    payload: error,
});


export const fetchContentMediaLinkRequest = () => ({
    type: FETCH_CONTENTMEDIALINK_REQUEST,
});

export const fetchContentMediaLinkSuccess = (ContentMediaLinks) => ({
    type: FETCH_CONTENTMEDIALINK_SUCCESS,
    payload: ContentMediaLinks,
});

export const fetchContentMediaLinkFailure = (error) => ({
    type: FETCH_CONTENTMEDIALINK_FAILURE,
    payload: error,
});

export const listContentMediaLinkRequest = () => ({
    type: LIST_CONTENTMEDIALINK_REQUEST,
});

export const listContentMediaLinkSuccess = (ContentMediaLinks) => ({
    type: LIST_CONTENTMEDIALINK_SUCCESS,
    payload: ContentMediaLinks,
});

export const listContentMediaLinkFailure = (error) => ({
    type: LIST_CONTENTMEDIALINK_FAILURE,
    payload: error,
});

export const updateContentMediaLinkRequest = (ContentMediaLink) => ({
    type: UPDATE_CONTENTMEDIALINK_REQUEST,
    payload: ContentMediaLink,
});

export const updateContentMediaLinkSuccess = (ContentMediaLink) => ({
    type: UPDATE_CONTENTMEDIALINK_SUCCESS,
    payload: ContentMediaLink,
});

export const updateContentMediaLinkFailure = (error) => ({
    type: UPDATE_CONTENTMEDIALINK_FAILURE,
    payload: error,
});

export const deleteContentMediaLinkRequest = (ContentMediaLink) => ({
    type: DELETE_CONTENTMEDIALINK_REQUEST,
    payload: ContentMediaLink,
});

export const deleteContentMediaLinkSuccess = (ContentMediaLink) => ({
    type: DELETE_CONTENTMEDIALINK_SUCCESS,
    payload: ContentMediaLink,
});

export const deleteContentMediaLinkFailure = (error) => ({
    type: DELETE_CONTENTMEDIALINK_FAILURE,
    payload: error,
});
