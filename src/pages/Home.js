import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { DeleteUserStart, DeleteUserSuccess, loadUsersStart, updateUserStart } from '../Redux/action';

import UserInfo from './UserInfo';
import { MDBSpinner } from 'mdb-react-ui-kit';


function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users, loading } = useSelector(state => state.data)
    const [showBasic, setShowBasic] = useState(false)
    useEffect(() => {
        dispatch(loadUsersStart());
    }, [])
    if (loading) {
        return (
            <MDBSpinner style={{ marginTop: "150px" }} role="status">
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        )
    }

    // useEffect(() => {
    //     dispatch(updateUserStart())
    // }, []);


    function editdetail(id) {
        dispatch(updateUserStart(id))
    }
    function postDelete(id) {
        dispatch(DeleteUserStart(id))
    }
    return (
        <div>
            <div className='btncontainer'>
                <button className='betton' onClick={() => navigate("/addUser/add")}>New User</button>
            </div>

            <div className='tablecontainer'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 &&
                            users.map((user, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>

                                        <td>
                                            <NavLink to={`/addUser/edit/${user.id}`}>
                                                <button className='tablebutton' onClick={() => editdetail(user.id)} >Edit</button></NavLink>
                                            <button className='tablebutton' onClick={() => postDelete(user.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home

