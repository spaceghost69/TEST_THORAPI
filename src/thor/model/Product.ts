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
 * Represents a product or service in the CRM.
 * @export
 * @interface Product
 */
export type Product  = {
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    productId: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    unitPrice: number;
    /**
     * Availability status of the product.
     * @type {string}
     * @memberof Product
     */
    status: ProductStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    description?: string;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof Product
     */
    id?: string;
    /**
     * UUID of owner of the object in the system
     * @type {string}
     * @memberof Product
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof Product
     */
    createdDate?: Date;
    /**
     * Data, including hash of the key(s) used to encrypt this record.
     * @type {string}
     * @memberof Product
     */
    keyHash?: string;
    /**
     * Last user to access object
     * @type {string}
     * @memberof Product
     */
    lastAccessedById?: string;
    /**
     * Timestamp of last access of object
     * @type {Date}
     * @memberof Product
     */
    lastAccessedDate?: Date;
    /**
     * Unique identifier for user who last modifed the object in the system
     * @type {string}
     * @memberof Product
     */
    lastModifiedById?: string;
    /**
     * Date of last object modification
     * @type {Date}
     * @memberof Product
     */
    lastModifiedDate?: Date;
}

export function ProductFromJSON(json: any): Product {
    return {
        'productId': json['productId'],
        'name': json['name'],
        'unitPrice': json['unitPrice'],
        'status': json['status'],
        'description': !exists(json, 'description') ? undefined : json['description'],
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

export function ProductToJSON(value?: Product): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'productId': value.productId,
        'name': value.name,
        'unitPrice': value.unitPrice,
        'status': value.status,
        'description': value.description,
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
export enum ProductStatusEnum {
    AVAILABLE = 'available',
    DISCONTINUED = 'discontinued',
    OUTOFSTOCK = 'out_of_stock'
}


