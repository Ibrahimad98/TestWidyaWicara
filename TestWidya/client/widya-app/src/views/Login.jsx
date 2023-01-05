import { useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/actionReducers/actions";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log("Jendral");

    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formLogin);
    dispatch(login(formLogin)).then(() => {
      navigate("/");
    });
    //belum ke handle pindah ke halaman utama
    // console.log("heeeyyop");
  };

  return (
    <section className="container" id="login-section">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mb-3 mt-5">Login</h1>
          <span>Admin Log in</span>
        </div>
        <div className="col-12 col-lg-8 offset-lg-2 my-5">
          <div className="row d-flex justify-content-center">
            <div className="col-10 col-md-6 p-5 text-left">
              <div className="form-signin m-auto">
                <form onSubmit={handleSubmit} id="register-form">
                  <h1 className="h3 mb-3 display-1">Input your information to log in</h1>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <label>Email</label>
                      <label className="text-danger text-end fw-bold">*</label>
                    </div>
                    <input onChange={handleChange} type="text" className="form-control" id="register-email" placeholder="Enter your email ..." autoComplete="off" required name="email" />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <label>Password</label>
                      <label className="text-danger text-end fw-bold">*</label>
                    </div>
                    <input onChange={handleChange} type="password" className="form-control" id="register-password" placeholder="Enter password address ..." autoComplete="off" required name="password" />
                  </div>
                  <button className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3" type="submit">
                    Log In
                  </button>
                </form>
                <p className="mt-5">don't have an acoount? please <Link to={"/register"}>register</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
