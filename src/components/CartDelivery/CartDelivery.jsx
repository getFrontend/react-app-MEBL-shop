import s from "./CartDelivery.module.scss";
import { useLottie } from "lottie-react";
import deliveryAnimation from "../../lotties/delivery.json";
import {
  Button,
  Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Tooltip, useDisclosure
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

function CartDelivery({ className, totalPrice }) {
  const deliveryPrice = 1000;
  const FREE_DELIVERY = 0;
  const MAX_TOTAL_PRICE = 9999;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const options = {
    autoplay: true,
    animationData: deliveryAnimation,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
    style: {
      height: 180,
    }
  };

  const { View } = useLottie(options);

  return (
    <>
      <div className={className ? `${s.delivery} ${className}` : `${s.delivery}`}>
        <p className={s.deliveryPrice}>
          Доставка: {totalPrice && (totalPrice > MAX_TOTAL_PRICE) ? FREE_DELIVERY : deliveryPrice}
          &nbsp;₴
        </p>
        <Tooltip placement='auto' label='Нажмите, чтобы посмотреть условия доставки'
          hasArrow arrowSize={15}
          py='3' bg='green.100' color='black'
          fontSize='md' fontWeight='normal' textAlign='center'>
          <Button className={s.button}
            leftIcon={<InfoOutlineIcon />}
            onClick={onOpen}
            variant='outline'
            colorScheme='green'
            fontWeight='normal'
            size={{ xs: "sm", sm: "sm", md: "md", lg: "md" }}>
            Условия доставки
          </Button>
        </Tooltip>
        <Drawer
          onClose={onClose} isOpen={isOpen} size={{ xs: "full", lg: "lg" }}
          placement='right' allowPinchZoom='true' closeOnOverlayClick='true' closeOnEsc='true'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>Условия доставки</DrawerHeader>
            <DrawerBody className={s.content}>
              <p>Мебельный магазин MEBL осуществляет доставку мебели по всей Украине. Мы работаем с ведущими транспортными компаниями: Новая Почта, Мист-Экспресс, Cat, что позволяет нам гарантировать оперативную и безопасную доставку ваших заказов.</p>
              <h4>Стандартная стоимость доставки</h4>
              <p>Стандартная стоимость доставки мебели по Украине составляет <i>1000 гривен</i>. Стоимость доставки рассчитывается исходя из габаритов и веса мебели, а также расстояния от нашего склада до вашего населенного пункта</p>
              <h4>Бесплатная доставка</h4>
              <p>Доставка мебели бесплатна при сумме заказа более 9999 гривен</p>
              <h4>Сроки доставки</h4>
              <p>Сроки доставки мебели зависят от удаленности вашего населенного пункта и загруженности транспортных компаний. В среднем, доставка мебели по Украине занимает от 1 до 5 дней.</p>
              <h4>Варианты доставки</h4>
              <p>Мы предлагаем следующие варианты доставки мебели:</p>
              <ul>
                <li>Доставка на склад транспортной компании.</li>
                <li>Доставка по адресу курьером.</li>
                <li>Доставка и сборка мебели специалистом нашей компании (только Киев).</li>
                <li>Самовывоз со склада.</li>
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <div className={s.animation}>
          <>{View}</>
        </div>
      </div >
    </>
  );
}

export default CartDelivery;
