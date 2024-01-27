
import { Container } from "../Container/Container";
import s from "./Order.module.scss";

function Order() {
  return (
    <section className={s.order}>
      <Container className={s.container}>
        Тут будет информация про заказ.
      </Container>
    </section>
  );
}

export default Order;
