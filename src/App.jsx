import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./views/Footer/Footer";
import { Header } from "./views/Header/Header";
import { Main } from "./views/Main/Main";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice";

function App() {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  return (
    <>
      <Header />
      {!loading && accessToken ? <Main /> : <div className="loading">Загрузка...</div>}
      <Footer />
    </>
  );
}

export default App;
