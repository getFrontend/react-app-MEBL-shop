import styles from "./Specifications.module.scss";

function Specifications() {
  return (
    <div className={styles["specs"]}>
      <h3 className={styles["specs-title"]}>Общие характеристики</h3>
      <table className={`${styles["specs-table"]} ${styles["table"]}`}>
        <tr className={styles["table__row"]}>
          <td className={styles["table__field"]}>Тип</td>
          <td className={styles["table__value"]}>Компьютерный стол</td>
        </tr>
        <tr className={styles["table__row"]}>
          <td className={styles["table__field"]}>Ширина, см</td>
          <td className={styles["table__value"]}>108.1</td>
        </tr>
        <tr className={styles["table__row"]}>
          <td className={styles["table__field"]}>Глубина, см</td>
          <td className={styles["table__value"]}>47</td>
        </tr>
        <tr className={styles["table__row"]}>
          <td className={styles["table__field"]}>Высота, см</td>
          <td className={styles["table__value"]}>103.4</td>
        </tr>
        <tr className={styles["table__row"]}>
          <td className={styles["table__field"]}>Бренд</td>
          <td className={styles["table__value"]}>GARUN</td>
        </tr>
      </table>
    </div>
  );
}

export default Specifications;
