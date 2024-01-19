import { useSelector } from "react-redux";
import "./RemoveToken.scss";
import { Link } from "react-router-dom";

function RemoveToken() {
  const {
    accessToken,
  } = useSelector(state => state.auth);

  const reset = () => {
    localStorage.removeItem("accessTokenMebl");
    console.log("✅Токен был успешно обновлён!!!");
    console.log("🐱‍🏍Перезагрузка страницы");
    location.reload(true);
  };


  return (
    <div className="wrapper">
      <div className="text"> <span className="token">{accessToken}</span></div>
      <button className="button-reset" onClick={reset}
        aria-label="Обновить токен">Обновить токен</button>
      <Link className="button-home" to="/">На главную</Link>
    </div>
  );
}

export default RemoveToken;
