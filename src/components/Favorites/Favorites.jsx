import styles from "./Favorites.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/products.slice";
import Products from "../Products/Products";
import { Container } from "../../views/Container/Container";

function Favorites() {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  useEffect(() => {
    if (favoriteList) {
      const params = { list: favoriteList };
      dispatch(fetchProducts(params));
    }
  }, [dispatch, favoriteList]);

  return <>
    {favoriteList?.length ? (
      <Products />
    ) : (
      <Container>
        <div className={styles["empty"]}>Извините, но пока в избранном пусто!</div>
      </Container>
    )}
  </>;
}

export default Favorites;
