// tslint:disable

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by Valkyr Labs ThorAPI: https://valkyrlabs.com

Powered by Swagger Codegen: http://swagger.io

Generator version: (7.5.0)

Template file: typescript-redux-query/apis.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: ContentMediaLinkApi
*/

import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../src/runtime';
import {
    ContentMediaLink,
    ContentMediaLinkFromJSON,
    ContentMediaLinkToJSON,
} from '../model';

export interface DeleteContentMediaLinkRequest {
    id: string;
}

export interface GetContentMediaLinkRequest {
    id: string;
}

export interface PostContentMediaLinkRequest {
    contentMediaLink: ContentMediaLink;
}

export interface UpdateContentMediaLinkRequest {
    id: string;
    contentMediaLink: ContentMediaLink;
}


/**
 * Deletes a specific ContentMediaLink.
 * Delete a ContentMediaLink.
 */
function deleteContentMediaLinkRaw<T>(requestParameters: DeleteContentMediaLinkRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteContentMediaLink.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/ContentMediaLink/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
* Deletes a specific ContentMediaLink.
* Delete a ContentMediaLink.
*/
export function deleteContentMediaLink<T>(requestParameters: DeleteContentMediaLinkRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteContentMediaLinkRaw(requestParameters, requestConfig);
}

/**
 * Retrieves a single ContentMediaLink for a specific uid.
 * Retrieve a single ContentMediaLink
 */
function getContentMediaLinkRaw<T>(requestParameters: GetContentMediaLinkRequest, requestConfig: runtime.TypedQueryConfig<T, ContentMediaLink> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getContentMediaLink.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/ContentMediaLink/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ContentMediaLinkFromJSON(body), text);
    }

    return config;
}

/**
* Retrieves a single ContentMediaLink for a specific uid.
* Retrieve a single ContentMediaLink
*/
export function getContentMediaLink<T>(requestParameters: GetContentMediaLinkRequest, requestConfig?: runtime.TypedQueryConfig<T, ContentMediaLink>): QueryConfig<T> {
    return getContentMediaLinkRaw(requestParameters, requestConfig);
}

/**
 * Retrieves a list of ContentMediaLinks.
 * Retrieve a list of ContentMediaLinks
 */
function getContentMediaLinkListRaw<T>( requestConfig: runtime.TypedQueryConfig<T, Array<ContentMediaLink>> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/ContentMediaLink`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(ContentMediaLinkFromJSON), text);
    }

    return config;
}

/**
* Retrieves a list of ContentMediaLinks.
* Retrieve a list of ContentMediaLinks
*/
export function getContentMediaLinkList<T>( requestConfig?: runtime.TypedQueryConfig<T, Array<ContentMediaLink>>): QueryConfig<T> {
    return getContentMediaLinkListRaw( requestConfig);
}

/**
 * Creates a new ContentMediaLink.
 * Create a new ContentMediaLink
 */
function postContentMediaLinkRaw<T>(requestParameters: PostContentMediaLinkRequest, requestConfig: runtime.TypedQueryConfig<T, ContentMediaLink> = {}): QueryConfig<T> {
    if (requestParameters.contentMediaLink === null || requestParameters.contentMediaLink === undefined) {
        throw new runtime.RequiredError('contentMediaLink','Required parameter requestParameters.contentMediaLink was null or undefined when calling postContentMediaLink.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/ContentMediaLink`,
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
        body: queryParameters || ContentMediaLinkToJSON(requestParameters.contentMediaLink),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ContentMediaLinkFromJSON(body), text);
    }

    return config;
}

/**
* Creates a new ContentMediaLink.
* Create a new ContentMediaLink
*/
export function postContentMediaLink<T>(requestParameters: PostContentMediaLinkRequest, requestConfig?: runtime.TypedQueryConfig<T, ContentMediaLink>): QueryConfig<T> {
    return postContentMediaLinkRaw(requestParameters, requestConfig);
}

/**
 * Updates an existing ContentMediaLink.
 * Update an existing ContentMediaLink
 */
function updateContentMediaLinkRaw<T>(requestParameters: UpdateContentMediaLinkRequest, requestConfig: runtime.TypedQueryConfig<T, ContentMediaLink> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateContentMediaLink.');
    }

    if (requestParameters.contentMediaLink === null || requestParameters.contentMediaLink === undefined) {
        throw new runtime.RequiredError('contentMediaLink','Required parameter requestParameters.contentMediaLink was null or undefined when calling updateContentMediaLink.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/ContentMediaLink/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
        body: queryParameters || ContentMediaLinkToJSON(requestParameters.contentMediaLink),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ContentMediaLinkFromJSON(body), text);
    }

    return config;
}

/**
* Updates an existing ContentMediaLink.
* Update an existing ContentMediaLink
*/
export function updateContentMediaLink<T>(requestParameters: UpdateContentMediaLinkRequest, requestConfig?: runtime.TypedQueryConfig<T, ContentMediaLink>): QueryConfig<T> {
    return updateContentMediaLinkRaw(requestParameters, requestConfig);
}

