import styles from "./Specifications.module.scss";

function Specifications({ data }) {
  return (
    <div className={styles["specs"]}>
      <h3 className={styles["specs-title"]}>Общие характеристики</h3>
      <table className={`${styles["specs-table"]} ${styles["table"]}`}>
        <tbody>
          {data.characteristics.map((item, index) => (
            <tr className={styles["table__row"]} key={index}>
              <td className={styles["table__field"]}>{item[0]}</td>
              <td className={styles["table__value"]}>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Specifications;
