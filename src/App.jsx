import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./views/Footer/Footer";
import { Header } from "./views/Header/Header";
import { Main } from "./views/Main/Main";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const dispatch = useDispatch();
  const {
    accessToken,
    loading,
    error: errorAuth
  } = useSelector(state => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  if (errorAuth) {
    return (<>
      <Header />
      <main><ErrorMessage message={errorAuth} /></main>
      <Footer />
    </>);
  }

  return (
    <>
      <Header />
      {
        !loading && accessToken ?
          <Main /> :
          <Main>
            <Loader />
          </Main>
      }
      <Footer />
    </>
  );
}

export default App;
