import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.scss";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Products(props) {
  const dispatch = useDispatch();

  const {
    data,
    loading,
    error
  } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <Loader />
    );
  }

  if (error) {
    return (
      <ErrorMessage message={error} />
    );
  }

  return (
    <section className={styles["products"]}>
      <Container>
        <h2 className={`${styles["products__title"]}`}>Лучшие новинки каталога 2024</h2>
        <ul className={styles["products__list"]}>
          {data.map(item => (
            <li className={styles["products__item"]} key={item.id}>
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Products;
