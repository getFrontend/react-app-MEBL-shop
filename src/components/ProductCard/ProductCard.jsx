import { Link } from "react-router-dom";
import { API_URL } from "../../store/api";
import styles from "./ProductCard.module.scss";
import ButtonFavorite from "../ButtonFavorite/ButtonFavorite";

function ProductCard({ id, images: [image], name: title, price }, ...props) {
  return (
    <article className={styles["card"]}>
      <Link className={styles["card__link"]} to={`/product/${id}`}>
        <img className={styles["card__image"]}
          src={`${API_URL}/${image}`} alt={title} />
      </Link>
      <div className={styles["card__info"]}>
        <h3 className={styles["card__item-title"]}>
          <Link className={styles["card__item-link"]} to={`/product/${id}`}>
            {title}
          </Link>
        </h3>
        <span className={styles["card__item-price"]}>
          {parseInt(price).toLocaleString()}&nbsp;₴
        </span>
      </div>
      <button className={styles["card__button-cart"]} data-id={id}
        aria-label="Добавить в корзину">В корзину</button>
      <ButtonFavorite className={styles["favorite"]} id={id} />
    </article>
  );
}

export default ProductCard;

