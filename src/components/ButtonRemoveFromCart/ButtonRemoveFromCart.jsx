import s from "./ButtonRemoveFromCart.module.scss";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../store/cart/cart.slice";
import { useToast } from "@chakra-ui/react";

function ButtonRemoveFromCart({ id, text }) {
  const dispatch = useDispatch();

  const toast = useToast();
  const removeCartToast = () => {
    toast({
      description: "Товар удален из корзины!",
      status: "info",
      variant: "left-accent",
      duration: 2000,
      isClosable: true,
      bg: "red.500"
    });
  };

  const handleCartClick = () => {
    dispatch(removeProductFromCart(id));
    removeCartToast();
  };

  return (
    <button
      className={s.removeBtn}
      onClick={handleCartClick}>{text}</button>
  );
}

export default ButtonRemoveFromCart;
