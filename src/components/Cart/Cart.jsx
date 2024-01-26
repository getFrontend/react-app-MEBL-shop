import { Container } from "../../views/Container/Container";
import CartForm from "../CartForm/CartForm";
import CartPlace from "../CartPlace/CartPlace";
import CartProducts from "../CartProducts/CartProducts";
import s from "./Cart.module.scss";
import TitleMain from "../TitleMain/TitleMain";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCart } from "../../store/cart/cart.slice";

function Cart() {
  const dispatch = useDispatch();
  const {
    products,
    totalPrice,
    totalCount,
    loadingRemove,
    loadingAdd
  } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!loadingAdd && !loadingRemove) {
      dispatch(fetchCart());
    }
  }, [dispatch, loadingAdd, loadingRemove]);

  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <TitleMain className={s.title} title="Корзина" />
        <CartProducts products={products} />
        <CartPlace totalPrice={totalPrice} totalCount={totalCount} />
        <CartForm />
      </Container>
    </section >
  );
}

export default Cart;
