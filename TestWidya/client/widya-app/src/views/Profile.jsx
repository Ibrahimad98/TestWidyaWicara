// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { deleteProducts } from "../store/actionReducers/actions";

export default function DashboardComponents({ products }) {
  return (
    <>
      {/* {JSON.stringify(products)} */}
      <div style={{ paddingLeft: "160px", paddingTop: "40px" }} className="row d-flex justify-content-center">
        <div>
          <h1 className="mb-5">My Profile</h1>
        </div>
        <div className="col col-10">
          <table className="table p-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{sessionStorage.name}</td>
                <td>{sessionStorage.email}</td>
                <td>{sessionStorage.gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
