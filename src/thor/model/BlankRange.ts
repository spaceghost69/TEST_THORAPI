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
import {


    Cell,
    CellFromJSON,
    CellToJSON,
} from './';


// thorapi

/**
 * 
 * @export
 * @interface BlankRange
 */
export type BlankRange  = {
    /**
     * the sheet containing this blank range
     * @type {string}
     * @memberof BlankRange
     */
    sheetId?: string;
    /**
     * 
     * @type {Cell}
     * @memberof BlankRange
     */
    startCell?: Cell;
    /**
     * 
     * @type {Cell}
     * @memberof BlankRange
     */
    endCell?: Cell;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof BlankRange
     */
    id?: string;
    /**
     * UUID of owner of the object in the system
     * @type {string}
     * @memberof BlankRange
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof BlankRange
     */
    createdDate?: Date;
    /**
     * Data, including hash of the key(s) used to encrypt this record.
     * @type {string}
     * @memberof BlankRange
     */
    keyHash?: string;
    /**
     * Last user to access object
     * @type {string}
     * @memberof BlankRange
     */
    lastAccessedById?: string;
    /**
     * Timestamp of last access of object
     * @type {Date}
     * @memberof BlankRange
     */
    lastAccessedDate?: Date;
    /**
     * Unique identifier for user who last modifed the object in the system
     * @type {string}
     * @memberof BlankRange
     */
    lastModifiedById?: string;
    /**
     * Date of last object modification
     * @type {Date}
     * @memberof BlankRange
     */
    lastModifiedDate?: Date;
}

export function BlankRangeFromJSON(json: any): BlankRange {
    return {
        'sheetId': !exists(json, 'sheetId') ? undefined : json['sheetId'],
        'startCell': !exists(json, 'startCell') ? undefined : CellFromJSON(json['startCell']),
        'endCell': !exists(json, 'endCell') ? undefined : CellFromJSON(json['endCell']),
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

export function BlankRangeToJSON(value?: BlankRange): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'sheetId': value.sheetId,
        'startCell': CellToJSON(value.startCell),
        'endCell': CellToJSON(value.endCell),
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


