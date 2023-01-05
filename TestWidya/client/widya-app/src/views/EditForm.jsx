import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProducts, fetchOneProducts } from "../store/actionReducers/actions";
import { useNavigate, useParams } from "react-router-dom";

function EditProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const ids = +id;
  const { productById } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchOneProducts(ids));
  }, []);

  const [editProductsForm, setEditProductsForm] = useState({
    name: productById.name,
    imgUrl: productById.imgUrl,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log("Letnan");

    setEditProductsForm({
      ...editProductsForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    console.log(editProductsForm);
    event.preventDefault();
    dispatch(editProducts(ids, editProductsForm)).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      {/* {JSON.stringify(ids)} */}
      {/* {JSON.stringify(productById)} */}
      <section className="container" id="login-section">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3 mt-5">Edit Products</h1>
          </div>
          <div className="rounded col-10 col-lg-8 offset-lg-2 my-5">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-md-6 p-5 text-left">
                <div className="form-signin m-auto">
                  <form onSubmit={handleSubmit} id="register-form">
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label>Name</label>
                        <label className="text-danger text-end fw-bold">*</label>
                      </div>
                      <input value={editProductsForm?.name} onChange={handleChange} type="text" className="form-control" id="input-name" placeholder="Enter Name ..." autoComplete="off" required name="name" />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label>imgUrl</label>
                        <label className="text-danger text-end fw-bold">*</label>
                      </div>
                      <input value={editProductsForm?.imgUrl} type="text" className="form-control" id="image-url" placeholder="image Url ..." autoComplete="off" onChange={handleChange} name="imgUrl" required />
                    </div>
                    <button className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3" type="submit">
                      Edit Products
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProducts;
