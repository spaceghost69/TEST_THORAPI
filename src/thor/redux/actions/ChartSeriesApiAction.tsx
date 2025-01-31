// defines the Redux Actions for ChartSeries

// ChartSeries

export const FETCH_CHARTSERIES_REQUEST = 'FETCH_CHARTSERIES_REQUEST';
export const FETCH_CHARTSERIES_SUCCESS = 'FETCH_CHARTSERIES_SUCCESS';
export const FETCH_CHARTSERIES_FAILURE = 'FETCH_CHARTSERIES_FAILURE';

export const ADD_CHARTSERIES_REQUEST = 'ADD_CHARTSERIES_REQUEST';
export const ADD_CHARTSERIES_SUCCESS = 'ADD_CHARTSERIES_SUCCESS';
export const ADD_CHARTSERIES_FAILURE = 'ADD_CHARTSERIES_FAILURE';

export const UPDATE_CHARTSERIES_REQUEST = 'UPDATE_CHARTSERIES_REQUEST';
export const UPDATE_CHARTSERIES_SUCCESS = 'UPDATE_CHARTSERIES_SUCCESS';
export const UPDATE_CHARTSERIES_FAILURE = 'UPDATE_CHARTSERIES_FAILURE';

export const DELETE_CHARTSERIES_REQUEST = 'DELETE_CHARTSERIES_REQUEST';
export const DELETE_CHARTSERIES_SUCCESS = 'DELETE_CHARTSERIES_SUCCESS';
export const DELETE_CHARTSERIES_FAILURE = 'DELETE_CHARTSERIES_FAILURE';

export const LIST_CHARTSERIES_REQUEST = 'LIST_CHARTSERIES_REQUEST';
export const LIST_CHARTSERIES_SUCCESS = 'LIST_CHARTSERIES_SUCCESS';
export const LIST_CHARTSERIES_FAILURE = 'LIST_CHARTSERIES_FAILURE';

export const addChartSeriesRequest = () => ({
    type: ADD_CHARTSERIES_REQUEST,
});

export const addChartSeriesSuccess = (ChartSeriess) => ({
    type: ADD_CHARTSERIES_SUCCESS,
    payload: ChartSeriess,
});

export const addChartSeriesFailure = (error) => ({
    type: ADD_CHARTSERIES_FAILURE,
    payload: error,
});


export const fetchChartSeriesRequest = () => ({
    type: FETCH_CHARTSERIES_REQUEST,
});

export const fetchChartSeriesSuccess = (ChartSeriess) => ({
    type: FETCH_CHARTSERIES_SUCCESS,
    payload: ChartSeriess,
});

export const fetchChartSeriesFailure = (error) => ({
    type: FETCH_CHARTSERIES_FAILURE,
    payload: error,
});

export const listChartSeriesRequest = () => ({
    type: LIST_CHARTSERIES_REQUEST,
});

export const listChartSeriesSuccess = (ChartSeriess) => ({
    type: LIST_CHARTSERIES_SUCCESS,
    payload: ChartSeriess,
});

export const listChartSeriesFailure = (error) => ({
    type: LIST_CHARTSERIES_FAILURE,
    payload: error,
});

export const updateChartSeriesRequest = (ChartSeries) => ({
    type: UPDATE_CHARTSERIES_REQUEST,
    payload: ChartSeries,
});

export const updateChartSeriesSuccess = (ChartSeries) => ({
    type: UPDATE_CHARTSERIES_SUCCESS,
    payload: ChartSeries,
});

export const updateChartSeriesFailure = (error) => ({
    type: UPDATE_CHARTSERIES_FAILURE,
    payload: error,
});

export const deleteChartSeriesRequest = (ChartSeries) => ({
    type: DELETE_CHARTSERIES_REQUEST,
    payload: ChartSeries,
});

export const deleteChartSeriesSuccess = (ChartSeries) => ({
    type: DELETE_CHARTSERIES_SUCCESS,
    payload: ChartSeries,
});

export const deleteChartSeriesFailure = (error) => ({
    type: DELETE_CHARTSERIES_FAILURE,
    payload: error,
});
