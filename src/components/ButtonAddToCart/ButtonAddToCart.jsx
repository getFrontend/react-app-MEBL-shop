import s from "./ButtonAddToCart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/cart/cart.slice";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

function ButtonAddToCart({ className, id }) {
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const { products } = useSelector((state) => state.cart);

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

  const isCart = products.find(item => item.id === id);

  const handleCartClick = () => {
    dispatch(addProductToCart({ productId: id, quantity: 1 }));
    setIsInCart(true);
    addCartToast();
  };

  return (
    <button
      onClick={handleCartClick}
      className={isInCart || isCart ?
        `${className} ${s.disabled}` :
        `${className} `}
      data-id={id}
      aria-label="Добавить в корзину">
      {isInCart || isCart ? "В корзине" : "В корзину"}
    </button>
  );
}

export default ButtonAddToCart;
