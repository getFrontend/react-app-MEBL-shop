import { Container } from "../../views/Container/Container";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.scss";

function Products({ data }, ...props) {
  // const MAX_PRODUCTS = 12;
  // const dataDefault = [];
  // let i = 0;

  // console.log(data);

  // for (let i = 0; i < MAX_PRODUCTS; i++) {
  //   dataDefault.push(i);
  // }

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
