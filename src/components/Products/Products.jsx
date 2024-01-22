import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import styles from "./Products.module.scss";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ProductList from "../ProductList/ProductList";
import { useLocation, useMatch, useSearchParams } from "react-router-dom";
import NotFoundProduct from "../NotFoundProduct/NotFoundProduct";

function Products(props) {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const search = searchParam.get("q");
  const location = useLocation();
  const matchFavorite = useMatch("/favorite");

  let isActive = false;

  const {
    data,
    loading,
    error: errorProducts,
    statusCode
  } = useSelector(state => state.products);

  useEffect(() => {
    if (!matchFavorite) {
      dispatch(fetchProducts({ category, search }));
    }
  }, [dispatch, category, search, matchFavorite]);

  if ((location.pathname === "/search") && (data.length === 0) && !loading) {
    return (
      <NotFoundProduct search={search} />
    );
  }

  if (loading || !data) {
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

  let titleMain = "Лучшие новинки каталога 2024";
  if (location.pathname === "/category") {
    titleMain = `Категория: «${category}»`;
    isActive = true;
  }
  if (location.pathname === "/favorite") {
    titleMain = "Избранное";
  }
  if (location.pathname === "/search") {
    titleMain = `Поиск: «${search}»`;
  }

  return (
    <section className={styles["products"]}>
      <Container>
        <h2 className={`${styles["products__title"]}`}>{titleMain}</h2>
        {isActive ?
          (
            <div className={styles["count"]}>Всего товаров:&nbsp;
              <span>{data?.length}</span>
            </div>
          ) :
          (<></>)
        }
        <ProductList data={data} />
      </Container>
    </section >
  );
}

export default Products;
