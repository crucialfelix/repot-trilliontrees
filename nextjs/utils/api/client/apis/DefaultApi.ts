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


import * as runtime from '../runtime';
import {
    ApiError,
    ApiErrorFromJSON,
    ApiErrorToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    Menu,
    MenuFromJSON,
    MenuToJSON,
    PlantProject,
    PlantProjectFromJSON,
    PlantProjectToJSON,
    PlantProjectPager,
    PlantProjectPagerFromJSON,
    PlantProjectPagerToJSON,
    PledgeEvent,
    PledgeEventFromJSON,
    PledgeEventToJSON,
    PledgeEvents,
    PledgeEventsFromJSON,
    PledgeEventsToJSON,
    TreeCounter,
    TreeCounterFromJSON,
    TreeCounterToJSON,
} from '../models';

export interface GetFeaturedRequest {
    locale: GetFeaturedLocaleEnum;
}

export interface GetImprintRequest {
    locale: GetImprintLocaleEnum;
}

export interface GetLeaderboardRequest {
    locale: GetLeaderboardLocaleEnum;
    section: GetLeaderboardSectionEnum;
}

export interface GetLeaderboardBySubsectionRequest {
    locale: GetLeaderboardBySubsectionLocaleEnum;
    section: GetLeaderboardBySubsectionSectionEnum;
    subsection: string;
}

export interface GetMenuRequest {
    locale: GetMenuLocaleEnum;
}

export interface GetMyTreecounterRequest {
    locale: GetMyTreecounterLocaleEnum;
}

export interface GetOrgTreecounterRequest {
    locale: GetOrgTreecounterLocaleEnum;
    treecounterId: number;
}

export interface GetPledgeEventRequest {
    locale: GetPledgeEventLocaleEnum;
    eventSlug: string;
}

export interface GetPledgeEventAuthedRequest {
    locale: GetPledgeEventAuthedLocaleEnum;
    eventSlug: string;
}

export interface GetPledgeEventsRequest {
    locale: GetPledgeEventsLocaleEnum;
}

export interface GetPrivacyRequest {
    locale: GetPrivacyLocaleEnum;
}

export interface GetProjectRequest {
    locale: GetProjectLocaleEnum;
    id: number;
}

export interface ListPlantProjectsRequest {
    locale: ListPlantProjectsLocaleEnum;
    loadAll?: ListPlantProjectsLoadAllEnum;
    limit?: number;
}

/**
 * DefaultApi - interface
 * @export
 * @interface DefaultApiInterface
 */
export interface DefaultApiInterface {
    /**
     * 
     * @summary Get list of featured Tree Planting Projects
     * @param {'de' | 'en'} locale Language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getFeaturedRaw(requestParameters: GetFeaturedRequest): Promise<runtime.ApiResponse<PlantProjectPager>>;

    /**
     * Get list of featured Tree Planting Projects
     */
    getFeatured(requestParameters: GetFeaturedRequest): Promise<PlantProjectPager>;

    /**
     * Impressum copy
     * @param {'de' | 'en'} locale Language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getImprintRaw(requestParameters: GetImprintRequest): Promise<runtime.ApiResponse<object>>;

    /**
     * Impressum copy
     */
    getImprint(requestParameters: GetImprintRequest): Promise<object>;

    /**
     * 
     * @summary Get contribution leaderboard data by section
     * @param {'de' | 'en'} locale Language code
     * @param {'country' | 'organization' | 'education' | 'company' | 'individual'} section Section of leaderboard
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getLeaderboardRaw(requestParameters: GetLeaderboardRequest): Promise<runtime.ApiResponse<InlineResponse200>>;

    /**
     * Get contribution leaderboard data by section
     */
    getLeaderboard(requestParameters: GetLeaderboardRequest): Promise<InlineResponse200>;

    /**
     * 
     * @summary Get contribution leaderboard data by sub-section
     * @param {'de' | 'en'} locale Language code
     * @param {'country' | 'organization' | 'education' | 'company' | 'individual'} section Section of leaderboard
     * @param {string} subsection Subsection: country code, company etc.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getLeaderboardBySubsectionRaw(requestParameters: GetLeaderboardBySubsectionRequest): Promise<runtime.ApiResponse<InlineResponse2001>>;

    /**
     * Get contribution leaderboard data by sub-section
     */
    getLeaderboardBySubsection(requestParameters: GetLeaderboardBySubsectionRequest): Promise<InlineResponse2001>;

