import { useSelector } from "react-redux";
import "./RemoveToken.scss";
import { useNavigate } from "react-router-dom";

function RemoveToken() {
  const navigate = useNavigate();

  const {
    accessToken,
  } = useSelector(state => state.auth);

  const reset = () => {
    localStorage.removeItem("accessTokenMebl");
    console.log("✅Токен был успешно обновлён!!!");
    console.log("🐱‍🏍Перезагрузка страницы");
    navigate("/");
  };


  return (
    <div className="wrapper">
      <div className="text"> <span className="token">{accessToken}</span></div>
      <button className="button-reset" onClick={reset}>Обновить токен</button>
    </div>
  );
}

export default RemoveToken;
