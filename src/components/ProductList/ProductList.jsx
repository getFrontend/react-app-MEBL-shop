import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ data }) {
  return (
    <ul className={styles["list"]}>
      {data?.map(item => (
        <li className={styles["item"]} key={item.id}>
          <ProductCard {...item} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
