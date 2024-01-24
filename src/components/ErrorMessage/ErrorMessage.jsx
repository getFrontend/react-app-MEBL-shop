import styles from "./ErrorMessage.module.scss";

function ErrorMessage({ data }) {
  let authErrorMsg = `Не удалось загрузить данные!`;
  console.log(`❗ ${data?.errorMsg}`);

  const reloadPage = () => {
    location.reload(true);
  };

  if (data?.path === "auth") {
    authErrorMsg = "Администратору, необходимо проверить данные для авторизации на сервере.";
  }

  if (data?.path === "categories") {
    return;
  }

  return (
    <div className={styles["error"]}>
      <h2 className={styles["title"]}>Ой! Возникла ошибка 😢</h2>
      <div className={styles["text"]}>
        <p>{authErrorMsg ? authErrorMsg : ""}</p>
        <p>Попробуйте <span>перезагрузить</span> страницу через некоторое время.</p>
      </div>
      <button className={styles["error-btn"]} onClick={reloadPage}
        aria-label="Перезагрузить страницу">Ctrl + R</button>
    </div>
  );
}

export default ErrorMessage;
