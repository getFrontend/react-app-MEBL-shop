import { createBrowserRouter } from "react-router-dom";
import { Header } from "../views/Header/Header";
import { Main } from "../views/Main/Main";
import { Footer } from "../views/Footer/Footer";
import Catalog from "../components/Catalog/Catalog";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
import Card from "../components/Card/Card";
import Page404 from "../components/Page404/Page404";
import RemoveToken from "../components/RemoveToken/RemoveToken";
import Favorites from "../components/Favorites/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Main>
          <Catalog />
          <Products />
        </Main>
        <Footer />
      </>
    )
  },
  {
    path: "/category",
    element: (
      <>
        <Header />
        <Main>
          <Catalog />
          <Products />
        </Main>
        <Footer />
      </>
    )
  },
  {
    path: "/favorite",
    element: (
      <>
        <Header />
        <Main>
          <Catalog />
          <Favorites />
        </Main>
        <Footer />
      </>
    )
  },
  {
    path: "/search",
    element: (
      <>
        <Header />
        <Main>
          <Catalog />
          <Products />
        </Main>
        <Footer />
      </>
    )
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Main>
          <Cart />
        </Main>
        <Footer />
      </>
    )
  },
  {
    path: "/product/:productId",
    element: (
      <>
        <Header />
        <Main>
          <Catalog />
          <Card />
        </Main>
        <Footer />
      </>
    )
  },
  {
    path: "/token-reset",
    element: <RemoveToken />
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <Main>
          <Page404 />
        </Main>
        <Footer />
      </>
    )
  }
]);
