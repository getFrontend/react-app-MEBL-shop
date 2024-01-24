import { useSelector } from "react-redux";
import { getDeclOfNum, titles } from "../../helpers/getDeclOfNum";
import s from "./CartPlace.module.scss";

function CartPlace() {
  const { totalPrice, totalCount } = useSelector((state) => state.cart);

  return (
    <div className={s.place}>
      <h3 className={s.subtitle}>Оформление заказа:</h3>
      <div className={s.placeInfo}>
        <p className={s.count}>
          <span>{getDeclOfNum(totalCount, titles)}</span> на сумму:
        </p>
        <p className={s.price}>{totalPrice.toLocaleString()}&nbsp;<span>₴</span></p>
      </div>
      <p className={s.placeDelivery}>Доставка: 0&nbsp;₴</p>
      <button className={s.placeBtn} type="submit" form="order">Оформить заказ</button>
    </div>
  );
}

export default CartPlace;
