import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./views/Footer/Footer";
import { Header } from "./views/Header/Header";
import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { fetchAccessToken } from "./store/auth/auth.slice";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Catalog from "./components/Catalog/Catalog";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Card from "./components/Card/Card";
import Page404 from "./components/Page404/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Products />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: "/category",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Products />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: "/favourite",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Products />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: "/search",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Products />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <main>
          <Cart />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: "/product/:productId",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Card />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <main>
          <Page404 />
        </main>
        <Footer />
      </>
    )
  }
]);

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
    return <main><Loader /></main>;
  }

  return (
    (!loading && accessToken) ? <RouterProvider router={router} /> : <div>Fatal Error!!!</div>
  );
}

export default App;
