import { Container } from "../../views/Container/Container";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.scss";

function Products(props) {
  const MAX_PRODUCTS = 12;
  const data = [];
  let i = 0;

  for (let i = 0; i < MAX_PRODUCTS; i++) {
    data.push(i);
  }

  return (
    <section className={styles["products"]}>
      <Container>
        <h2 className={`${styles["products__title"]}`}>Лучшие новинки каталога 2024</h2>
        <ul className={styles["products__list"]}>
          {data.map(el => (
            <li className={styles["products__item"]} key={i++}>
              <ProductCard />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Products;
