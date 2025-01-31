// defines the Redux Actions for SalesPipeline

// SalesPipeline

export const FETCH_SALESPIPELINE_REQUEST = 'FETCH_SALESPIPELINE_REQUEST';
export const FETCH_SALESPIPELINE_SUCCESS = 'FETCH_SALESPIPELINE_SUCCESS';
export const FETCH_SALESPIPELINE_FAILURE = 'FETCH_SALESPIPELINE_FAILURE';

export const ADD_SALESPIPELINE_REQUEST = 'ADD_SALESPIPELINE_REQUEST';
export const ADD_SALESPIPELINE_SUCCESS = 'ADD_SALESPIPELINE_SUCCESS';
export const ADD_SALESPIPELINE_FAILURE = 'ADD_SALESPIPELINE_FAILURE';

export const UPDATE_SALESPIPELINE_REQUEST = 'UPDATE_SALESPIPELINE_REQUEST';
export const UPDATE_SALESPIPELINE_SUCCESS = 'UPDATE_SALESPIPELINE_SUCCESS';
export const UPDATE_SALESPIPELINE_FAILURE = 'UPDATE_SALESPIPELINE_FAILURE';

export const DELETE_SALESPIPELINE_REQUEST = 'DELETE_SALESPIPELINE_REQUEST';
export const DELETE_SALESPIPELINE_SUCCESS = 'DELETE_SALESPIPELINE_SUCCESS';
export const DELETE_SALESPIPELINE_FAILURE = 'DELETE_SALESPIPELINE_FAILURE';

export const LIST_SALESPIPELINE_REQUEST = 'LIST_SALESPIPELINE_REQUEST';
export const LIST_SALESPIPELINE_SUCCESS = 'LIST_SALESPIPELINE_SUCCESS';
export const LIST_SALESPIPELINE_FAILURE = 'LIST_SALESPIPELINE_FAILURE';

export const addSalesPipelineRequest = () => ({
    type: ADD_SALESPIPELINE_REQUEST,
});

export const addSalesPipelineSuccess = (SalesPipelines) => ({
    type: ADD_SALESPIPELINE_SUCCESS,
    payload: SalesPipelines,
});

export const addSalesPipelineFailure = (error) => ({
    type: ADD_SALESPIPELINE_FAILURE,
    payload: error,
});


export const fetchSalesPipelineRequest = () => ({
    type: FETCH_SALESPIPELINE_REQUEST,
});

export const fetchSalesPipelineSuccess = (SalesPipelines) => ({
    type: FETCH_SALESPIPELINE_SUCCESS,
    payload: SalesPipelines,
});

export const fetchSalesPipelineFailure = (error) => ({
    type: FETCH_SALESPIPELINE_FAILURE,
    payload: error,
});

export const listSalesPipelineRequest = () => ({
    type: LIST_SALESPIPELINE_REQUEST,
});

export const listSalesPipelineSuccess = (SalesPipelines) => ({
    type: LIST_SALESPIPELINE_SUCCESS,
    payload: SalesPipelines,
});

export const listSalesPipelineFailure = (error) => ({
    type: LIST_SALESPIPELINE_FAILURE,
    payload: error,
});

export const updateSalesPipelineRequest = (SalesPipeline) => ({
    type: UPDATE_SALESPIPELINE_REQUEST,
    payload: SalesPipeline,
});

export const updateSalesPipelineSuccess = (SalesPipeline) => ({
    type: UPDATE_SALESPIPELINE_SUCCESS,
    payload: SalesPipeline,
});

export const updateSalesPipelineFailure = (error) => ({
    type: UPDATE_SALESPIPELINE_FAILURE,
    payload: error,
});

export const deleteSalesPipelineRequest = (SalesPipeline) => ({
    type: DELETE_SALESPIPELINE_REQUEST,
    payload: SalesPipeline,
});

export const deleteSalesPipelineSuccess = (SalesPipeline) => ({
    type: DELETE_SALESPIPELINE_SUCCESS,
    payload: SalesPipeline,
});

export const deleteSalesPipelineFailure = (error) => ({
    type: DELETE_SALESPIPELINE_FAILURE,
    payload: error,
});
