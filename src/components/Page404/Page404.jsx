import { Link } from "react-router-dom";
import { getCatalogIcon } from "../../helpers/getCatalogIcon";
import styles from "./Page404.module.scss";

function Page404() {
  const image = getCatalogIcon(1);

  return (
    <div className={styles["page404"]}>
      <h3 className={styles["title"]}>
        <img className={styles["image"]} src={image} alt="" />
        <span>Ой! Ошибка 404...</span>
      </h3>
      <p className={styles["text"]}>Страница, которую вы ищите — не существует! 🤷‍♂️</p>
      <p className={styles["text"]}>
        Попробуйте вернуться на <Link className={styles["link"]} to="/">главную страницу</Link>.
      </p>
    </div>
  );
}

export default Page404;
