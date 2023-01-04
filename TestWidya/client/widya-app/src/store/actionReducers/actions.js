import { setError } from "react";
import { REGISTER_USER, FETCH_PRODUCTS, ISLOADING, PROFILES } from "./actionTypes";
import { redirect } from "react-router-dom";
const localhost = "http://localhost:3000";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch(`${localhost}/products`, { headers: { access_token: localStorage.access_token } })
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching posts");
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch({
          type: FETCH_PRODUCTS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
        // dispatch(setError(error.message));
      })
      .finally(() => {
        dispatch({
          type: ISLOADING,
          payload: false,
        });
      });
  };
};

export const register = (input) => {
  console.log("masuk ke register");
  return (dispatch) => {
    return fetch(`${localhost}/register`, {
      method: "post",
      body: JSON.stringify(input),
      headers: {
        access_token: localStorage.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error register user");
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        console.log("berhasil register user dengan email " + data.email);
        redirect("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const login = (input) => {
  console.log("masuk fungsi login");
  return (dispatch) => {
    return fetch(`${localhost}/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Login input Error");
        return res.json();
      })
      .then((data) => {
        console.log("berhasil login");
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        localStorage.setItem("id", data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addProducts = (input) => {
  // console.log(input, "dari actions");
  return (dispatch) => {
    return fetch(`${localhost}/products`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error inputting new news");
        return res.json();
      })
      .then((data) => {
        console.log("berhasil menambahkan data");
        dispatch(fetchProducts());
        redirect("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteProducts = (id) => {
  return (dispatch) => {
    return fetch(`${localhost}/products/${id}`, {
      method: "delete",
      headers: { access_token: localStorage.access_token },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error deleting news");
        return res.json();
      })
      .then((data) => {
        dispatch(fetchProducts());
        console.log("berhasil delete news dengan id " + id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const editProducts = (id, input) => {
  return (dispatch) => {
    return fetch(`${localhost}/products/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(input),
    })
      .then((res) => {
        if (!res.ok) throw new Error("error editing category");
        return res.json();
      })
      .then((data) => {
        dispatch(fetchProducts());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const findOneUser = (id) => {
  return (dispatch) => {
    return fetch(`${localhost}/users/${id}`, {
      method: "get",
      headers: { access_token: localStorage.access_token },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching category with id " + id);
        return res.json();
      })
      .then((data) => {
        console.log("berhasil fetching");
        dispatch({
          type: PROFILES,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({
          type: ISLOADING,
          payload: false,
        });
      });
  };
};
