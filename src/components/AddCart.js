import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTOCart,
  DeleteUserStart,
  GetCartSTART,
  showUserResClean,
  showUserStart,
} from "../Redux/action";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const AddCart = () => {
  /*    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showUserStart(id));
        return () => {
            dispatch(showUserResClean());
        };
    }, [id]);
     */
  const dispatch = useDispatch();
  
  const { carts } = useSelector((state) => state.cart);

  console.log(carts);
  useEffect(() => {
    console.log("GetCartSTART user");
    dispatch(GetCartSTART());
  }, []);

  //   useEffect(() => {
  //     console.log("load user");
  //     dispatch(AddTOCart());
  //   }, []);
  /*  const { cart } = useSelector((state) => state.data);
  console.log(cart); */
  const { id } = useParams();
  // const { users } = useSelector((state) => state.data);
  useEffect(() => {
      if (id) {
          dispatch(showUserStart(id))
      }
      return () => {
          dispatch(showUserResClean())
      }
  }, [id])
 
  function postDelete(id) {
    dispatch(DeleteUserStart(id))
}
// const response = useSelector((state) => state.cart);
// console.log(response)
// useEffect(()=>{
//   if(response?.statusText === 'OK')
//   {
//     console.log(response)
//     toast.success("deleted",response?.statusText)
//     console.log(response)
//   }
// },[response]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Image</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>
                  <img src={item.image} style={{ width: 70, height: 70 }}></img>
                </td>
                <td>${item.price}</td>
                <td>
<Button onClick={() => postDelete(item.id)}>
    <FontAwesomeIcon icon={faTrash} />
</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AddCart;
