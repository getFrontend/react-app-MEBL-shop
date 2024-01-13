import { Container } from "../../views/Container/Container";
import styles from "./Catalog.module.scss";


function Catalog(props) {
  let i = 0;

  const data = [
    "Тумбы", "Стулья", "Столы", "Пуфы и банкетки", "Кровати", "Диваны", "Полки", "Стеллажи"
  ];

  return (
    <nav className={styles["catalog"]}>
      <Container>
        <ul className={styles["catalog__list"]}>
          {data.map(el => (
            <li className={styles["catalog__item"]} key={i++}>
              <a className={styles["catalog__link"]} href="#!">{el}</a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

export default Catalog;
