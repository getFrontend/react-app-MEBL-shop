import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { fetchAccessToken } from "./store/auth/auth.slice";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Preloader from "./components/Preloader/Preloader";
import { fetchCart } from "./store/cart/cart.slice";

function App() {
  const dispatch = useDispatch();
  const {
    accessToken,
    loading,
    error: errorAuth
  } = useSelector(state => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchCart());
    }
  }, [dispatch, accessToken]);

  if (errorAuth) {
    const errorData = {
      path: "auth",
      errorMsg: errorAuth
    };
    return (
      <>
        <ErrorMessage data={errorData} />
      </>
    );
  }

  if (loading) {
    return <Preloader />;
  }

  return (
    (!loading && accessToken) ? <RouterProvider router={router} /> : <div>Fatal Error!!!</div>
  );
}

export default App;
