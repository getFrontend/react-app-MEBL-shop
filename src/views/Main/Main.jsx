import { useDispatch, useSelector } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import Products from "../../components/Products/Products";
import "./Main.scss";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import { fetchProducts } from "../../store/products/products.slice";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories
  } = useSelector(state => state.categories);

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts
  } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loadingCategories || loadingProducts) return <div className="loading">Загрузка...</div>;
  if (errorCategories || errorProducts) return <div>Ошибка: {errorCategories}</div>;

  return (
    <main>
      <Catalog data={dataCategories} />
      <Products data={dataProducts} />
    </main>
  );
};

