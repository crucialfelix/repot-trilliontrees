/* tslint:disable */
/* eslint-disable */
/**
 * Trillion Trees Campaign
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    PlantProjectAllOfTpoDataAddress,
    PlantProjectAllOfTpoDataAddressFromJSON,
    PlantProjectAllOfTpoDataAddressFromJSONTyped,
    PlantProjectAllOfTpoDataAddressToJSON,
} from './';

/**
 * 
 * @export
 * @interface PlantProjectAllOfTpoData
 */
export interface PlantProjectAllOfTpoData {
    /**
     * 
     * @type {number}
     * @memberof PlantProjectAllOfTpoData
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PlantProjectAllOfTpoData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PlantProjectAllOfTpoData
     */
    avatar?: string;
    /**
     * 
     * @type {string}
     * @memberof PlantProjectAllOfTpoData
     */
    treecounterSlug?: string;
    /**
     * 
     * @type {PlantProjectAllOfTpoDataAddress}
     * @memberof PlantProjectAllOfTpoData
     */
    address?: PlantProjectAllOfTpoDataAddress;
    /**
     * 
     * @type {string}
     * @memberof PlantProjectAllOfTpoData
     */
    email?: string;
}

export function PlantProjectAllOfTpoDataFromJSON(json: any): PlantProjectAllOfTpoData {
    return PlantProjectAllOfTpoDataFromJSONTyped(json, false);
}

export function PlantProjectAllOfTpoDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlantProjectAllOfTpoData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'treecounterSlug': !exists(json, 'treecounterSlug') ? undefined : json['treecounterSlug'],
        'address': !exists(json, 'address') ? undefined : PlantProjectAllOfTpoDataAddressFromJSON(json['address']),
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function PlantProjectAllOfTpoDataToJSON(value?: PlantProjectAllOfTpoData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'avatar': value.avatar,
        'treecounterSlug': value.treecounterSlug,
        'address': PlantProjectAllOfTpoDataAddressToJSON(value.address),
        'email': value.email,
    };
}


