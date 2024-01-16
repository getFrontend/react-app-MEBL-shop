import { Link } from "react-router-dom";
import { API_URL } from "../../store/api";
import styles from "./ProductCard.module.scss";

function ProductCard({ id, images: [image], name: title, price }, ...props) {
  // const defaultData = {
  //   id: 51,
  //   image: "https://koff-api.vercel.app//img/1hcgrit0rhd5gr2t.jpg",
  //   title: "Полутораспальная кровать Фади",
  //   price: "6725",
  // };

  // const { id, image, title, price } = defaultData;

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
      <button className={styles["card__button-cart"]} data-id={id}>В корзину</button>
      <button className={styles["card__button-favourite"]} data-id={id}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          {/* eslint-disable-next-line max-len */}
          <path d="M8.41325 13.8733C8.18659 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32659 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z"
            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          </path>
        </svg>
      </button>
    </article>
  );
}

export default ProductCard;

