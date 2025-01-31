// defines the Redux Actions for KeyMetric

// KeyMetric

export const FETCH_KEYMETRIC_REQUEST = 'FETCH_KEYMETRIC_REQUEST';
export const FETCH_KEYMETRIC_SUCCESS = 'FETCH_KEYMETRIC_SUCCESS';
export const FETCH_KEYMETRIC_FAILURE = 'FETCH_KEYMETRIC_FAILURE';

export const ADD_KEYMETRIC_REQUEST = 'ADD_KEYMETRIC_REQUEST';
export const ADD_KEYMETRIC_SUCCESS = 'ADD_KEYMETRIC_SUCCESS';
export const ADD_KEYMETRIC_FAILURE = 'ADD_KEYMETRIC_FAILURE';

export const UPDATE_KEYMETRIC_REQUEST = 'UPDATE_KEYMETRIC_REQUEST';
export const UPDATE_KEYMETRIC_SUCCESS = 'UPDATE_KEYMETRIC_SUCCESS';
export const UPDATE_KEYMETRIC_FAILURE = 'UPDATE_KEYMETRIC_FAILURE';

export const DELETE_KEYMETRIC_REQUEST = 'DELETE_KEYMETRIC_REQUEST';
export const DELETE_KEYMETRIC_SUCCESS = 'DELETE_KEYMETRIC_SUCCESS';
export const DELETE_KEYMETRIC_FAILURE = 'DELETE_KEYMETRIC_FAILURE';

export const LIST_KEYMETRIC_REQUEST = 'LIST_KEYMETRIC_REQUEST';
export const LIST_KEYMETRIC_SUCCESS = 'LIST_KEYMETRIC_SUCCESS';
export const LIST_KEYMETRIC_FAILURE = 'LIST_KEYMETRIC_FAILURE';

export const addKeyMetricRequest = () => ({
    type: ADD_KEYMETRIC_REQUEST,
});

export const addKeyMetricSuccess = (KeyMetrics) => ({
    type: ADD_KEYMETRIC_SUCCESS,
    payload: KeyMetrics,
});

export const addKeyMetricFailure = (error) => ({
    type: ADD_KEYMETRIC_FAILURE,
    payload: error,
});


export const fetchKeyMetricRequest = () => ({
    type: FETCH_KEYMETRIC_REQUEST,
});

export const fetchKeyMetricSuccess = (KeyMetrics) => ({
    type: FETCH_KEYMETRIC_SUCCESS,
    payload: KeyMetrics,
});

export const fetchKeyMetricFailure = (error) => ({
    type: FETCH_KEYMETRIC_FAILURE,
    payload: error,
});

export const listKeyMetricRequest = () => ({
    type: LIST_KEYMETRIC_REQUEST,
});

export const listKeyMetricSuccess = (KeyMetrics) => ({
    type: LIST_KEYMETRIC_SUCCESS,
    payload: KeyMetrics,
});

export const listKeyMetricFailure = (error) => ({
    type: LIST_KEYMETRIC_FAILURE,
    payload: error,
});

export const updateKeyMetricRequest = (KeyMetric) => ({
    type: UPDATE_KEYMETRIC_REQUEST,
    payload: KeyMetric,
});

export const updateKeyMetricSuccess = (KeyMetric) => ({
    type: UPDATE_KEYMETRIC_SUCCESS,
    payload: KeyMetric,
});

export const updateKeyMetricFailure = (error) => ({
    type: UPDATE_KEYMETRIC_FAILURE,
    payload: error,
});

export const deleteKeyMetricRequest = (KeyMetric) => ({
    type: DELETE_KEYMETRIC_REQUEST,
    payload: KeyMetric,
});

export const deleteKeyMetricSuccess = (KeyMetric) => ({
    type: DELETE_KEYMETRIC_SUCCESS,
    payload: KeyMetric,
});

export const deleteKeyMetricFailure = (error) => ({
    type: DELETE_KEYMETRIC_FAILURE,
    payload: error,
});
