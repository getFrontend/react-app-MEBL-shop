import { Link } from "react-router-dom";
import s from "./OrderProducts.module.scss";
import { API_URL } from "../../store/api";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { useDispatch, useSelector } from "react-redux";

function OrderProducts({ productList }) {
  const dispatch = useDispatch();
  const list = productList;
  const { data } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ list }));
  }, [dispatch, list]);

  return (
    <ul className={s.products}>
      {data?.map(item => (
        <li className={`${s.product} fade-in`} key={item.id}>
          <Link className={s.link} to={`/product/${item.id}`}>
            <img className={s.img}
              src={`${API_URL}/${item.images[0]}`}
              alt={item.name || ""} />
          </Link>
          <h3 className={s.titleProduct}>{item.name || ""}</h3>
          <div className={`${s.price} fade-in`}>
            <p>{item.price.toLocaleString()}&nbsp;<i className={s.currency}>₴</i></p>
          </div>
          <p className={s.article}>арт. {item.article || "0"}</p>
        </li>
      ))}
    </ul>
  );
}

export default OrderProducts;
