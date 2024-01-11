import Contacts from "../../components/Contacts/Contacts";
import Logo from "../../components/Logo/Logo";
import { Container } from "../Container/Container";
import "./Footer.scss";

export const Footer = () => (
  <footer className="footer">
    <Container className="footer__container">
      <Logo className="footer__logo" />
      <Contacts className="footer__contacts" />

      <ul className="footer__developer-list">
        <li className="footer__developer-item">
          Developer:
          <a href="https://t.me/Vietn_am" className="footer__developer-link" target="_blank" rel="noreferrer"> Sergey Up</a>
        </li>
      </ul>

      <p className="footer__copyright">© MEBL, 2024</p>
    </Container>
  </footer>
);
