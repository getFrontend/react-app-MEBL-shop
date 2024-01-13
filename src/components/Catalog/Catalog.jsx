import { Container } from "../../views/Container/Container";
import styles from "./Catalog.module.scss";

function Catalog(props) {
  const data = [
    "Тумбы", "Стулья", "Столы", "Пуфы и банкетки", "Кровати", "Диваны", "Полки", "Стеллажи"
  ];

  const dataList = [];

  data.forEach((item, id) => {
    dataList.push(
      <li className={styles["catalog__item"]} key={id}>
        <a className={styles["catalog__link"]} href="#!">{item}</a>
      </li>
    );
  });

  return (
    <nav className={styles["catalog"]}>
      <Container>
        <ul className={styles["catalog__list"]}>
          {dataList}
        </ul>
      </Container>
    </nav>
  );
}

export default Catalog;
