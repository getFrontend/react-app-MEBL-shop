import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import styles from "./Products.module.scss";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ProductList from "../ProductList/ProductList";
import { useLocation, useSearchParams } from "react-router-dom";
import NotFoundProduct from "../NotFoundProduct/NotFoundProduct";

function Products(props) {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const search = searchParam.get("q");
  const list = searchParam.get("list");
  const location = useLocation();

  let titleMain = "Лучшие новинки каталога 2024";

  const {
    data,
    loading,
    error: errorProducts,
    statusCode
  } = useSelector(state => state.products);
  const { favoriteList } = useSelector(state => state.favorite);

  useEffect(() => {
    dispatch(fetchProducts({ list, category, search }));
  }, [dispatch, category, search, list]);

  if ((location.pathname === "/search") && (data.length === 0) && !loading) {
    return (
      <NotFoundProduct search={search} />
    );
  }

  if (loading || Object.keys(data).length === 0) {
    return (
      <Loader />
    );
  }

  if (errorProducts && statusCode !== 401) {
    const errorData = {
      path: "products",
      errorMsg: errorProducts
    };
    return (
      <ErrorMessage data={errorData} />
    );
  }

  if (location.pathname === "/category") {
    titleMain = `Категория: «${category}»`;
  }

  if (location.pathname === "/favourite") {
    searchParam.set("list", favoriteList.join(","));
    console.log("List:", favoriteList.join(","));
    titleMain = "Избранное";
  }

  if (location.pathname === "/search") {
    titleMain = `Поиск: «${search}»`;
  }

  return (
    <section className={styles["products"]}>
      <Container>
        <h2 className={`${styles["products__title"]}`}>{titleMain}</h2>
        <ProductList data={data} />
      </Container>
    </section>
  );
}

export default Products;
