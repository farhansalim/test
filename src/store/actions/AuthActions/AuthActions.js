import { LOGIN_SUCCESS, SIGNOUT_SUCCESS } from '../ActionTypes';
import axios from 'axios';
import * as URLS from '../../../config/APIURL'
import queryString from 'query-string'
import LocalData from "../../../config/LocalStorage";

const loginActionSuccess = data => ({
    type: LOGIN_SUCCESS,
    payload: data
})

const signOutSuccess = () => ({
    type: SIGNOUT_SUCCESS
})


export const onLogin = (details) => {
    return dispatch => {
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            console.log({ encodedValue });
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        return fetch(URLS.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formBody,
        })
            .then(response => response.json())
            .then(async result => {
                console.log(result, "onLogin")
                dispatch(loginActionSuccess(result.access_token));
                LocalData.storeLoginDetailData(result.access_token);
                return result;
            })
            .catch(error => {
                console.log(error, "error login ")
                throw error
            });


    }

}

export const onSignUp = (details) => {
    return dispatch => {
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            console.log({ encodedValue });
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        return fetch(URLS.REGISTRATION, {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formBody,
        })
            .then(response => response.json())
            .then(async result => {
                console.log(result, "onSignUp")
                return result
            })
            .catch(error => {
               throw error
            });
    }
}

export const signOut = () => {
    return dispatch=>{
        LocalData.clearData()
        dispatch(signOutSuccess())
    }
}