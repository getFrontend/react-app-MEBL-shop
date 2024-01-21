import { Container } from "../../views/Container/Container";
import styles from "./NotFoundProduct.module.scss";

function NotFoundProduct({ search }) {
  return (
    <Container>
      <div className={styles["not-found"]}>
        <h3 className={styles["title"]}>Ой...</h3>
        <div className={styles["text"]}>Увы, но мы ничего не нашли по вашему запросу:</div>
        <div className={styles["query"]}> {search}</div>
      </div>
      <div className={styles["info"]}>
        <p>Возможно такого товара еще нет в нашем каталоге.</p>
        <p>Также проверьте правильно ли вы ввели название мебели, и повторите ваш запрос.</p>
      </div>
    </Container>
  );
}

export default NotFoundProduct;
