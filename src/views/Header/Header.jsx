import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Container } from "../Container/Container";
import "./Header.scss";

export const Header = () => (
  <Container className="header__container">
    <Logo className="header__logo" />
    <SearchForm className="header__search" />
    <Navigation className="header__navigation" />
  </Container>
);