    /**
     * 
     * @summary Get public menu
     * @param {'de' | 'en'} locale Language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getMenuRaw(requestParameters: GetMenuRequest): Promise<runtime.ApiResponse<Menu>>;

    /**
     * Get public menu
     */
    getMenu(requestParameters: GetMenuRequest): Promise<Menu>;

    /**
     * 
     * @summary Get personalized Tree Counter stats
     * @param {'de' | 'en'} locale Language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getMyTreecounterRaw(requestParameters: GetMyTreecounterRequest): Promise<runtime.ApiResponse<TreeCounter>>;

    /**
     * Get personalized Tree Counter stats
     */
    getMyTreecounter(requestParameters: GetMyTreecounterRequest): Promise<TreeCounter>;

    /**
     * 
     * @summary Get Tree Counter stats for an organization or individual
     * @param {'de' | 'en'} locale Language code
     * @param {number} treecounterId Organization or individual id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getOrgTreecounterRaw(requestParameters: GetOrgTreecounterRequest): Promise<runtime.ApiResponse<TreeCounter>>;

    /**
     * Get Tree Counter stats for an organization or individual
     */
    getOrgTreecounter(requestParameters: GetOrgTreecounterRequest): Promise<TreeCounter>;

    /**
     * 
     * @summary Get public pledge event
     * @param {'de' | 'en'} locale Language code
     * @param {string} eventSlug 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getPledgeEventRaw(requestParameters: GetPledgeEventRequest): Promise<runtime.ApiResponse<PledgeEvent>>;

    /**
     * Get public pledge event
     */
    getPledgeEvent(requestParameters: GetPledgeEventRequest): Promise<PledgeEvent>;

    /**
     * 
     * @summary Get pledge event with auth including non-public
     * @param {'de' | 'en'} locale Language code
     * @param {string} eventSlug 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getPledgeEventAuthedRaw(requestParameters: GetPledgeEventAuthedRequest): Promise<runtime.ApiResponse<PledgeEvent>>;

    /**
     * Get pledge event with auth including non-public
     */
    getPledgeEventAuthed(requestParameters: GetPledgeEventAuthedRequest): Promise<PledgeEvent>;

    /**
     * 
     * @summary Get pledge events
     * @param {'de' | 'en'} locale Language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getPledgeEventsRaw(requestParameters: GetPledgeEventsRequest): Promise<runtime.ApiResponse<PledgeEvents>>;

    /**
     * Get pledge events
     */
    getPledgeEvents(requestParameters: GetPledgeEventsRequest): Promise<PledgeEvents>;

    /**
     * Privacy and data protection copy
     * @param {'de' | 'en'} locale Language code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getPrivacyRaw(requestParameters: GetPrivacyRequest): Promise<runtime.ApiResponse<object>>;

    /**
     * Privacy and data protection copy
     */
    getPrivacy(requestParameters: GetPrivacyRequest): Promise<object>;

    /**
     * 
     * @summary Get full detail for a Tree Planting Project
     * @param {'de' | 'en'} locale Language code
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getProjectRaw(requestParameters: GetProjectRequest): Promise<runtime.ApiResponse<PlantProject>>;

    /**
     * Get full detail for a Tree Planting Project
     */
    getProject(requestParameters: GetProjectRequest): Promise<PlantProject>;

    /**
     * 
     * @summary Get list of Tree Planting Projects
     * @param {'de' | 'en'} locale Language code
     * @param {'true' | 'false'} [loadAll] TODO doesn\&#39;t seem to change anything
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    listPlantProjectsRaw(requestParameters: ListPlantProjectsRequest): Promise<runtime.ApiResponse<PlantProjectPager>>;

    /**
     * Get list of Tree Planting Projects
     */
    listPlantProjects(requestParameters: ListPlantProjectsRequest): Promise<PlantProjectPager>;

}

/**
 * no description
 */
export class DefaultApi extends runtime.BaseAPI implements DefaultApiInterface {

