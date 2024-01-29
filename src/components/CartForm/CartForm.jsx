import {
  Button, Collapse, Input, InputGroup, InputLeftAddon,
  Tooltip,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import s from "./CartForm.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchOrder } from "../../store/order/order.slice";
import { useEffect, useState } from "react";
// import { fetchCart } from "../../store/cart/cart.slice";

function CartForm() {
  const { isOpen, onToggle } = useDisclosure();
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderStatus = useSelector((state) => state.order);

  useEffect(() => {
    if (orderStatus.success) {
      navigate(`/order/${orderStatus.orderId}`);
    }
  }, [orderStatus, navigate]);

  const toast = useToast();
  const orderToast = () => {
    toast({
      description: "Ваш заказ добавлен в обработку",
      position: "top",
      status: "success",
      variant: "solid",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = Array.from(event.target.elements)
      .filter((input) => input.name)
      .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});
    orderToast();
    dispatch(fetchOrder(data));
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form onSubmit={handleSubmit}
      className={s.form} id="order" method="POST">
      <h3 className={s.subtitle}>Данные для доставки</h3>
      <fieldset className={s.fieldsetInput}>
        <input className={s.input}
          type="text" name="name" required placeholder="Фамилия Имя Отчество" />
        <InputGroup>
          <InputLeftAddon fontSize="14px">
            +38
          </InputLeftAddon>
          <Input focusBorderColor="green.600"
            className={s.input} type="tel" name="phone" required placeholder="Телефон" />
        </InputGroup>
        <input className={s.input} type="email" name="email" required placeholder="E-mail" />
        <input className={s.input} type="text" name="address" placeholder="Адрес доставки" />
        <div className={s.collapse}>
          <Tooltip label='Нажмите, чтобы добавить комментарий к заказу'
            hasArrow arrowSize={15}
            py='3' bg='green.100' color='black'
            fontSize='md' fontWeight='normal' textAlign='center'>
            <Button mb="10px" fontSize="14px" fontWeight="normal"
              onClick={onToggle}>Добавить комментарий</Button>
          </Tooltip>
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
            onChange={handleCheck}
            checked={isChecked}
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
            onChange={handleCheck}
            checked={isChecked}
            type="radio" name="paymentType" required value="cash" />
          Наличными при получении
        </label>
      </fieldset>
    </form >
  );
}

export default CartForm;
