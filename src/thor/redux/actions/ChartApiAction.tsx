// defines the Redux Actions for Chart

// Chart

export const FETCH_CHART_REQUEST = 'FETCH_CHART_REQUEST';
export const FETCH_CHART_SUCCESS = 'FETCH_CHART_SUCCESS';
export const FETCH_CHART_FAILURE = 'FETCH_CHART_FAILURE';

export const ADD_CHART_REQUEST = 'ADD_CHART_REQUEST';
export const ADD_CHART_SUCCESS = 'ADD_CHART_SUCCESS';
export const ADD_CHART_FAILURE = 'ADD_CHART_FAILURE';

export const UPDATE_CHART_REQUEST = 'UPDATE_CHART_REQUEST';
export const UPDATE_CHART_SUCCESS = 'UPDATE_CHART_SUCCESS';
export const UPDATE_CHART_FAILURE = 'UPDATE_CHART_FAILURE';

export const DELETE_CHART_REQUEST = 'DELETE_CHART_REQUEST';
export const DELETE_CHART_SUCCESS = 'DELETE_CHART_SUCCESS';
export const DELETE_CHART_FAILURE = 'DELETE_CHART_FAILURE';

export const LIST_CHART_REQUEST = 'LIST_CHART_REQUEST';
export const LIST_CHART_SUCCESS = 'LIST_CHART_SUCCESS';
export const LIST_CHART_FAILURE = 'LIST_CHART_FAILURE';

export const addChartRequest = () => ({
    type: ADD_CHART_REQUEST,
});

export const addChartSuccess = (Charts) => ({
    type: ADD_CHART_SUCCESS,
    payload: Charts,
});

export const addChartFailure = (error) => ({
    type: ADD_CHART_FAILURE,
    payload: error,
});


export const fetchChartRequest = () => ({
    type: FETCH_CHART_REQUEST,
});

export const fetchChartSuccess = (Charts) => ({
    type: FETCH_CHART_SUCCESS,
    payload: Charts,
});

export const fetchChartFailure = (error) => ({
    type: FETCH_CHART_FAILURE,
    payload: error,
});

export const listChartRequest = () => ({
    type: LIST_CHART_REQUEST,
});

export const listChartSuccess = (Charts) => ({
    type: LIST_CHART_SUCCESS,
    payload: Charts,
});

export const listChartFailure = (error) => ({
    type: LIST_CHART_FAILURE,
    payload: error,
});

export const updateChartRequest = (Chart) => ({
    type: UPDATE_CHART_REQUEST,
    payload: Chart,
});

export const updateChartSuccess = (Chart) => ({
    type: UPDATE_CHART_SUCCESS,
    payload: Chart,
});

export const updateChartFailure = (error) => ({
    type: UPDATE_CHART_FAILURE,
    payload: error,
});

export const deleteChartRequest = (Chart) => ({
    type: DELETE_CHART_REQUEST,
    payload: Chart,
});

export const deleteChartSuccess = (Chart) => ({
    type: DELETE_CHART_SUCCESS,
    payload: Chart,
});

export const deleteChartFailure = (error) => ({
    type: DELETE_CHART_FAILURE,
    payload: error,
});
