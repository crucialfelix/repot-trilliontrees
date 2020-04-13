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
    MenuItem,
    MenuItemFromJSON,
    MenuItemFromJSONTyped,
    MenuItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface MenuSection
 */
export interface MenuSection {
    /**
     * 
     * @type {number}
     * @memberof MenuSection
     */
    enabled: number;
    /**
     * 
     * @type {number}
     * @memberof MenuSection
     */
    sequence: number;
    /**
     * 
     * @type {string}
     * @memberof MenuSection
     */
    caption: string;
    /**
     * 
     * @type {string}
     * @memberof MenuSection
     */
    help: string;
    /**
     * 
     * @type {string}
     * @memberof MenuSection
     */
    icon: string;
    /**
     * 
     * @type {Array<MenuItem>}
     * @memberof MenuSection
     */
    menuItems: Array<MenuItem>;
}

export function MenuSectionFromJSON(json: any): MenuSection {
    return MenuSectionFromJSONTyped(json, false);
}

export function MenuSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MenuSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': json['enabled'],
        'sequence': json['sequence'],
        'caption': json['caption'],
        'help': json['help'],
        'icon': json['icon'],
        'menuItems': ((json['menuItems'] as Array<any>).map(MenuItemFromJSON)),
    };
}

export function MenuSectionToJSON(value?: MenuSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'sequence': value.sequence,
        'caption': value.caption,
        'help': value.help,
        'icon': value.icon,
        'menuItems': ((value.menuItems as Array<any>).map(MenuItemToJSON)),
    };
}

