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
    <ul className={(data?.length === 1) ?
      `${s.list} ${s.listOne}` : s.list}>
      {data?.map(item => (
        <li className={s.item} key={item.id}>
          <article className={`${s.card} fade-in`}>
            <Link className={s.link} to={`/product/${item.id}`}>
              <img className={s.image}
                src={`${API_URL}/${item.images[0]}`} alt={item.name} />
            </Link>
            <div className={s.info}>
              <h3 className={s.title}>
                <Link className={s.itemLink} to={`/product/${item.id}`}>
                  {item.name}
                </Link>
              </h3>
              <span className={s.price}>
                {parseInt(item.price).toLocaleString()}&nbsp;₴
              </span>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default OrderProducts;
