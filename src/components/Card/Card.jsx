import { Container } from "../../views/Container/Container";
import styles from "./Card.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Card() {
  const defaultData = {
    id: 51,
    title: "Полутораспальная кровать Фади",
    image: "https://koff-api.vercel.app//img/1hcgrit0rhd5gr2t.jpg",
    price: "6725"
  };
  const { title, image, price } = defaultData;

  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { productId } = useParams();
  const dispatch = useDispatch();

  const {
    data,
    // loading,
    // error,
  } = useSelector(state => state.product);

  console.log("data: ", data || "no");

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);


  // if (loading) {
  //   return (
  //     <Loader />
  //   );
  // }

  // if (error) {
  //   return (
  //     <ErrorMessage message={error} />
  //   );
  // }

  return (
    <section className={styles["card"]}>
      <Container className={styles["container"]}>
        <h2 className={styles["title"]}>{title}</h2>

        <div className={styles["gallery"]}>
          <div className={styles["slider-main"]}>
            <Swiper
              modules={[Navigation, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              onSwiper={setMainSwiper}
              spaceBetween={10}
            >
              <SwiperSlide>
                <img className="product__image"
                  src={image} alt={title} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="product__image"
                  src={image} alt={title} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="product__image"
                  src={image} alt={title} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="product__image"
                  src={image} alt={title} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="product__image"
                  src={image} alt={title} />
              </SwiperSlide>
            </Swiper>
            <button onClick={() => mainSwiper.slidePrev()}>Prev</button>
            <button onClick={() => mainSwiper.slideNext()}>Next</button>
          </div>

          <div className={styles["slider-thumbnails"]}>
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
              watchSlidesProgress
              spaceBetween={14}
              slidesPerView={4}
            >
              <SwiperSlide>
                <img className="product__image"
                  src={image} alt={title} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="product__image"
                  src={image} alt={title} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="product__image"
                  src={image} alt={title} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="product__image"
                  src={image} alt={title} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="product__image"
                  src={image} alt={title} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="product__info">
          <p className="product__price">{parseInt(price).toLocaleString()}&nbsp;₴</p>
          <p className="product__article">арт. 16954355927</p>
          <div className="product__specs">
            <h3 className="product__specs-title">Общие характеристики</h3>
            {/* <table className="product__specs-table table">
              <tr className="table__row">
                <td className="table__field">Тип</td>
                <td className="table__value">Компьютерный стол</td>
              </tr>
              <tr className="table__row">
                <td className="table__field">Ширина, см</td>
                <td className="table__value">108.1</td>
              </tr>
              <tr className="table__row">
                <td className="table__field">Глубина, см</td>
                <td className="table__value">47</td>
              </tr>
              <tr className="table__row">
                <td className="table__field">Высота, см</td>
                <td className="table__value">103.4</td>
              </tr>
              <tr className="table__row">
                <td className="table__field">Бренд</td>
                <td className="table__value">GARUN</td>
              </tr>
            </table> */}
          </div>
          <div className="product__buttons">
            <button className="product__buttons-cart" data-id={productId}>В корзину</button>
            <button className="product__buttons-favourite" data-id={productId}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                viewBox="0 0 16 16">
                {/* eslint-disable-next-line max-len */}
                <path d="M8.41325 13.8733C8.18659 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32659 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z"
                  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Card;
