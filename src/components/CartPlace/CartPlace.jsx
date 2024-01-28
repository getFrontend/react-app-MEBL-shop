import { useSelector } from "react-redux";
import { getDeclOfNum, titles } from "../../helpers/getDeclOfNum";
import s from "./CartPlace.module.scss";
import { Spinner } from "@chakra-ui/react";
import CartDelivery from "../CartDelivery/CartDelivery";

function CartPlace() {
  const { products, totalPrice, totalCount, loadingFetch: loading } = useSelector((state) => state.cart);

  const countAllQuantity = (data) => data.reduce((sum, item) => sum + item.quantity, 0);
  const allQuantity = countAllQuantity(products);

  const items = ["единици", "единицы", "единиц"];

  return (
    <div className={s.place}>
      <h3 className={s.subtitle}>Оформление заказа:</h3>
      <div className={s.placeInfo}>
        <div className={s.count}>
          <p><span>{getDeclOfNum(totalCount, titles)}</span> на сумму: </p>
          {allQuantity > totalCount ? (
            <p className={`${s.countSmall} fade-in`}>(Всего: {getDeclOfNum(allQuantity, items)} мебели)</p>
          ) : <></>}
        </div>
        <div className={`${s.price} fade-in`}>
          {
            (loading ?
              (<Spinner
                thickness='3px'
                speed='0.5s'
                emptyColor='gray.200'
                color='green.300'
                size={{ xs: "xs", sm: "sm", md: "sm", lg: "md" }}
              />) :
              totalPrice.toLocaleString())
          }&nbsp;<span>₴</span></div>
      </div>
      <CartDelivery className={s.placeDelivery} totalPrice={totalPrice} />
      <button className={s.placeBtnPro} type="submit" form="order">Оформить заказ</button>
    </div>
  );
}

export default CartPlace;
