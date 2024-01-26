import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useSelector } from "react-redux";

function Navigation(props) {
  const FULL_CART = 4;
  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  const totalCount = useSelector((state) => state.cart.totalCount);

  const isActive = favoriteList?.length > 0;
  const isCart = totalCount > 0;
  const isFullCart = totalCount > FULL_CART;

  return (
    <nav className={`${styles["control"]} ${props.className}`}>
      <Link className={styles["link"]} to="/favorite">
        <span className={styles["link-text"]}>Избранное</span>
        <span className={styles["count"]}>
          ({favoriteList.length})
        </span>
        <svg className={isActive ? `${styles["active"]}` : ""} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          {/* eslint-disable-next-line max-len */}
          <path d="M8.41325 13.8733C8.18659 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32659 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </Link>
      <Link className={styles["link"]} to="/cart">
        <span className={styles["link-text"]}>Корзина</span>
        <span className={styles["count"]}>({totalCount})</span>
        <svg className={`
        ${isCart ? `${styles["active"]}` : ""} 
        ${isFullCart ? `${styles["full-cart"]}` : ""}
        `} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          {/* eslint-disable-next-line max-len */}
          <path d="M5.87329 1.33325L3.45996 3.75325" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
          {/* eslint-disable-next-line max-len */}
          <path d="M10.127 1.33325L12.5403 3.75325" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
          {/* eslint-disable-next-line max-len */}
          <path d="M1.33301 5.23324C1.33301 3.9999 1.99301 3.8999 2.81301 3.8999H13.1863C14.0063 3.8999 14.6663 3.9999 14.6663 5.23324C14.6663 6.66657 14.0063 6.56657 13.1863 6.56657H2.81301C1.99301 6.56657 1.33301 6.66657 1.33301 5.23324Z" stroke="currentColor"></path>
          {/* eslint-disable-next-line max-len */}
          <path d="M6.50684 9.33325V11.6999" stroke="currentColor" strokeLinecap="round"></path>
          {/* eslint-disable-next-line max-len */}
          <path d="M9.57324 9.33325V11.6999" stroke="currentColor" strokeLinecap="round"></path>
          {/* eslint-disable-next-line max-len */}
          <path d="M2.33301 6.66675L3.27301 12.4267C3.48634 13.7201 3.99967 14.6667 5.90634 14.6667H9.92634C11.9997 14.6667 12.3063 13.7601 12.5463 12.5067L13.6663 6.66675" stroke="currentColor" strokeLinecap="round"></path>
        </svg>
      </Link>
    </nav>
  );
}

export default Navigation;
