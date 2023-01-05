import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/actionReducers/actions";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formRegister, setFormRegister] = useState({
    name: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log("kopral");

    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    console.log(formRegister);
    event.preventDefault();
    dispatch(register(formRegister)).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <section className="container" id="register-section">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3 mt-5">Register</h1>
          </div>
          <div className="rounded col-10 col-lg-8 offset-lg-2 my-5">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-md-6 p-5 text-left">
                <div className="form-signin m-auto">
                  <form id="register-form" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 display-1">Sign up and enjoy</h1>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label>Name</label>
                        <label className="text-danger text-end fw-bold">*</label>
                      </div>
                      <input value={formRegister.username} onChange={handleChange} type="text" className="form-control" id="register-username" placeholder="Enter your username ..." autoComplete="off" required name="name" />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label>Gender</label>
                        <label className="text-danger text-end fw-bold">*</label>
                      </div>
                      <select onChange={handleChange} name="gender" id="gender" className="form-control">
                        <option selected={true} disabled={true}>
                          --Select Gender-
                        </option>
                        <option value={"male"}>male</option>
                        <option value={"female"}>female</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label>Email</label>
                        <label className="text-danger text-end fw-bold">*</label>
                      </div>
                      <input value={formRegister.email} onChange={handleChange} type="email" className="form-control" id="register-email" placeholder="Enter email address ..." autoComplete="off" required name="email" />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label>Password</label>
                        <label className="text-danger text-end fw-bold">*</label>
                      </div>
                      <input value={formRegister.password} onChange={handleChange} type="password" className="form-control" id="register-password" placeholder="Enter your password ..." autoComplete="off" required name="password" />
                    </div>
                    <button className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3" type="submit">
                      Sign Up
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

export default Register;
