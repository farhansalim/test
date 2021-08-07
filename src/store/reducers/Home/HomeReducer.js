import { LIST_USER_SUCCESS,LIST_USER_FAILURE } from './../../actions/ActionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case LIST_USER_SUCCESS:
            return Object.assign({}, state, {
                list: action.payload
            });
        case LIST_USER_FAILURE:
            return Object.assign({}, state, {
                error: action.payload
            })



    }

    return state;
}
