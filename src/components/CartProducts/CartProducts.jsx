import s from "./CartProducts.module.scss";
import { Link } from "react-router-dom";
import { API_URL } from "../../store/api";
import ButtonRemoveFromCart from "../ButtonRemoveFromCart/ButtonRemoveFromCart";
import CartQuantityCounter from "../CartQuantityCounter/CartQuantityCounter";
import { useSelector } from "react-redux";
import emptyCart from "../../assets/emptycart.svg";
import { Center, Spinner } from "@chakra-ui/react";

function CartProducts() {
  const {
    products,
    loadingFetch: loading
  } = useSelector((state) => state.cart);

  if (products?.length === 0 && loading) {
    return (
      <Center className={s.products}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='green.300'
          size='xl'
        />
      </Center>
    );
  }

  return (
    <>
      {(products?.length === 0) && !loading ?
        (<>
          <div className={`${s.products} fade-in`}>
            <p><span className={s.customer}>Уважаемый покупатель</span>, в вашей корзине сейчас пусто..</p>
            <p>Пожалуйста перейдите в <Link className={s.link2} to={"/category?category=%D0%94%D0%B8%D0%B2%D0%B0%D0%BD%D1%8B"}>каталог</Link>, и выберите какой-нибудь товар.</p>
            <div className={s.empty}>
              <img src={emptyCart} alt="Пустая корзина" />
            </div>
          </div>
        </>) :
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
