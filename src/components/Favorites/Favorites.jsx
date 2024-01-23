import styles from "./Favorites.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/products.slice";
import Products from "../Products/Products";
import { Container } from "../../views/Container/Container";
import { getCatalogIcon } from "../../helpers/getCatalogIcon";
import { useLocation, useSearchParams } from "react-router-dom";

function Favorites() {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const { pathname } = useLocation();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  const page = searchParam.get("page");
  const params = { list: favoriteList.join(","), page };

  useEffect(() => {
    if (pathname === "/favorite") {
      dispatch(fetchProducts(params));
    }
  }, [dispatch, pathname]);

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
