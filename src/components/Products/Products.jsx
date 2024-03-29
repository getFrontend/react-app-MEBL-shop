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
import Pagination from "../Pagination/Pagination";
import TitleMain from "../TitleMain/TitleMain";

function Products() {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const search = searchParam.get("q");
  const page = searchParam.get("page");
  const { pathname } = useLocation();
  const matchFavorite = useMatch("/favorite");

  let isActive = false;

  const {
    data,
    pagination,
    loading,
    error: errorProducts,
    statusCode
  } = useSelector(state => state.products);

  useEffect(() => {
    if (!matchFavorite) {
      dispatch(fetchProducts({ category, search, page }));
    }
  }, [dispatch, category, search, page, matchFavorite]);

  if ((pathname === "/search") && (data.length === 0) && !loading) {
    return (
      <NotFoundProduct search={search} />
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
  if (pathname === "/category") {
    titleMain = `Категория: «${category}»`;
    isActive = true;
  }
  if (pathname === "/favorite") {
    titleMain = "Избранное";
  }
  if (pathname === "/search") {
    titleMain = `Поиск: «${search}»`;
  }

  return (
    <section className={styles["products"]}>
      <Container>
        <TitleMain className={styles["products__title"]} title={titleMain} />
        {(loading || !data) ? <Loader /> : (
          <>
            <>
              {isActive ?
                (
                  <div className={styles["count"]}>Всего товаров:&nbsp;
                    <span>{pagination ? pagination.totalProducts : data?.length}</span>
                  </div>
                ) :
                (<></>)
              }
            </>
            <ProductList data={data} />
            {pagination && (pagination.totalProducts > pagination.limit) ?
              <Pagination pagination={pagination} /> :
              <></>}
          </>
        )}
      </Container>
    </section >
  );
}

export default Products;
