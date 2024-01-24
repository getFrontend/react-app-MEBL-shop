import s from "./ButtonAddToCart.module.scss";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cart/cart.slice";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

function ButtonAddToCart({ className, id }) {
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);

  const toast = useToast();
  const addCartToast = () => {
    toast({
      description: "Товар добавлен в корзину!",
      status: "success",
      variant: "left-accent",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleCartClick = () => {
    dispatch(addProductToCart({ productId: id, quantity: 1 }));
    setIsInCart(true);
    addCartToast();
  };

  return (
    <button
      onClick={handleCartClick}
      className={isInCart ?
      `${className} ${s.disabled}` :
      `${className} `}
      data-id={id}
      aria-label="Добавить в корзину">
      {isInCart ? "В корзине" : "В корзину"}
    </button>
  );
}

export default ButtonAddToCart;
