import { Container } from "../Container/Container";
import s from "./Hero.module.scss";
import Lottie, { useLottie } from "lottie-react";
import meblHero from "../../lotties/mebl-hero.json";
import scrollBtn from "../../lotties/scroll-btn.json";

function Hero() {
  const optionsHero = {
    autoplay: true,
    animationData: meblHero,
    loop: false,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const { View } = useLottie(optionsHero);

  return (
    <section className={`${s.hero} fade-in`}>
      <Container className={s.container}>
        <div className={s.animation}>
          <>{View}</>
        </div>
        <div className={s.content}>
          <h1 className={s.title}>Почему в <span className={s.mebl}>MEBL?</span></h1>
          <div className={s.slogan}>У нас находят мебель,<br />
            которую хочется купить!</div>
        </div>
        <button className={s.scrollTo}>
          <Lottie
            animationData={scrollBtn} loop={true}
          />
        </button>
      </Container>
    </section>
  );
}

export default Hero;
