import styles from "./ErrorMessage.module.scss";

function ErrorMessage({ message }) {
  return (
    typeof message === "string" ? (
      <div className={styles["error"]}>
        <h2 className={styles["title"]}>Упс! Возникла ошибка 😢</h2>
        <p className={styles["text"]}>{message}</p>
      </div>
    ) : null
  );
}

export default ErrorMessage;
