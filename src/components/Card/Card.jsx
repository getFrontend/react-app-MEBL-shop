import { Container } from "../../views/Container/Container";
import styles from "./Card.module.scss";
import "swiper/css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, is404ErrorProduct } from "../../store/product/product.slice";
import Gallery from "../Gallery/Gallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Specifications from "../Specifications/Specifications";
import Page404 from "../Page404/Page404";

function Card() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const {
    data,
    loading,
    error: errorProduct,
  } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (is404ErrorProduct) {
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
                  <button className={styles["buttons-favourite"]}
                    data-id={productId} aria-label="Добавить в избранное">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      {/* eslint-disable-next-line max-len */}
                      <path d="M8.41325 13.8733C8.18659 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32659 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z"
                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
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
