import Catalog from "../../components/Catalog/Catalog";
import Products from "../../components/Products/Products";
import Favorites from "../../components/Favorites/Favorites";
import Cart from "../../components/Cart/Cart";
import Card from "../../components/Card/Card";
import Page404 from "../../components/Page404/Page404";
import Hero from "../Hero/Hero";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

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
        <Breadcrumbs />
        <Products />
      </>
    );
  }

  if (path === "favorite") {
    return (
      <>
        <Catalog />
        <Breadcrumbs />
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
        <Breadcrumbs />
        <Card />
      </>
    );
  }

  if (path === "notfound") {
    return <Page404 />;
  }

  return <></>;
};


