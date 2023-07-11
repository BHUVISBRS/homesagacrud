import * as types from "./actionTypes"

//LOAD USER//
export const loadUsersStart = () => ({
    type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
    type: types.LOAD_USERS_SUCCESS,
    payload: users,
});

export const loadUsersErorr = (error) => ({
    type: types.LOAD_USERS_ERORR,
    payload: error,
});

//CREATE_USER_START//

export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user,
});

export const createUserSuccess = (payload) => ({
    type: types.CREATE_USER_SUCCESS,
    payload: payload,

});

export const createUserErorr = (error) => ({
    type: types.CREATE_USER_ERROR,
    payload: error,
});

//UPDATE USER//

export const updateUserStart = (userInfo) => ({
    type: types.UPDATE_USER_START,
    payload: userInfo,
});

export const updateUserSuccess = () => ({
    type: types.UPDATE_USER_SUCCESS,


});

export const updateUserErorr = (error) => ({
    type: types.UPDATE_USER_ERROR,
    payload: error,
});


//Deleteuser

export const DeleteUserStart = (userid) => ({
    type: types.DELETE_USER_START,
    payload: userid,
});

export const DeleteUserSuccess = (payload) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: payload,


});

export const DeleteUserErorr = (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error,
});