import { LIST_USER_SUCCESS, LIST_USER_FAILURE } from '../ActionTypes';
import Axios from 'axios';

const getUsersListSuccess = (data) => ({
    type: LIST_USER_SUCCESS,
    payload: data
})

const getUsersListFailure= (data) => ({
    type: LIST_USER_FAILURE,
    payload: data
})

export const getUsersList = (details) => {
    return dispatch => {
        return Axios.get('https://run.mocky.io/v3/bdcdffd7-df4c-4645-8290-d451ea6fe98a')
            .then(res => {
                console.log(res, "list")
                dispatch(getUsersListSuccess(res.data))
                return res.data
            })
            .catch(err => {
                dispatch(getUsersListFailure(err))
                console.log(err, "list err")
                throw err
            })

    }

}

