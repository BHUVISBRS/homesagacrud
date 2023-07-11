import { take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects";
import { loadUsersSuccess, loadUsersErorr, createUserSuccess, createUserErorr, DeleteUserSuccess, DeleteUserErorr, updateUserSuccess, updateUserErorr } from "./action";
import * as types from "./actionTypes";
import { CreateUserAPI, DeleteUserAPI, UpdateUserAPI, loadUsersAPI } from "./api";


//===== LOAD USERS =====//

function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersAPI);
        console.log(response)
        if (response.statusText === "OK") {
            /*   yield delay(500);  //ms */
            yield put(loadUsersSuccess(response.data))
        }
    }
    catch (error) {
        yield put(loadUsersErorr(error.response.data))
    }
}

//===== CreateUser =====//

function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
}

function* onCreateUserStartAsync({ payload }) {
    try {

        const response = yield call(CreateUserAPI, payload);
        console.log(response)
        if (response.statusText === "Created") {

            yield put(createUserSuccess(response))
        }
    }
    catch (error) {
        yield put(createUserErorr(error.response.data))
    }
}

//======================================== UpdateUser ===============================================//


function* onUpdateUser() {

    yield takeEvery(types.UPDATE_USER_START, onUpdateUserStartAsync)


}
function* onUpdateUserStartAsync({ payload }) {
    try {
        const response = yield call(UpdateUserAPI, payload.userInfo, payload.user);
        console.log(response);
        /*   console.log("payload", payload) */
        if (response.statusText === "Created") {
            /*  yield put(updateUserSuccess(response)) */
        }
    }

    catch (error) {
        yield put(updateUserErorr(error.response.data))
    }
}



//======================================== DeleteUser ===============================================//


function* onDeleteUser() {
    while (true) {
        const { payload: userid } = yield take(types.DELETE_USER_START)
        yield call(onDeleteUserStartAsync, userid)
    }
}

function* onDeleteUserStartAsync(userid) {
    try {
        const response = yield call(DeleteUserAPI, userid);
        console.log(response)
        if (response.statusText === "OK") {
            yield put(DeleteUserSuccess(userid))
        }
    }
    catch (error) {
        yield put(DeleteUserErorr(error.response.data))
    }
}




const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser), fork(onUpdateUser)];

export default function* rootSaga() {
    yield all([...userSagas]);
}