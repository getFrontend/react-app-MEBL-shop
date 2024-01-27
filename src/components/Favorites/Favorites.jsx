import s from "./Favorites.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/products.slice";
import Products from "../Products/Products";
import { Container } from "../../views/Container/Container";
import { getCatalogIcon } from "../../helpers/getCatalogIcon";
import { useLocation, useSearchParams } from "react-router-dom";
import TitleMain from "../TitleMain/TitleMain";

function Favorites() {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const { pathname } = useLocation();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  const list = favoriteList.join(",");
  const page = searchParam.get("page");

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    if (pathname === "/favorite") {
      dispatch(fetchProducts({ list, page }));
    }
  }, [dispatch, pathname, page]);

  const image = getCatalogIcon(4);

  return <>
    {favoriteList?.length ? (
      <Products />
    ) : (
      <section className={s.favoriteEmpty}>
        <Container>
          <TitleMain title="Избранное" />
          <div className={s.empty}>
            <img className={s.image} src={image} alt="Иконка с элементом мебели" />
            <div className={s.wrapper}>
              <div className={s.title}>Ой... а тут пусто <span>😢</span></div>
              <div className={s.text}>
                <p>Добавьте какой-нибудь товар, нажав на сердечко <span>💚</span></p>
                <p>И здесь появятся все понравившиеся вам товары <span>😊</span></p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )}
  </>;
}

export default Favorites;
