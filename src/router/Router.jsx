import { createBrowserRouter } from "react-router-dom";
import RemoveToken from "../components/RemoveToken/RemoveToken";
import { Page } from "../views/Page/Page.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page pathname="home" />
  },
  {
    path: "/category",
    element: <Page pathname="category" />
  },
  {
    path: "/product/:productId",
    element: <Page pathname="product" />
  },
  {
    path: "/favorite",
    element: <Page pathname="favorite" />
  },
  {
    path: "/search",
    element: <Page pathname="search" />
  },
  {
    path: "/cart",
    element: <Page pathname="cart" />
  },
  {
    path: "/order/:orderId",
    element: <Page pathname="order" />
  },
  {
    path: "/token-reset",
    element: <RemoveToken />
  },
  {
    path: "*",
    element: <Page pathname="notfound" />
  }
]);
