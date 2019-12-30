import axios from "axios";
import * as apiLinks from "./apiLinks";

function getAPIConfigurationSecured() {
    const token = "testtoken";
    return axios.create({
        timeout: 1000000,
        responseType: "json",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Pragma': 'no-cache',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        }
    });
}

function getAPIConfigurationUnsecured() {
    return axios.create({
        timeout: 10000,
        responseType: "json",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Pragma': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        }
    });
}

export function getEvents() {
    return new Promise<any>(((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient({
            url: apiLinks.EVENTS,
            method: 'get'
        }).then(function (response) {
            if (response.data.statusCode === 200) {
                resolve(response.data.data);
            } else {
                reject(response.data.message);
            }
        }).catch(function (error) {
            console.log(error);
            reject("Daten konnten nicht geladen werden");
        })
    }));
}

export function getContacts() {
    return new Promise<any>(((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient({
            url: apiLinks.CONTACTS,
            method: 'get'
        }).then(function (response) {
            if (response.data.statusCode === 200) {
                resolve(response.data.data);
            } else {
                reject(response.data.message);
            }
        }).catch(function (error) {
            reject("Daten konnten nicht geladen werden");
        })
    }));
}

export function getGroups() {
    return new Promise<any>(((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient({
            url: apiLinks.GROUPS,
            method: 'get'
        }).then(function (response) {
            if (response.data.statusCode === 200) {
                resolve(response.data.data);
            } else {
                reject(response.data.message);
            }
        }).catch(function (error) {
            console.log(error);
            reject("Daten konnten nicht geladen werden");
        })
    }));
}

export function getNextAppointmentOfGroup(group : string) {
    return new Promise<any>(((resolve, reject) => {
        let apiClient = getAPIConfigurationSecured();
        return apiClient({
            url: apiLinks.APPOINTMENTS + "/" + group + "/next",
            method: 'get'
        }).then(function (response) {
            if (response.data.statusCode === 200) {
                resolve(response.data.data);
            } else {
                reject(response.data.message);
            }
        }).catch(function (error) {
            console.log(error);
            reject("Daten konnten nicht geladen werden");
        })
    }));
}