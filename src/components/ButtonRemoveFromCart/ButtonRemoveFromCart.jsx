import s from "./ButtonRemoveFromCart.module.scss";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../store/cart/cart.slice";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

function ButtonRemoveFromCart({ id }) {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

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
    setIsDisabled(true);
    removeCartToast();
  };

  return (
    <button
      className={isDisabled ? `${s.removeBtn} ${s.disabled}` : s.removeBtn}
      onClick={handleCartClick}>{isDisabled ? "Удалён!" : "Удалить"}</button>
  );
}

export default ButtonRemoveFromCart;
