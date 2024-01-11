import styles from "./Container.module.scss";

export const Container = (props) => (
  props.className ? (
    <div className={`${styles["container"]} ${props.className}`}>{
      props.children}
    </div>
  ) : (
    <div className={styles.container}>{props.children}</div>
  )
);
