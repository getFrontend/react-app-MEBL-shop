import { Container } from "../../views/Container/Container";
import styles from "./Cart.module.scss";

function Cart() {
  return (
    <div className={styles["cart"]}>
      <Container>
        Cart
      </Container>
    </div>
  );
}

export default Cart;
