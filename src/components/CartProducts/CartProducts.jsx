import { Link } from "react-router-dom";
import { API_URL } from "../../store/api";
import s from "./CartProducts.module.scss";
import ButtonRemoveFromCart from "../ButtonRemoveFromCart/ButtonRemoveFromCart";
import CartQuantityCounter from "../CartQuantityCounter/CartQuantityCounter";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { Center, Spinner } from "@chakra-ui/react";

function CartProducts({ products }) {
  const {
    loadingFetch: loading
  } = useSelector((state) => state.cart);

  // if (loading) {
  //   return (
  //     <Center className={s.products}>
  //       <Spinner
  //         thickness='4px'
  //         speed='0.65s'
  //         emptyColor='gray.200'
  //         color='green.300'
  //         size='xl'
  //       />
  //     </Center>
  //   );
  // }

  return (
    <>
      {(products?.length === 0) && !loading ?
        (<div className={s.products}>В корзине пока пусто..</div>) :
        (
          <ul className={s.products}>
            {
              products?.map((item, index) => (
                <li className={s.product} key={index}>
                  <Link className={s.link} to={`/product/${item.id}`}>
                    <img className={s.img}
                      src={`${API_URL}/${item.images[0]}`}
                      alt={item.name || ""} />
                  </Link>
                  <h3 className={s.titleProduct}>{item.name || ""}</h3>
                  <div className={`${s.price} fade-in`}>
                    <p>{((item.price * item.quantity) ||
                      0)?.toLocaleString()}&nbsp;<i className={s.currency}>₴</i></p>
                    <span>{(item.quantity > 1) ? `(${item.quantity} x ${item.price})` : ""}</span>
                  </div>

                  <p className={s.article}>арт. {item.article || "0"}</p>

                  <CartQuantityCounter
                    className={s.productControl}
                    quantity={item.quantity}
                    id={item.id} />
                  <ButtonRemoveFromCart id={item.id} text={"Удалить"} />
                </li>
              ))
            }
          </ul >
        )}
    </>
  );
}

export default CartProducts;
