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
    PledgeEvent,
    PledgeEventFromJSON,
    PledgeEventFromJSONTyped,
    PledgeEventToJSON,
} from './';

/**
 * 
 * @export
 * @interface PledgeEvents
 */
export interface PledgeEvents extends Array<PledgeEvent> {
}

export function PledgeEventsFromJSON(json: any): PledgeEvents {
    return PledgeEventsFromJSONTyped(json, false);
}

export function PledgeEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PledgeEvents {
    return json;
}

export function PledgeEventsToJSON(value?: PledgeEvents | null): any {
    return value;
}


