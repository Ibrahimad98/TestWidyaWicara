import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actionReducers/actions";
import { Link, Outlet } from "react-router-dom";
import DashboardComponents from "../components/DashboardComponents";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      {/* {JSON.stringify(products)} */}
      <div style={{ paddingLeft: "160px", paddingTop: "40px" }} className="row d-flex justify-content-center">
        <div>
          <h1 className="mb-5">Products List</h1>
          <Link to="/addProducts">
            <button className="btn btn-lg btn-primary rounded-pill w-60 p-2 mt-3 mb-5" type="submit">
              Add Products
            </button>
          </Link>
        </div>
        <div className="col col-10">
          <table className="table p-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((products) => (
                <DashboardComponents key={products.id} products={products} />
              ))}
            </tbody>
          </table>
        </div>
        <Outlet />
      </div>
    </>
  );
}
