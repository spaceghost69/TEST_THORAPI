// defines the Redux Actions for EventLog

// EventLog

export const FETCH_EVENTLOG_REQUEST = 'FETCH_EVENTLOG_REQUEST';
export const FETCH_EVENTLOG_SUCCESS = 'FETCH_EVENTLOG_SUCCESS';
export const FETCH_EVENTLOG_FAILURE = 'FETCH_EVENTLOG_FAILURE';

export const ADD_EVENTLOG_REQUEST = 'ADD_EVENTLOG_REQUEST';
export const ADD_EVENTLOG_SUCCESS = 'ADD_EVENTLOG_SUCCESS';
export const ADD_EVENTLOG_FAILURE = 'ADD_EVENTLOG_FAILURE';

export const UPDATE_EVENTLOG_REQUEST = 'UPDATE_EVENTLOG_REQUEST';
export const UPDATE_EVENTLOG_SUCCESS = 'UPDATE_EVENTLOG_SUCCESS';
export const UPDATE_EVENTLOG_FAILURE = 'UPDATE_EVENTLOG_FAILURE';

export const DELETE_EVENTLOG_REQUEST = 'DELETE_EVENTLOG_REQUEST';
export const DELETE_EVENTLOG_SUCCESS = 'DELETE_EVENTLOG_SUCCESS';
export const DELETE_EVENTLOG_FAILURE = 'DELETE_EVENTLOG_FAILURE';

export const LIST_EVENTLOG_REQUEST = 'LIST_EVENTLOG_REQUEST';
export const LIST_EVENTLOG_SUCCESS = 'LIST_EVENTLOG_SUCCESS';
export const LIST_EVENTLOG_FAILURE = 'LIST_EVENTLOG_FAILURE';

export const addEventLogRequest = () => ({
    type: ADD_EVENTLOG_REQUEST,
});

export const addEventLogSuccess = (EventLogs) => ({
    type: ADD_EVENTLOG_SUCCESS,
    payload: EventLogs,
});

export const addEventLogFailure = (error) => ({
    type: ADD_EVENTLOG_FAILURE,
    payload: error,
});


export const fetchEventLogRequest = () => ({
    type: FETCH_EVENTLOG_REQUEST,
});

export const fetchEventLogSuccess = (EventLogs) => ({
    type: FETCH_EVENTLOG_SUCCESS,
    payload: EventLogs,
});

export const fetchEventLogFailure = (error) => ({
    type: FETCH_EVENTLOG_FAILURE,
    payload: error,
});

export const listEventLogRequest = () => ({
    type: LIST_EVENTLOG_REQUEST,
});

export const listEventLogSuccess = (EventLogs) => ({
    type: LIST_EVENTLOG_SUCCESS,
    payload: EventLogs,
});

export const listEventLogFailure = (error) => ({
    type: LIST_EVENTLOG_FAILURE,
    payload: error,
});

export const updateEventLogRequest = (EventLog) => ({
    type: UPDATE_EVENTLOG_REQUEST,
    payload: EventLog,
});

export const updateEventLogSuccess = (EventLog) => ({
    type: UPDATE_EVENTLOG_SUCCESS,
    payload: EventLog,
});

export const updateEventLogFailure = (error) => ({
    type: UPDATE_EVENTLOG_FAILURE,
    payload: error,
});

export const deleteEventLogRequest = (EventLog) => ({
    type: DELETE_EVENTLOG_REQUEST,
    payload: EventLog,
});

export const deleteEventLogSuccess = (EventLog) => ({
    type: DELETE_EVENTLOG_SUCCESS,
    payload: EventLog,
});

export const deleteEventLogFailure = (error) => ({
    type: DELETE_EVENTLOG_FAILURE,
    payload: error,
});
