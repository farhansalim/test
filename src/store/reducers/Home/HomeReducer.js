import { GET_FILMS_LIST_SUCCESS, GET_FILMS_LIST_FAILURE } from './../../actions/ActionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_FILMS_LIST_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload
            });
        case GET_FILMS_LIST_FAILURE:
            return Object.assign({}, state, {
                error: action.payload
            })



    }

    return state;
}
