import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteProducts } from "../store/actionReducers/actions";

export default function DashboardComponents({ products }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [check, setCheck] = useState("hello world");

  const handleDelete = (id) => {
    dispatch(deleteProducts(id));
    console.log(id);
  };

  return (
    <>
      <tr>
        <td>{products.name}</td>
        <td>
          <img style={{ width: "200px" }} src={products.imgUrl} alt="" />
        </td>
        <td className="d-flex">
          <button
            className="btn btn-warning me-3"
            onClick={() => {
              navigate(`editProducts/${products.id}`);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete(products.id);
            }}
            className="btn btn-danger"
            style={{ color: "black" }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
