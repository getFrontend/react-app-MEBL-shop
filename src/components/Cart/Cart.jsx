import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import CartForm from "../CartForm/CartForm";
import CartPlace from "../CartPlace/CartPlace";
import CartProducts from "../CartProducts/CartProducts";
import s from "./Cart.module.scss";
import { useEffect } from "react";
import { fetchCart } from "../../store/cart/cart.slice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Cart() {
  const dispatch = useDispatch();
  const {
    products,
    totalPrice,
    totalCount,
    loadingFetch,
    error: errorCart
  } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (loadingFetch) {
    return <Loader />;
  }

  if (errorCart) {
    return <ErrorMessage errorMsg={errorCart || ""} />;
  }

  return (
    <section className={s.cart}>
      {products ? (<>
        <Container className={s.container}>
          <h2 className={s.title}>Корзина</h2>
          <CartProducts data={products} />
          <CartPlace totalPrice={totalPrice} totalCount={totalCount} />
          <CartForm />
        </Container>
      </>) : <Container>В корзине сейчас пусто...</Container>}
    </section >
  );
}

export default Cart;
