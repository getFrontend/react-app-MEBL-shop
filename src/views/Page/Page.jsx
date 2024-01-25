import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export const Page = ({ pathname }) => (
  <>
    <Header />
    <Main path={pathname} />
    <Footer />
  </>
);

