import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import styles from "./Products.module.scss";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ProductList from "../ProductList/ProductList";

function Products(props) {
  const dispatch = useDispatch();

  const {
    data,
    loading,
    error: errorProducts,
    statusCode
  } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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

  return (
    <section className={styles["products"]}>
      <Container>
        <h2 className={`${styles["products__title"]}`}>Лучшие новинки каталога 2024</h2>
        <ProductList data={data} />
      </Container>
    </section>
  );
}

export default Products;
