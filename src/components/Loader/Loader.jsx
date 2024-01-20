import styles from "./Loader.module.scss";

function Loader() {
  return (
    <>
      <div className={styles["loader-container"]}>
        <div className={styles["spinner"]}></div>
      </div>
    </>
  );
}

export default Loader;
