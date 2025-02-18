// tslint:disable

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by CARMINA GAMES ThorAPI: https://valkyrlabs.com

Powered by Swagger Codegen: http://swagger.io

Generator version: (7.5.0)

Template file: typescript-redux-query/apis.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: BorderApi
*/

import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../src/runtime';
import {
    Border,
    BorderFromJSON,
    BorderToJSON,
} from '../model';

export interface DeleteBorderRequest {
    id: string;
}

export interface GetBorderRequest {
    id: string;
}

export interface PostBorderRequest {
    border: Border;
}

export interface UpdateBorderRequest {
    id: string;
    border: Border;
}


/**
 * Deletes a specific Border.
 * Delete a Border.
 */
function deleteBorderRaw<T>(requestParameters: DeleteBorderRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteBorder.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/Border/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'DELETE',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Deletes a specific Border.
* Delete a Border.
*/
export function deleteBorder<T>(requestParameters: DeleteBorderRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteBorderRaw(requestParameters, requestConfig);
}

/**
 * Retrieves a single Border for a specific uid.
 * Retrieve a single Border
 */
function getBorderRaw<T>(requestParameters: GetBorderRequest, requestConfig: runtime.TypedQueryConfig<T, Border> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBorder.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/Border/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(BorderFromJSON(body), text);
    }

    return config;
}

/**
* Retrieves a single Border for a specific uid.
* Retrieve a single Border
*/
export function getBorder<T>(requestParameters: GetBorderRequest, requestConfig?: runtime.TypedQueryConfig<T, Border>): QueryConfig<T> {
    return getBorderRaw(requestParameters, requestConfig);
}

/**
 * Retrieves a list of Borders.
 * Retrieve a list of Borders
 */
function getBorderListRaw<T>( requestConfig: runtime.TypedQueryConfig<T, Array<Border>> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/Border`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(BorderFromJSON), text);
    }

    return config;
}

/**
* Retrieves a list of Borders.
* Retrieve a list of Borders
*/
export function getBorderList<T>( requestConfig?: runtime.TypedQueryConfig<T, Array<Border>>): QueryConfig<T> {
    return getBorderListRaw( requestConfig);
}

/**
 * Creates a new Border.
 * Create a new Border
 */
function postBorderRaw<T>(requestParameters: PostBorderRequest, requestConfig: runtime.TypedQueryConfig<T, Border> = {}): QueryConfig<T> {
    if (requestParameters.border === null || requestParameters.border === undefined) {
        throw new runtime.RequiredError('border','Required parameter requestParameters.border was null or undefined when calling postBorder.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/Border`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || BorderToJSON(requestParameters.border),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(BorderFromJSON(body), text);
    }

    return config;
}

/**
* Creates a new Border.
* Create a new Border
*/
export function postBorder<T>(requestParameters: PostBorderRequest, requestConfig?: runtime.TypedQueryConfig<T, Border>): QueryConfig<T> {
    return postBorderRaw(requestParameters, requestConfig);
}

/**
 * Updates an existing Border.
 * Update an existing Border
 */
function updateBorderRaw<T>(requestParameters: UpdateBorderRequest, requestConfig: runtime.TypedQueryConfig<T, Border> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateBorder.');
    }

    if (requestParameters.border === null || requestParameters.border === undefined) {
        throw new runtime.RequiredError('border','Required parameter requestParameters.border was null or undefined when calling updateBorder.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/Border/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'PUT',
            headers: headerParameters,
        },
        body: queryParameters || BorderToJSON(requestParameters.border),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(BorderFromJSON(body), text);
    }

    return config;
}

/**
* Updates an existing Border.
* Update an existing Border
*/
export function updateBorder<T>(requestParameters: UpdateBorderRequest, requestConfig?: runtime.TypedQueryConfig<T, Border>): QueryConfig<T> {
    return updateBorderRaw(requestParameters, requestConfig);
}

