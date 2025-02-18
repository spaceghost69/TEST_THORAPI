// tslint:disable
/**
 * ValkyrAI CORE API
 * The API for accessing ValkyrAI services
 *
 * The version of the OpenAPI document: 0.9.25
 * Contact: info@valkyrlabs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../src/runtime';
import {


    ExecModule,
    ExecModuleFromJSON,
    ExecModuleToJSON,
} from './';


// thorapi

/**
 * ValkyrAI Task object manages execution and state of automation workflows
 * @export
 * @interface Task
 */
export type Task  = {
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    description?: string;
    /**
     * The workflow this state is participating in
     * @type {string}
     * @memberof Task
     */
    workflowId?: string;
    /**
     * override the workflow role for specific task -login to a system- the role with permissions -temporary user is created
     * @type {string}
     * @memberof Task
     */
    role?: TaskRoleEnum;
    /**
     * an array of ExecModules to be processed
     * @type {Array<ExecModule>}
     * @memberof Task
     */
    modules?: Array<ExecModule>;
    /**
     * last known status of the task
     * @type {string}
     * @memberof Task
     */
    status?: TaskStatusEnum;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof Task
     */
    id?: string;
    /**
     * UUID of owner of the object in the system
     * @type {string}
     * @memberof Task
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof Task
     */
    createdDate?: Date;
    /**
     * Data, including hash of the key(s) used to encrypt this record.
     * @type {string}
     * @memberof Task
     */
    keyHash?: string;
    /**
     * Last user to access object
     * @type {string}
     * @memberof Task
     */
    lastAccessedById?: string;
    /**
     * Timestamp of last access of object
     * @type {Date}
     * @memberof Task
     */
    lastAccessedDate?: Date;
    /**
     * Unique identifier for user who last modifed the object in the system
     * @type {string}
     * @memberof Task
     */
    lastModifiedById?: string;
    /**
     * Date of last object modification
     * @type {Date}
     * @memberof Task
     */
    lastModifiedDate?: Date;
}

export function TaskFromJSON(json: any): Task {
    return {
        'description': !exists(json, 'description') ? undefined : json['description'],
        'workflowId': !exists(json, 'workflowId') ? undefined : json['workflowId'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'modules': !exists(json, 'modules') ? undefined : (json['modules'] as Array<any>).map(ExecModuleFromJSON),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'createdDate': !exists(json, 'createdDate') ? undefined : new Date(json['createdDate']),
        'keyHash': !exists(json, 'keyHash') ? undefined : json['keyHash'],
        'lastAccessedById': !exists(json, 'lastAccessedById') ? undefined : json['lastAccessedById'],
        'lastAccessedDate': !exists(json, 'lastAccessedDate') ? undefined : new Date(json['lastAccessedDate']),
        'lastModifiedById': !exists(json, 'lastModifiedById') ? undefined : json['lastModifiedById'],
        'lastModifiedDate': !exists(json, 'lastModifiedDate') ? undefined : new Date(json['lastModifiedDate']),
    };
}

export function TaskToJSON(value?: Task): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'description': value.description,
        'workflowId': value.workflowId,
        'role': value.role,
        'modules': value.modules === undefined ? undefined : (value.modules as Array<any>).map(ExecModuleToJSON),
        'status': value.status,
        'id': value.id,
        'ownerId': value.ownerId,
        'createdDate': value.createdDate === undefined ? undefined : value.createdDate.toISOString(),
        'keyHash': value.keyHash,
        'lastAccessedById': value.lastAccessedById,
        'lastAccessedDate': value.lastAccessedDate === undefined ? undefined : value.lastAccessedDate.toISOString(),
        'lastModifiedById': value.lastModifiedById,
        'lastModifiedDate': value.lastModifiedDate === undefined ? undefined : value.lastModifiedDate.toISOString(),
    };
}

/**
* @export
* @enum {string}
*/
export enum TaskRoleEnum {
    USER = 'user',
    ASSISTANT = 'assistant'
}
/**
* @export
* @enum {string}
*/
export enum TaskStatusEnum {
    RUNNING = 'running',
    STOPPED = 'stopped',
    READY = 'ready',
    GOOD = 'good',
    WARNING = 'warning',
    ERROR = 'error',
    DISABLED = 'disabled'
}


