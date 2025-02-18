// tslint:disable

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by Valkyr Labs ThorAPI: https://valkyrlabs.com

Powered by Swagger Codegen: http://swagger.io

Generator version: (7.5.0)

Template file: typescript-redux-query/apis.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: GameApi
*/

import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../src/runtime';
import {
    Game,
    GameFromJSON,
    GameToJSON,
} from '../model';

export interface DeleteGameRequest {
    id: string;
}

export interface GetGameRequest {
    id: string;
}

export interface PostGameRequest {
    game: Game;
}

export interface UpdateGameRequest {
    id: string;
    game: Game;
}


/**
 * Deletes a specific Game.
 * Delete a Game.
 */
function deleteGameRaw<T>(requestParameters: DeleteGameRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteGame.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/Game/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
* Deletes a specific Game.
* Delete a Game.
*/
export function deleteGame<T>(requestParameters: DeleteGameRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteGameRaw(requestParameters, requestConfig);
}

/**
 * Retrieves a single Game for a specific uid.
 * Retrieve a single Game
 */
function getGameRaw<T>(requestParameters: GetGameRequest, requestConfig: runtime.TypedQueryConfig<T, Game> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getGame.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/Game/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(GameFromJSON(body), text);
    }

    return config;
}

/**
* Retrieves a single Game for a specific uid.
* Retrieve a single Game
*/
export function getGame<T>(requestParameters: GetGameRequest, requestConfig?: runtime.TypedQueryConfig<T, Game>): QueryConfig<T> {
    return getGameRaw(requestParameters, requestConfig);
}

/**
 * Retrieves a list of Games.
 * Retrieve a list of Games
 */
function getGameListRaw<T>( requestConfig: runtime.TypedQueryConfig<T, Array<Game>> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/Game`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(GameFromJSON), text);
    }

    return config;
}

/**
* Retrieves a list of Games.
* Retrieve a list of Games
*/
export function getGameList<T>( requestConfig?: runtime.TypedQueryConfig<T, Array<Game>>): QueryConfig<T> {
    return getGameListRaw( requestConfig);
}

/**
 * Creates a new Game.
 * Create a new Game
 */
function postGameRaw<T>(requestParameters: PostGameRequest, requestConfig: runtime.TypedQueryConfig<T, Game> = {}): QueryConfig<T> {
    if (requestParameters.game === null || requestParameters.game === undefined) {
        throw new runtime.RequiredError('game','Required parameter requestParameters.game was null or undefined when calling postGame.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/Game`,
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
        body: queryParameters || GameToJSON(requestParameters.game),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(GameFromJSON(body), text);
    }

    return config;
}

/**
* Creates a new Game.
* Create a new Game
*/
export function postGame<T>(requestParameters: PostGameRequest, requestConfig?: runtime.TypedQueryConfig<T, Game>): QueryConfig<T> {
    return postGameRaw(requestParameters, requestConfig);
}

/**
 * Updates an existing Game.
 * Update an existing Game
 */
function updateGameRaw<T>(requestParameters: UpdateGameRequest, requestConfig: runtime.TypedQueryConfig<T, Game> = {}): QueryConfig<T> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
        throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateGame.');
    }

    if (requestParameters.game === null || requestParameters.game === undefined) {
        throw new runtime.RequiredError('game','Required parameter requestParameters.game was null or undefined when calling updateGame.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/Game/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
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
        body: queryParameters || GameToJSON(requestParameters.game),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(GameFromJSON(body), text);
    }

    return config;
}

/**
* Updates an existing Game.
* Update an existing Game
*/
export function updateGame<T>(requestParameters: UpdateGameRequest, requestConfig?: runtime.TypedQueryConfig<T, Game>): QueryConfig<T> {
    return updateGameRaw(requestParameters, requestConfig);
}

