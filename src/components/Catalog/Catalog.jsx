import { useDispatch, useSelector } from "react-redux";
import { getCatalogIcon } from "../../helpers/getCatalogIcon";
import { Container } from "../../views/Container/Container";
import styles from "./Catalog.module.scss";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Link } from "react-router-dom";

function Catalog(props) {
  // const defaultData = [
  //   "Тумбы", "Стулья", "Столы", "Пуфы и банкетки", "Кровати", "Диваны", "Полки", "Стеллажи"
  // ];

  const dispatch = useDispatch();

  const {
    data,
    loading,
    error,
  } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
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
    <nav className={styles["catalog"]}>
      <Container className={styles["catalog__container"]}>
        <ul className={styles["catalog__list"]}>
          {data.map((item, index) => (
            <li className={styles["catalog__item"]} key={index}>
              <Link className={styles["catalog__link"]} to={`/category?slug=${item}`}>
                <img
                  className={styles["catalog__icon"]}
                  src={getCatalogIcon(index)}
                  alt={`Иконка: ${item}`}
                />
                <span className={styles["catalog__text"]}>{item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav >
  );
}

export default Catalog;
