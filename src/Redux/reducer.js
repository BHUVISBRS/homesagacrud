import * as types from "./actionTypes"

const initaialState = {
    users: [],
    loading: false,
    error: null,
    response: "",


}
const usersReducer = (state = initaialState, action) => {
    switch (action.type) {
        case types.LOAD_USERS_START:
        case types.CREATE_USER_START:
        case types.UPDATE_USER_START:
        case types.DELETE_USER_START:
            return {
                ...state,
                loading: true,
            };
        case types.LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case types.CREATE_USER_SUCCESS:
        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                response: action.payload
            };


        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
                loading: false,
            }
        case types.LOAD_USERS_ERORR:
        case types.CREATE_USER_ERROR:
        case types.UPDATE_USER_ERROR:
        case types.DELETE_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,

            };
        default:
            return state;

    }
}



export default usersReducer;