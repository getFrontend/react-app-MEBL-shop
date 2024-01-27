import { useSelector } from "react-redux";
import { getDeclOfNum, titles } from "../../helpers/getDeclOfNum";
import s from "./CartPlace.module.scss";
import { Spinner } from "@chakra-ui/react";

function CartPlace() {
  const { totalPrice, totalCount, loadingFetch: loading } = useSelector((state) => state.cart);

  return (
    <div className={s.place}>
      <h3 className={s.subtitle}>Оформление заказа:</h3>
      <div className={s.placeInfo}>
        <div className={s.count}>
          <span>{getDeclOfNum(totalCount, titles)}</span> на сумму:
        </div>
        <div className={`${s.price} ${"fade-in"}`}>
          {
            (loading ?
              (<Spinner
                thickness='3px'
                speed='0.5s'
                emptyColor='gray.200'
                color='green.300'
                size={{ xs: "sm", lg: "md" }}
              />) :
              totalPrice.toLocaleString())
          }&nbsp;<span>₴</span></div>
      </div>
      <div className={s.placeDelivery}>Доставка: 0&nbsp;₴</div>
      <button className={s.placeBtnPro} type="submit" form="order">Оформить заказ</button>
    </div>
  );
}

export default CartPlace;
