import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/actionReducers/actions";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addProductsForm, setAddProductsForm] = useState({
    name: "",
    imgUrl: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log("Letnan");

    setAddProductsForm({
      ...addProductsForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    console.log(addProductsForm);
    event.preventDefault();
    dispatch(addProducts(addProductsForm)).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <section className="container" id="login-section">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3 mt-5">Add Products</h1>
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
                      <input onChange={handleChange} type="text" className="form-control" id="input-name" placeholder="Enter Name ..." autoComplete="off" required name="name" />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label>imgUrl</label>
                        <label className="text-danger text-end fw-bold">*</label>
                      </div>
                      <input type="text" className="form-control" id="image-url" placeholder="image Url ..." autoComplete="off" onChange={handleChange} name="imgUrl" required />
                    </div>
                    <button className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3" type="submit">
                      Add Products
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

export default AddProducts;
