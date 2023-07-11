import { toast } from "react-hot-toast";
import * as types from "./actionTypes";

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
//LOAD USER2//
export const loadUsersStart2 = () => ({
  type: types.LOAD_USERS_START2,
});

export const loadUsersSuccess2 = (users) => ({
  type: types.LOAD_USERS_SUCCESS2,
  payload: users,
});

export const loadUsersErorr2 = (error) => ({
  type: types.LOAD_USERS_ERORR2,
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

export const updateUserStart = (userInfo, user) => ({
  type: types.UPDATE_USER_START,
  payload: { userInfo, user },
});

export const updateUserSuccess = (userInfo) => {
  console.log("edit user success action");
  toast.success("User updated successfully");
  return {
    type: types.UPDATE_USER_SUCCESS,
    payload: userInfo,
  };
};

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

//Showuser

export const showUserStart = (userid) => ({
  type: types.SHOW_USER_START,
  payload: userid,
});

export const showUserSuccess = (user) => ({
  type: types.SHOW_USER_SUCCESS,
  payload: user,
});

export const showUserErorr = (error) => ({
  type: types.SHOW_USER_ERROR,
  payload: error,
});
export const showUserResClean = (error) => ({
  type: types.SHOW_USER_RES_CLEAN,
  payload: error,
});

//GetCartSTART//
export const GetCartSTART = (user) => ({
  type: types.CART_ADDTO_CART_START,
  payload: user,
});

export const GetCartSuccess = (users) => ({
  type: types.CART_ADDTO_CART_SUCCESS,
  payload: users,
});

export const GetCartErorr = (error) => ({
  type: types.CART_ADDTO_CART_ERROR,
  payload: error,
});

//AddTOCart

export const AddTOCartStart = (user) => {
  console.warn("action is called", user);
  return {
    type: types.ADDTO_CART_START,
    payload: user,
  };
};

export const AddTOCartSuccess = (payload) => ({
  type: types.ADDTO_CART_SUCCESS,
  payload: payload,
});

export const AddTOCartError = (error) => ({
  type: types.ADDTO_CART_ERROR,
  payload: error,
});
