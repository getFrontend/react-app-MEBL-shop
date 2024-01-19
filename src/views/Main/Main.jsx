import styles from "./Main.module.scss";

export const Main = (props) => (
  <main className={styles["main"]}>
    {props.children}
  </main>
);

