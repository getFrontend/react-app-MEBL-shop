
import s from "./Order.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getOrder } from "../../store/order/order.slice";
import Loader from "../../components/Loader/Loader";
import { Button, Tooltip } from "@chakra-ui/react";
import TitleMain from "../../components/TitleMain/TitleMain";
import animation from "../../lotties/people.json";
import { useLottie } from "lottie-react";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function Order() {
  const options = {
    autoplay: true,
    animationData: animation,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const { View } = useLottie(options);

  const testData = {
    "id": 250,
    "accessKey": "jvt8re33fznzl9lxo1b9n",
    "name": "Олег Скрипка",
    "address": null,
    "phone": "0508012210",
    "email": "oleg.skripka@gmail.com",
    "deliveryType": "pickup",
    "paymentType": "card",
    "products": [
      {
        "quantity": 1,
        "productId": 17
      },
      {
        "quantity": 1,
        "productId": 31
      }
    ],
    "totalPrice": "305057",
    "comments": null
  };

  const { name, phone, address, email, totalPrice } = testData;

  const dispatch = useDispatch();
  const { orderId } = useParams();
  const {
    orderData,
    loadingFetch, loadingGetOrder,
    // error: errorOrder
  } = useSelector((state) => state.order);

  useEffect(() => {
    if (orderId && !loadingFetch) {
      dispatch(getOrder(orderId));
    }
  }, [dispatch, orderId, loadingFetch]);

  if (!orderData && loadingGetOrder) {
    return <Loader />;
  }

  // if (errorOrder) {
  //   return <ErrorMessage />;
  // }

  return (
    <section className={`${s.order} fade-in`}>
      <Container className={s.container}>
        <div className={s.animation}>
          <>{View}</>
        </div>
        <div className={s.content}>
          <TitleMain title="Благодарим за заказ!" />
          <div className={s.info}>
            <p className={s.number}>№ {orderId}</p>
            <p className={s.fullprice}>{parseInt(totalPrice).toLocaleString()}
              &nbsp;<span className={s.currency}>₴</span></p>
          </div>
          <h4 className={s.subtitle}>Данные доставки</h4>
          <table className={s.table}>
            <tbody>
              <tr className={s.table__row}>
                <td className={s.table__field}>Получатель</td>
                <td className={s.table__value}>{name}</td>
              </tr>
              <tr className={s.table__row}>
                <td className={s.table__field}>Телефон</td>
                <td className={s.table__value}>{phone}</td>
              </tr>
              <tr className={s.table__row}>
                <td className={s.table__field}>E-mail</td>
                <td className={s.table__value}>{email}</td>
              </tr>
              <tr className={s.table__row}>
                <td className={s.table__field}>Адрес доставки</td>
                <td className={s.table__value}>{address ? address : ""}</td>
              </tr>
              <tr className={s.table__row}>
                <td className={s.table__field}>Способ оплаты</td>
                <td className={s.table__value}>Картой при получении</td>
              </tr>
              <tr className={s.table__row}>
                <td className={s.table__field}>Способ получения</td>
                <td className={s.table__value}>Самовывоз</td>
              </tr>
            </tbody>
          </table>
          <Tooltip placement='auto' label='Нажмите, чтобы вернуться на главную страницу'
            hasArrow arrowSize={15}
            py='3' bg='green.100' color='black'
            fontSize='md' fontWeight='normal' textAlign='center'>
            <Button
              className={s.button}
              variant='outline'
              colorScheme='green'
              fontWeight='normal'
              size={{ xs: "sm", sm: "sm", md: "md", lg: "md" }}>
              <Link to="/">На главную</Link>
            </Button>
          </Tooltip>
        </div>
      </Container>
    </section>
  );
}

export default Order;
