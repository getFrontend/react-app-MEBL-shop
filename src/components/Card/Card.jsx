import { Container } from "../../views/Container/Container";
import styles from "./Card.module.scss";
import "swiper/css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice";
import Gallery from "../Gallery/Gallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Specifications from "../Specifications/Specifications";
import Page404 from "../Page404/Page404";
import ButtonFavorite from "../ButtonFavorite/ButtonFavorite";

function Card() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const {
    data,
    loading,
    error: errorProduct,
    statusCode
  } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (statusCode === 404) {
    return (
      <Page404 />
    );
  }

  if (loading || Object.keys(data).length === 0) {
    return (
      <Loader />
    );
  }

  if (errorProduct) {
    const errorData = {
      path: "product",
      errorMsg: errorProduct
    };
    return (
      <ErrorMessage data={errorData} />
    );
  }

  return (
    <section className={styles["card"]}>
      <Container className={styles["container"]}>
        {data ?
          (
            <>
              <h2 className={styles["title"]}>{data.name}</h2>
              <Gallery data={data} />
              <div className={styles["info"]}>
                <p className={styles["price"]}>
                  {parseInt(data.price).toLocaleString()}&nbsp;
                  <span className={styles["price__currency"]}>₴</span></p>
                <p className={styles["article"]}>арт. {data.article}</p>
                <Specifications data={data} />
                <div className={styles["buttons"]}>
                  <button className={styles["buttons-cart"]}
                    data-id={productId} aria-label="Добавить в корзину">В корзину</button>
                  <ButtonFavorite className={styles["favorite"]} id={data.id} />
                </div>
              </div>
            </>
          ) : (
            <>Данные не пришли</>
          )
        }
      </Container>
    </section >
  );
}

export default Card;
