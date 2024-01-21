import { useDispatch, useSelector } from "react-redux";
import { getCatalogIcon } from "../../helpers/getCatalogIcon";
import { Container } from "../../views/Container/Container";
import styles from "./Catalog.module.scss";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Link, useLocation } from "react-router-dom";

function Catalog(props) {
  // const defaultData = [
  //   "Тумбы", "Стулья", "Столы", "Пуфы и банкетки", "Кровати", "Диваны", "Полки", "Стеллажи"
  // ];

  const dispatch = useDispatch();
  const location = useLocation();

  const handleCategory = (category) => {
    const isCategory = location.search.includes(encodeURIComponent(category));
    return isCategory;
  };

  const {
    data,
    loading,
    error: errorCategories,
    statusCode
  } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return (
      <Loader />
    );
  }

  if (errorCategories && statusCode !== 401) {
    const errorData = {
      path: "categories",
      errorMsg: errorCategories
    };
    return (
      <ErrorMessage data={errorData} />
    );
  }

  return (
    <nav className={styles["catalog"]}>
      <Container className={styles["catalog__container"]}>
        <ul className={styles["catalog__list"]}>
          {data.map((item, index) => (
            <li className={styles["catalog__item"]} key={index}>
              <Link className={handleCategory(item) ?
                `${styles["catalog__link"]} ${styles["catalog__link_active"]}` :
                `${styles["catalog__link"]}`} to={`/category?category=${item}`}>
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
