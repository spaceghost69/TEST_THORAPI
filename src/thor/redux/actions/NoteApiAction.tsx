// defines the Redux Actions for Note

// Note

export const FETCH_NOTE_REQUEST = 'FETCH_NOTE_REQUEST';
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const FETCH_NOTE_FAILURE = 'FETCH_NOTE_FAILURE';

export const ADD_NOTE_REQUEST = 'ADD_NOTE_REQUEST';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const UPDATE_NOTE_REQUEST = 'UPDATE_NOTE_REQUEST';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';

export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const LIST_NOTE_REQUEST = 'LIST_NOTE_REQUEST';
export const LIST_NOTE_SUCCESS = 'LIST_NOTE_SUCCESS';
export const LIST_NOTE_FAILURE = 'LIST_NOTE_FAILURE';

export const addNoteRequest = () => ({
    type: ADD_NOTE_REQUEST,
});

export const addNoteSuccess = (Notes) => ({
    type: ADD_NOTE_SUCCESS,
    payload: Notes,
});

export const addNoteFailure = (error) => ({
    type: ADD_NOTE_FAILURE,
    payload: error,
});


export const fetchNoteRequest = () => ({
    type: FETCH_NOTE_REQUEST,
});

export const fetchNoteSuccess = (Notes) => ({
    type: FETCH_NOTE_SUCCESS,
    payload: Notes,
});

export const fetchNoteFailure = (error) => ({
    type: FETCH_NOTE_FAILURE,
    payload: error,
});

export const listNoteRequest = () => ({
    type: LIST_NOTE_REQUEST,
});

export const listNoteSuccess = (Notes) => ({
    type: LIST_NOTE_SUCCESS,
    payload: Notes,
});

export const listNoteFailure = (error) => ({
    type: LIST_NOTE_FAILURE,
    payload: error,
});

export const updateNoteRequest = (Note) => ({
    type: UPDATE_NOTE_REQUEST,
    payload: Note,
});

export const updateNoteSuccess = (Note) => ({
    type: UPDATE_NOTE_SUCCESS,
    payload: Note,
});

export const updateNoteFailure = (error) => ({
    type: UPDATE_NOTE_FAILURE,
    payload: error,
});

export const deleteNoteRequest = (Note) => ({
    type: DELETE_NOTE_REQUEST,
    payload: Note,
});

export const deleteNoteSuccess = (Note) => ({
    type: DELETE_NOTE_SUCCESS,
    payload: Note,
});

export const deleteNoteFailure = (error) => ({
    type: DELETE_NOTE_FAILURE,
    payload: error,
});
