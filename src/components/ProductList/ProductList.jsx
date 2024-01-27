import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ data }) {
  return (
    <ul className={(data?.length === 1) ?
      `${styles["list"]} ${styles["list-one"]}` : styles["list"]}>
      {data?.map(item => (
        <li className={styles["item"]} key={item.id}>
          <ProductCard {...item} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
