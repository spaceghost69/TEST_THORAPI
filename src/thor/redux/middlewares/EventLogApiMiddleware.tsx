
import { 
    getEventLog, 
    postEventLog,
    getEventLogList , 
    deleteEventLog , 
    updateEventLog 
} from '../../api';

import {

    ADD_EVENTLOG_REQUEST,
    FETCH_EVENTLOG_REQUEST,
    LIST_EVENTLOG_REQUEST,
    UPDATE_EVENTLOG_REQUEST,
    DELETE_EVENTLOG_REQUEST,

    addEventLogFailure,
    addEventLogSuccess,

    fetchEventLogFailure,
    fetchEventLogSuccess,
    
    listEventLogFailure,
    listEventLogSuccess,

    updateEventLogFailure,
    updateEventLogSuccess,
    
    deleteEventLogFailure,
    deleteEventLogSuccess,
    
} from '../actions/EventLogApiAction';

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by Valkyr Labs ThorAPI: https://valkyrlabs.com

Powered by Swagger Codegen: http://swagger.io

Generator version: (7.5.0)

Template file: typescript-redux-query/apiREST.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: EventLog
*/

export const EventLogMiddleware = ({ dispatch }) => (next) => async (action) => {
    console.log("EventLog MIDDLEWARE: " + JSON.stringify(action) )
    next(action);

    switch (action.type) {

        case ADD_EVENTLOG_REQUEST:
            try {
                const response = postEventLog(action.payload);
                dispatch(addEventLogSuccess(response.body));
            } catch (error) {
                dispatch(addEventLogFailure(error.message));
            }
            break;

        case LIST_EVENTLOG_REQUEST:
            try {
                const response = getEventLogList();
                dispatch(listEventLogSuccess(response.body));
            } catch (error) {
                dispatch(listEventLogFailure(error.message));
            }
            break;


        case FETCH_EVENTLOG_REQUEST:
            try {
                const response = getEventLog(action.id);
                dispatch(fetchEventLogSuccess(response.body));
            } catch (error) {
                dispatch(fetchEventLogFailure(error.message));
            }
            break;

        case UPDATE_EVENTLOG_REQUEST:
            try {
                const { id, EventLog } = action.payload;
                const response = updateEventLog(id);
                dispatch(updateEventLogSuccess(response.body));
            } catch (error) {
                dispatch(updateEventLogFailure(error.message));
            }
            break;

        case DELETE_EVENTLOG_REQUEST:
            try {
                const { id, EventLog } = action.payload;
                const response = deleteEventLog(id);
                dispatch(deleteEventLogSuccess(response.body));
            } catch (error) {
                dispatch(deleteEventLogFailure(error.message));
            }
            break;

        default:
            break;
    }
};

