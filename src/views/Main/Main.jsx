import styles from "./Main.module.scss";
import Catalog from "../../components/Catalog/Catalog";
import Products from "../../components/Products/Products";
import Favorites from "../../components/Favorites/Favorites";
import Cart from "../../components/Cart/Cart";
import Card from "../../components/Card/Card";
import Page404 from "../../components/Page404/Page404";

export const Main = ({ path }) => {
  console.log("path: ", path);

  if (path === "home" || path === "category" || path === "search") {
    return (
      <main className={styles["main"]}>
        <Catalog />
        <Products />
      </main>
    );
  }

  if (path === "favorite") {
    return (
      <main className={styles["main"]}>
        <Catalog />
        <Favorites />
      </main>
    );
  }

  if (path === "cart") {
    return (
      <main className={styles["main"]}>
        <Cart />
      </main>
    );
  }

  if (path === "product") {
    return (
      <main className={styles["main"]}>
        <Catalog />
        <Card />
      </main>
    );
  }

  if (path === "notfound") {
    return (
      <main className={styles["main"]}>
        <Page404 />
      </main>
    );
  }

  return (
    <main className={styles["main"]}>
    </main>
  );
};


