// tslint:disable
/**
 * Percival the Dragon Slayer CORE API
 * The API for accessing Percival the Dragon Slayer services
 *
 * The version of the OpenAPI document: 0.9.25
 * Contact: info@valkyrlabs.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../src/runtime';

// thorapi

/**
 * TODO ThorUXComponent CLASS DESCRIPTION
 * @export
 * @interface ThorUXComponent
 */
export type ThorUXComponent  = {
    /**
     * The type of the UX component.
     * @type {string}
     * @memberof ThorUXComponent
     */
    componentType?: string;
    /**
     * The status of the component in the UX.
     * @type {string}
     * @memberof ThorUXComponent
     */
    status?: ThorUXComponentStatusEnum;
    /**
     * The option for the component in the UX.
     * @type {string}
     * @memberof ThorUXComponent
     */
    settings?: ThorUXComponentSettingsEnum;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof ThorUXComponent
     */
    id?: string;
    /**
     * UUID of owner of the object in the system
     * @type {string}
     * @memberof ThorUXComponent
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof ThorUXComponent
     */
    createdDate?: Date;
    /**
     * Data, including hash of the key(s) used to encrypt this record.
     * @type {string}
     * @memberof ThorUXComponent
     */
    keyHash?: string;
    /**
     * Last user to access object
     * @type {string}
     * @memberof ThorUXComponent
     */
    lastAccessedById?: string;
    /**
     * Timestamp of last access of object
     * @type {Date}
     * @memberof ThorUXComponent
     */
    lastAccessedDate?: Date;
    /**
     * Unique identifier for user who last modifed the object in the system
     * @type {string}
     * @memberof ThorUXComponent
     */
    lastModifiedById?: string;
    /**
     * Date of last object modification
     * @type {Date}
     * @memberof ThorUXComponent
     */
    lastModifiedDate?: Date;
}

export function ThorUXComponentFromJSON(json: any): ThorUXComponent {
    return {
        'componentType': !exists(json, 'componentType') ? undefined : json['componentType'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'settings': !exists(json, 'settings') ? undefined : json['settings'],
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

export function ThorUXComponentToJSON(value?: ThorUXComponent): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'componentType': value.componentType,
        'status': value.status,
        'settings': value.settings,
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
export enum ThorUXComponentStatusEnum {
    READY = 'ready',
    PENDING = 'pending',
    DISABLED = 'disabled',
    HIDDEN = 'hidden'
}
/**
* @export
* @enum {string}
*/
export enum ThorUXComponentSettingsEnum {
    OPT1 = 'opt1',
    OPT2 = 'opt2',
    OPT3 = 'opt3',
    OPT4 = 'opt4'
}


