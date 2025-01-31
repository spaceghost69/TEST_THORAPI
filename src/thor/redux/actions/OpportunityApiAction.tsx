// defines the Redux Actions for Opportunity

// Opportunity

export const FETCH_OPPORTUNITY_REQUEST = 'FETCH_OPPORTUNITY_REQUEST';
export const FETCH_OPPORTUNITY_SUCCESS = 'FETCH_OPPORTUNITY_SUCCESS';
export const FETCH_OPPORTUNITY_FAILURE = 'FETCH_OPPORTUNITY_FAILURE';

export const ADD_OPPORTUNITY_REQUEST = 'ADD_OPPORTUNITY_REQUEST';
export const ADD_OPPORTUNITY_SUCCESS = 'ADD_OPPORTUNITY_SUCCESS';
export const ADD_OPPORTUNITY_FAILURE = 'ADD_OPPORTUNITY_FAILURE';

export const UPDATE_OPPORTUNITY_REQUEST = 'UPDATE_OPPORTUNITY_REQUEST';
export const UPDATE_OPPORTUNITY_SUCCESS = 'UPDATE_OPPORTUNITY_SUCCESS';
export const UPDATE_OPPORTUNITY_FAILURE = 'UPDATE_OPPORTUNITY_FAILURE';

export const DELETE_OPPORTUNITY_REQUEST = 'DELETE_OPPORTUNITY_REQUEST';
export const DELETE_OPPORTUNITY_SUCCESS = 'DELETE_OPPORTUNITY_SUCCESS';
export const DELETE_OPPORTUNITY_FAILURE = 'DELETE_OPPORTUNITY_FAILURE';

export const LIST_OPPORTUNITY_REQUEST = 'LIST_OPPORTUNITY_REQUEST';
export const LIST_OPPORTUNITY_SUCCESS = 'LIST_OPPORTUNITY_SUCCESS';
export const LIST_OPPORTUNITY_FAILURE = 'LIST_OPPORTUNITY_FAILURE';

export const addOpportunityRequest = () => ({
    type: ADD_OPPORTUNITY_REQUEST,
});

export const addOpportunitySuccess = (Opportunitys) => ({
    type: ADD_OPPORTUNITY_SUCCESS,
    payload: Opportunitys,
});

export const addOpportunityFailure = (error) => ({
    type: ADD_OPPORTUNITY_FAILURE,
    payload: error,
});


export const fetchOpportunityRequest = () => ({
    type: FETCH_OPPORTUNITY_REQUEST,
});

export const fetchOpportunitySuccess = (Opportunitys) => ({
    type: FETCH_OPPORTUNITY_SUCCESS,
    payload: Opportunitys,
});

export const fetchOpportunityFailure = (error) => ({
    type: FETCH_OPPORTUNITY_FAILURE,
    payload: error,
});

export const listOpportunityRequest = () => ({
    type: LIST_OPPORTUNITY_REQUEST,
});

export const listOpportunitySuccess = (Opportunitys) => ({
    type: LIST_OPPORTUNITY_SUCCESS,
    payload: Opportunitys,
});

export const listOpportunityFailure = (error) => ({
    type: LIST_OPPORTUNITY_FAILURE,
    payload: error,
});

export const updateOpportunityRequest = (Opportunity) => ({
    type: UPDATE_OPPORTUNITY_REQUEST,
    payload: Opportunity,
});

export const updateOpportunitySuccess = (Opportunity) => ({
    type: UPDATE_OPPORTUNITY_SUCCESS,
    payload: Opportunity,
});

export const updateOpportunityFailure = (error) => ({
    type: UPDATE_OPPORTUNITY_FAILURE,
    payload: error,
});

export const deleteOpportunityRequest = (Opportunity) => ({
    type: DELETE_OPPORTUNITY_REQUEST,
    payload: Opportunity,
});

export const deleteOpportunitySuccess = (Opportunity) => ({
    type: DELETE_OPPORTUNITY_SUCCESS,
    payload: Opportunity,
});

export const deleteOpportunityFailure = (error) => ({
    type: DELETE_OPPORTUNITY_FAILURE,
    payload: error,
});
