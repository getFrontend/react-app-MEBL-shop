import Catalog from "../../components/Catalog/Catalog";
import Products from "../../components/Products/Products";
import Favorites from "../../components/Favorites/Favorites";
import Cart from "../../components/Cart/Cart";
import Card from "../../components/Card/Card";
import Page404 from "../../components/Page404/Page404";
import Hero from "../Hero/Hero";

export const Main = ({ path }) => {
  if (path === "home") {
    return (
      <>
        <Hero />
        <Catalog />
        <Products />
      </>
    );
  }

  if (path === "category" || path === "search") {
    return (
      <>
        <Catalog />
        <Products />
      </>
    );
  }

  if (path === "favorite") {
    return (
      <>
        <Catalog />
        <Favorites />
      </>
    );
  }

  if (path === "cart") {
    return (
      <>
        <Cart />
      </>
    );
  }

  if (path === "product") {
    return (
      <>
        <Catalog />
        <Card />
      </>
    );
  }

  if (path === "notfound") {
    return <Page404 />;
  }

  return <></>;
};


