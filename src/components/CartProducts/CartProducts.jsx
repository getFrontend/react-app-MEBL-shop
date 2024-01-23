import { Link } from "react-router-dom";
import { API_URL } from "../../store/api";
import s from "./CartProducts.module.scss";

function CartProducts({ data }) {
  console.log("22222= ", data);

  return (
    <>
      {data?.length !== 0 ? (
        <ul className={s.products}>
          {
            data.map((item, index) => (
              <li className={s.product} key={index}>
                <Link className={s.link} to={`/product/${item.id}`}>
                  <img className={s.img}
                    src={`${API_URL}/${item.images[0]}`}
                    alt={item.name || ""} />
                </Link>
                <h3 className={s.titleProduct}>{item.name || ""}</h3>
                <p className={s.price}>{item.price?.toLocaleString() || ""}&nbsp;₴</p>
                <p className={s.article}>арт. {item.article || ""}</p>

                <div className={s.productControl}>
                  <button className={s.productBtn}> - </button>
                  <span className={s.productCount}> {item.quantity} </span>
                  <button className={s.productBtn}> + </button>
                </div>
              </li>
            ))
          }
        </ul >
      ) : <div className={s.products}>В корзине сейчас пусто...</div>}
    </>
  );
}

export default CartProducts;
