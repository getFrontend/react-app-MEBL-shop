import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/cart/cart.slice";
import { useToast } from "@chakra-ui/react";
// import { useEffect } from "react";

function ButtonAddToCart({ className, id }) {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCart());
  // }, [dispatch]);

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
    addCartToast();
  };

  return (
    <button
      onClick={handleCartClick}
      className={className}
      data-id={id}
      aria-label="Добавить в корзину">
      В корзину
    </button>
  );
}

export default ButtonAddToCart;
