import styles from "./Favorites.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/products.slice";
import Products from "../Products/Products";
import { Container } from "../../views/Container/Container";
import { getCatalogIcon } from "../../helpers/getCatalogIcon";

function Favorites() {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  useEffect(() => {
    if (favoriteList) {
      const params = { list: favoriteList };
      dispatch(fetchProducts(params));
    }
  }, [dispatch, favoriteList]);

  const image = getCatalogIcon(1);

  return <>
    {favoriteList?.length ? (
      <Products />
    ) : (
      <Container>
        <div className={styles["empty"]}>
          <img className={styles["image"]} src={image} alt="" />
          <div className={styles["wrapper"]}>
            <h2 className={styles["title"]}>Ой... <span>а в Избранном пусто 😢</span></h2>
            <div className={styles["text"]}>
              <p>Добавьте какой-нибудь товар, нажав на сердечко <span>💚</span></p>
              <p>И здесь появятся все понравившиеся вам товары <span>😊</span></p>
            </div>
          </div>
        </div>
      </Container>
    )}
  </>;
}

export default Favorites;
