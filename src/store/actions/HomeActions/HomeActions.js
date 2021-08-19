import { GET_FILMS_LIST_SUCCESS, GET_FILMS_LIST_FAILURE } from '../ActionTypes';
import Axios from 'axios';
import * as URLS from '../../../config/APIURL'

const getFilmsListSuccess = (data) => ({
    type: GET_FILMS_LIST_SUCCESS,
    payload: data
})

const getFilmsListFailure = (data) => ({
    type: GET_FILMS_LIST_FAILURE,
    payload: data
})

export const getFilmsList = (token) => {
    const AuthStr = 'Bearer '.concat(token);
    return dispatch => {
        return Axios.get(URLS.GET_FILMS_LIST, { headers: { 'Authorization': AuthStr } })
            .then(response => {
                // console.log(response, "resp in cat");
                dispatch(getFilmsListSuccess(response.data));
                return response;
            })
            .catch(error => {
                // console.log('error ' + error);
                dispatch(getFilmsListFailure(error.data));
                throw error;
            });
    }
}

export const getFilmsListByGenre = (val, token) => {
    const AuthStr = 'Bearer '.concat(token);
    return dispatch => {
        return Axios
            .get(`${URLS.GET_FILMS_LIST_BYGENRE}/${val}`, {
                headers: { Authorization: AuthStr },
            })
            .then(res => {
                dispatch(getFilmsListSuccess(res.data.film));
                return res;

            })
            .catch(err => {
                // console.log(err, "getFilmsListByGenre err")
                dispatch(getFilmsListFailure(error.data));
                throw error;


            })
    }
}




