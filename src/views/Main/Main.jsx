import { useDispatch, useSelector } from "react-redux";
import Catalog from "../../components/Catalog/Catalog";
import Products from "../../components/Products/Products";
import "./Main.scss";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categories.slice";
import { fetchProducts } from "../../store/products/products.slice";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

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

  if (loadingCategories || loadingProducts) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  if (errorCategories) {
    return (<main><ErrorMessage message={errorCategories} /></main>);
  }

  if (errorProducts) {
    return (<main><ErrorMessage message={errorProducts} /></main>);
  }

  return (
    <main>
      <Catalog data={dataCategories} />
      <Products data={dataProducts} />
    </main>
  );
};