    /**
     * Get list of featured Tree Planting Projects
     */
    async getFeaturedRaw(requestParameters: GetFeaturedRequest): Promise<runtime.ApiResponse<PlantProjectPager>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getFeatured.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/plantProjects/featured`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PlantProjectPagerFromJSON(jsonValue));
    }

    /**
     * Get list of featured Tree Planting Projects
     */
    async getFeatured(requestParameters: GetFeaturedRequest): Promise<PlantProjectPager> {
        const response = await this.getFeaturedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Impressum copy
     */
    async getImprintRaw(requestParameters: GetImprintRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getImprint.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/imprint`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Impressum copy
     */
    async getImprint(requestParameters: GetImprintRequest): Promise<object> {
        const response = await this.getImprintRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get contribution leaderboard data by section
     */
    async getLeaderboardRaw(requestParameters: GetLeaderboardRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getLeaderboard.');
        }

        if (requestParameters.section === null || requestParameters.section === undefined) {
            throw new runtime.RequiredError('section','Required parameter requestParameters.section was null or undefined when calling getLeaderboard.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/exploreQuery/{section}`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))).replace(`{${"section"}}`, encodeURIComponent(String(requestParameters.section))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Get contribution leaderboard data by section
     */
    async getLeaderboard(requestParameters: GetLeaderboardRequest): Promise<InlineResponse200> {
        const response = await this.getLeaderboardRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get contribution leaderboard data by sub-section
     */
    async getLeaderboardBySubsectionRaw(requestParameters: GetLeaderboardBySubsectionRequest): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getLeaderboardBySubsection.');
        }

        if (requestParameters.section === null || requestParameters.section === undefined) {
            throw new runtime.RequiredError('section','Required parameter requestParameters.section was null or undefined when calling getLeaderboardBySubsection.');
        }

        if (requestParameters.subsection === null || requestParameters.subsection === undefined) {
            throw new runtime.RequiredError('subsection','Required parameter requestParameters.subsection was null or undefined when calling getLeaderboardBySubsection.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/exploreQuery/{section}/{subsection}`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))).replace(`{${"section"}}`, encodeURIComponent(String(requestParameters.section))).replace(`{${"subsection"}}`, encodeURIComponent(String(requestParameters.subsection))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * Get contribution leaderboard data by sub-section
     */
    async getLeaderboardBySubsection(requestParameters: GetLeaderboardBySubsectionRequest): Promise<InlineResponse2001> {
        const response = await this.getLeaderboardBySubsectionRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get public menu
     */
    async getMenuRaw(requestParameters: GetMenuRequest): Promise<runtime.ApiResponse<Menu>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getMenu.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/menu`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MenuFromJSON(jsonValue));
    }

    /**
     * Get public menu
     */
    async getMenu(requestParameters: GetMenuRequest): Promise<Menu> {
        const response = await this.getMenuRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get personalized Tree Counter stats
     */
    async getMyTreecounterRaw(requestParameters: GetMyTreecounterRequest): Promise<runtime.ApiResponse<TreeCounter>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getMyTreecounter.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/treecounter`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TreeCounterFromJSON(jsonValue));
    }

    /**
     * Get personalized Tree Counter stats
     */
    async getMyTreecounter(requestParameters: GetMyTreecounterRequest): Promise<TreeCounter> {
        const response = await this.getMyTreecounterRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get Tree Counter stats for an organization or individual
     */
    async getOrgTreecounterRaw(requestParameters: GetOrgTreecounterRequest): Promise<runtime.ApiResponse<TreeCounter>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getOrgTreecounter.');
        }

        if (requestParameters.treecounterId === null || requestParameters.treecounterId === undefined) {
            throw new runtime.RequiredError('treecounterId','Required parameter requestParameters.treecounterId was null or undefined when calling getOrgTreecounter.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/treecounter/{treecounterId}`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))).replace(`{${"treecounterId"}}`, encodeURIComponent(String(requestParameters.treecounterId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TreeCounterFromJSON(jsonValue));
    }

    /**
     * Get Tree Counter stats for an organization or individual
     */
    async getOrgTreecounter(requestParameters: GetOrgTreecounterRequest): Promise<TreeCounter> {
        const response = await this.getOrgTreecounterRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get public pledge event
     */
    async getPledgeEventRaw(requestParameters: GetPledgeEventRequest): Promise<runtime.ApiResponse<PledgeEvent>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getPledgeEvent.');
        }

        if (requestParameters.eventSlug === null || requestParameters.eventSlug === undefined) {
            throw new runtime.RequiredError('eventSlug','Required parameter requestParameters.eventSlug was null or undefined when calling getPledgeEvent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/pledgeEvent/{eventSlug}`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))).replace(`{${"eventSlug"}}`, encodeURIComponent(String(requestParameters.eventSlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PledgeEventFromJSON(jsonValue));
    }

    /**
     * Get public pledge event
     */
    async getPledgeEvent(requestParameters: GetPledgeEventRequest): Promise<PledgeEvent> {
        const response = await this.getPledgeEventRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get pledge event with auth including non-public
     */
    async getPledgeEventAuthedRaw(requestParameters: GetPledgeEventAuthedRequest): Promise<runtime.ApiResponse<PledgeEvent>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getPledgeEventAuthed.');
        }

        if (requestParameters.eventSlug === null || requestParameters.eventSlug === undefined) {
            throw new runtime.RequiredError('eventSlug','Required parameter requestParameters.eventSlug was null or undefined when calling getPledgeEventAuthed.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/api/pledgeEvent/{eventSlug}`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))).replace(`{${"eventSlug"}}`, encodeURIComponent(String(requestParameters.eventSlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PledgeEventFromJSON(jsonValue));
    }

    /**
     * Get pledge event with auth including non-public
     */
    async getPledgeEventAuthed(requestParameters: GetPledgeEventAuthedRequest): Promise<PledgeEvent> {
        const response = await this.getPledgeEventAuthedRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get pledge events
     */
    async getPledgeEventsRaw(requestParameters: GetPledgeEventsRequest): Promise<runtime.ApiResponse<PledgeEvents>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getPledgeEvents.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/pledgeEvents`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PledgeEventsFromJSON(jsonValue));
    }

    /**
     * Get pledge events
     */
    async getPledgeEvents(requestParameters: GetPledgeEventsRequest): Promise<PledgeEvents> {
        const response = await this.getPledgeEventsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Privacy and data protection copy
     */
    async getPrivacyRaw(requestParameters: GetPrivacyRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getPrivacy.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/privacy`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Privacy and data protection copy
     */
    async getPrivacy(requestParameters: GetPrivacyRequest): Promise<object> {
        const response = await this.getPrivacyRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get full detail for a Tree Planting Project
     */
    async getProjectRaw(requestParameters: GetProjectRequest): Promise<runtime.ApiResponse<PlantProject>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling getProject.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProject.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/plantProject/{id}`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PlantProjectFromJSON(jsonValue));
    }

    /**
     * Get full detail for a Tree Planting Project
     */
    async getProject(requestParameters: GetProjectRequest): Promise<PlantProject> {
        const response = await this.getProjectRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get list of Tree Planting Projects
     */
    async listPlantProjectsRaw(requestParameters: ListPlantProjectsRequest): Promise<runtime.ApiResponse<PlantProjectPager>> {
        if (requestParameters.locale === null || requestParameters.locale === undefined) {
            throw new runtime.RequiredError('locale','Required parameter requestParameters.locale was null or undefined when calling listPlantProjects.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.loadAll !== undefined) {
            queryParameters['loadAll'] = requestParameters.loadAll;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/{locale}/plantProjects`.replace(`{${"locale"}}`, encodeURIComponent(String(requestParameters.locale))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PlantProjectPagerFromJSON(jsonValue));
    }

    /**
     * Get list of Tree Planting Projects
     */
    async listPlantProjects(requestParameters: ListPlantProjectsRequest): Promise<PlantProjectPager> {
        const response = await this.listPlantProjectsRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum GetFeaturedLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetImprintLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetLeaderboardLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetLeaderboardSectionEnum {
    Country = 'country',
    Organization = 'organization',
    Education = 'education',
    Company = 'company',
    Individual = 'individual'
}
/**
    * @export
    * @enum {string}
    */
export enum GetLeaderboardBySubsectionLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetLeaderboardBySubsectionSectionEnum {
    Country = 'country',
    Organization = 'organization',
    Education = 'education',
    Company = 'company',
    Individual = 'individual'
}
/**
    * @export
    * @enum {string}
    */
export enum GetMenuLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetMyTreecounterLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetOrgTreecounterLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetPledgeEventLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetPledgeEventAuthedLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetPledgeEventsLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetPrivacyLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum GetProjectLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPlantProjectsLocaleEnum {
    De = 'de',
    En = 'en'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPlantProjectsLoadAllEnum {
    True = 'true',
    False = 'false'
}
