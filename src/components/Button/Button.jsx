import styles from "./Button.module.scss";

function Button({ children, onClick }) {
  return (
    <button className={styles["button"]} onClick={onClick}>{children}</button>
  );
}

export default Button;
