import { getCatalogIcon } from "../../helpers/getCatalogIcon";
import { Container } from "../../views/Container/Container";
import styles from "./Catalog.module.scss";

function Catalog({ data }, ...props) {
  const defaultData = [
    "Тумбы", "Стулья", "Столы", "Пуфы и банкетки", "Кровати", "Диваны", "Полки", "Стеллажи"
  ];

  const catalog = data || defaultData;

  return (
    <nav className={styles["catalog"]}>
      <Container className={styles["catalog__container"]}>
        <ul className={styles["catalog__list"]}>
          {catalog.map((item, index) => (
            <li className={styles["catalog__item"]} key={index}>
              <a className={styles["catalog__link"]} href={`/category?slug=${item}`}>
                <img
                  className={styles["catalog__icon"]}
                  src={getCatalogIcon(index)}
                  alt={`Иконка: ${item}`}
                />
                <span className={styles["catalog__text"]}>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav >
  );
}

export default Catalog;
