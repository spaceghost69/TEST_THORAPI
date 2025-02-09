// tslint:disable

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by CARMINA GAMES ThorAPI: https://valkyrlabs.com

Powered by Swagger Codegen: http://swagger.io

Generator version: (7.5.0)

Template file: typescript-redux-query/apis.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: OasInfoApi
*/

import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../src/runtime';
import {
    OasInfo,
    OasInfoFromJSON,
    OasInfoToJSON,
} from '../model';

export interface DeleteOasInfoRequest {
    id: string;
}

export interface GetOasInfoRequest {
    id: string;
}

export interface PostOasInfoRequest {
    oasInfo: OasInfo;
}

export interface UpdateOasInfoRequest {
    id: string;
    oasInfo: OasInfo;
}


/**
 * Deletes a specific OasInfo.
 * Delete a OasInfo.
 */
function deleteOasInfoRaw<T>(requestParameters: DeleteOasInfoRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteOasInfo.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/OasInfo/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
* Deletes a specific OasInfo.
* Delete a OasInfo.
*/
export function deleteOasInfo<T>(requestParameters: DeleteOasInfoRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteOasInfoRaw(requestParameters, requestConfig);
}

/**
 * Retrieves a single OasInfo for a specific uid.
 * Retrieve a single OasInfo
 */
function getOasInfoRaw<T>(requestParameters: GetOasInfoRequest, requestConfig: runtime.TypedQueryConfig<T, OasInfo> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getOasInfo.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/OasInfo/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(OasInfoFromJSON(body), text);
    }

    return config;
}

/**
* Retrieves a single OasInfo for a specific uid.
* Retrieve a single OasInfo
*/
export function getOasInfo<T>(requestParameters: GetOasInfoRequest, requestConfig?: runtime.TypedQueryConfig<T, OasInfo>): QueryConfig<T> {
    return getOasInfoRaw(requestParameters, requestConfig);
}

/**
 * Retrieves a list of OasInfos.
 * Retrieve a list of OasInfos
 */
function getOasInfoListRaw<T>( requestConfig: runtime.TypedQueryConfig<T, Array<OasInfo>> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/OasInfo`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(OasInfoFromJSON), text);
    }

    return config;
}

/**
* Retrieves a list of OasInfos.
* Retrieve a list of OasInfos
*/
export function getOasInfoList<T>( requestConfig?: runtime.TypedQueryConfig<T, Array<OasInfo>>): QueryConfig<T> {
    return getOasInfoListRaw( requestConfig);
}

/**
 * Creates a new OasInfo.
 * Create a new OasInfo
 */
function postOasInfoRaw<T>(requestParameters: PostOasInfoRequest, requestConfig: runtime.TypedQueryConfig<T, OasInfo> = {}): QueryConfig<T> {
    if (requestParameters.oasInfo === null || requestParameters.oasInfo === undefined) {
        throw new runtime.RequiredError('oasInfo','Required parameter requestParameters.oasInfo was null or undefined when calling postOasInfo.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/OasInfo`,
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
        body: queryParameters || OasInfoToJSON(requestParameters.oasInfo),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(OasInfoFromJSON(body), text);
    }

    return config;
}

/**
* Creates a new OasInfo.
* Create a new OasInfo
*/
export function postOasInfo<T>(requestParameters: PostOasInfoRequest, requestConfig?: runtime.TypedQueryConfig<T, OasInfo>): QueryConfig<T> {
    return postOasInfoRaw(requestParameters, requestConfig);
}

/**
 * Updates an existing OasInfo.
 * Update an existing OasInfo
 */
function updateOasInfoRaw<T>(requestParameters: UpdateOasInfoRequest, requestConfig: runtime.TypedQueryConfig<T, OasInfo> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateOasInfo.');
    }

    if (requestParameters.oasInfo === null || requestParameters.oasInfo === undefined) {
        throw new runtime.RequiredError('oasInfo','Required parameter requestParameters.oasInfo was null or undefined when calling updateOasInfo.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/OasInfo/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
        body: queryParameters || OasInfoToJSON(requestParameters.oasInfo),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(OasInfoFromJSON(body), text);
    }

    return config;
}

/**
* Updates an existing OasInfo.
* Update an existing OasInfo
*/
export function updateOasInfo<T>(requestParameters: UpdateOasInfoRequest, requestConfig?: runtime.TypedQueryConfig<T, OasInfo>): QueryConfig<T> {
    return updateOasInfoRaw(requestParameters, requestConfig);
}

