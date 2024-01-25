import {
  Button, Collapse, Input, InputGroup, InputLeftAddon,
  useDisclosure
} from "@chakra-ui/react";
import s from "./CartForm.module.scss";

function CartForm() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <form className={s.form} id="order" method="POST">
      <h3 className={s.subtitle}>Данные для доставки</h3>
      <fieldset className={s.fieldsetInput}>
        <input className={s.input}
          type="text" name="name" required placeholder="Фамилия Имя Отчество" />
        <InputGroup>
          <InputLeftAddon fontSize="14px">
            +380
          </InputLeftAddon>
          <Input focusBorderColor="green.600"
            className={s.input} type="tel" name="phone" required placeholder="Телефон" />
        </InputGroup>
        <input className={s.input} type="email" name="email" required placeholder="E-mail" />
        <input className={s.input} type="text" name="address" placeholder="Адрес доставки" />
        <div className={s.collapse}>
          <Button mb="10px" fontSize="14px" fontWeight="normal"
            onClick={onToggle}>Добавить комментарий</Button>
          <Collapse in={isOpen} animateOpacity>
            <textarea
              className={s.textarea}
              name="comment" placeholder="Комментарий к заказу">
            </textarea>
          </Collapse>
        </div>
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Доставка</legend>
        <label className={s.radio}>
          <input className={s.radioInput}
            type="radio" name="deliveryType" required value="delivery" />
          Доставка
        </label>
        <label className={s.radio}>
          <input className={s.radioInput}
            type="radio" name="deliveryType" required value="pickup" />
          Самовывоз
        </label>
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Оплата</legend>
        <label className={s.radio}>
          <input className={s.radioInput}
            type="radio" name="paymentType" required value="card" />
          Картой при получении
        </label>
        <label className={s.radio}>
          <input className={s.radioInput}
            type="radio" name="paymentType" required value="cash" />
          Наличными при получении
        </label>
      </fieldset>
    </form >
  );
}

export default CartForm;
