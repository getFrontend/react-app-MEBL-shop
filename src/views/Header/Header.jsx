import { useEffect, useRef, useState } from "react";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Container } from "../Container/Container";
import "./Header.scss";

export const Header = () => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);

  const handleScroll = (elTopOffset, elHeight) => {
    if (window.scrollY > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
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
  }, []);

  return (
    <header className={`header${sticky.isSticky ? " sticky" : ""}`} ref={headerRef}>
      <Container className="header__container">
        <Logo className="header__logo" />
        <SearchForm className="header__search" />
        <Navigation className="header__navigation" />
      </Container>
    </header>
  );
};
