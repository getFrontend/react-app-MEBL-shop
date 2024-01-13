import styles from "./ProductCard.module.scss";

function ProductCard(props) {
  return (
    <article className={styles["card"]}>
      <a className={styles["card__link"]} href="/product/51">
        <img className={styles["card__image"]}
          src="https://koff-api.vercel.app//img/1hcgrit0rhd5gr2t.jpg" alt="Полутораспальная кровать Фади" />
      </a>
      <div className={styles["card__info"]}>
        <h3 className={styles["card__item-title"]}>
          <a className={styles["card__item-link"]} href="/product/51">
            Полутораспальная кровать Фади
          </a>
        </h3>
        <span className={styles["card__item-price"]}>6&nbsp;725&nbsp;₴</span>
      </div>
      <button className={styles["card__button-cart"]} data-id="51">В корзину</button>
      <button className={styles["card__button-favourite"]}
        data-id="51"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
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

