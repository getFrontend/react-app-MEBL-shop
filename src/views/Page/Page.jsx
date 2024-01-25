import { useEffect, useRef, useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import s from "../Main/Main.module.scss";

export const Page = ({ pathname }) => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);
  const SOME_CONSTANT = 1;

  const handleScroll = (elTopOffset, elHeight) => {
    if (window.scrollY > (elTopOffset + elHeight + SOME_CONSTANT) &&
      (window.scrollY > lastScrollY)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    const header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [lastScrollY]);

  return (
    <>
      <header className={`header${sticky.isSticky ? " sticky" : ""}`} ref={headerRef} >
        <Header />
      </header>
      <main className={sticky.isSticky ? `${s.main} ${s.paddingTop}` : s.main}>
        <Main path={pathname} />
      </main>
      <Footer />
    </>
  );
};


