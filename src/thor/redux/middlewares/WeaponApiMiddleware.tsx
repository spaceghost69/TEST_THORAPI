
import { 
    getWeapon, 
    postWeapon,
    getWeaponList , 
    deleteWeapon , 
    updateWeapon 
} from '../../api';

import {

    ADD_WEAPON_REQUEST,
    FETCH_WEAPON_REQUEST,
    LIST_WEAPON_REQUEST,
    UPDATE_WEAPON_REQUEST,
    DELETE_WEAPON_REQUEST,

    addWeaponFailure,
    addWeaponSuccess,

    fetchWeaponFailure,
    fetchWeaponSuccess,
    
    listWeaponFailure,
    listWeaponSuccess,

    updateWeaponFailure,
    updateWeaponSuccess,
    
    deleteWeaponFailure,
    deleteWeaponSuccess,
    
} from '../actions/WeaponApiAction';

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by Valkyr Labs ThorAPI: https://valkyrlabs.com

Powered by Swagger Codegen: http://swagger.io

Generator version: (7.5.0)

Template file: typescript-redux-query/apiREST.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: Weapon
*/

export const WeaponMiddleware = ({ dispatch }) => (next) => async (action) => {
    console.log("Weapon MIDDLEWARE: " + JSON.stringify(action) )
    next(action);

    switch (action.type) {

        case ADD_WEAPON_REQUEST:
            try {
                const response = postWeapon(action.payload);
                dispatch(addWeaponSuccess(response.body));
            } catch (error) {
                dispatch(addWeaponFailure(error.message));
            }
            break;

        case LIST_WEAPON_REQUEST:
            try {
                const response = getWeaponList();
                dispatch(listWeaponSuccess(response.body));
            } catch (error) {
                dispatch(listWeaponFailure(error.message));
            }
            break;


        case FETCH_WEAPON_REQUEST:
            try {
                const response = getWeapon(action.id);
                dispatch(fetchWeaponSuccess(response.body));
            } catch (error) {
                dispatch(fetchWeaponFailure(error.message));
            }
            break;

        case UPDATE_WEAPON_REQUEST:
            try {
                const { id, Weapon } = action.payload;
                const response = updateWeapon(id);
                dispatch(updateWeaponSuccess(response.body));
            } catch (error) {
                dispatch(updateWeaponFailure(error.message));
            }
            break;

        case DELETE_WEAPON_REQUEST:
            try {
                const { id, Weapon } = action.payload;
                const response = deleteWeapon(id);
                dispatch(deleteWeaponSuccess(response.body));
            } catch (error) {
                dispatch(deleteWeaponFailure(error.message));
            }
            break;

        default:
            break;
    }
};

