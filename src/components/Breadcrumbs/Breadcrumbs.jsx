import s from "./Breadcrumbs.module.scss";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";

function Breadcrumbs() {
  const { data, loading } = useSelector((state) => state.product);
  const { pathname } = useLocation();
  const [searchParam] = useSearchParams();
  const breadcrumbs = [{ name: "Главная", link: "/" }];

  if (pathname === "/category") {
    const category = searchParam.get("category");
    breadcrumbs.push({
      name: category,
      link: "",
    });
  }

  if (pathname.split("/")[1] === "product") {
    breadcrumbs.push(
      {
        name: data?.category,
        link: `/category?category=${data?.category}`,
      },
      {
        name: data?.name,
        link: "",
      },
    );
  }

  if (pathname === "/favorite") {
    breadcrumbs.push({
      name: "Избранное",
      link: "",
    });
  }

  if (pathname === "/cart") {
    breadcrumbs.push({
      name: "Корзина",
      link: "",
    });
  }

  if (pathname === "/search") {
    const search = searchParam.get("q");
    breadcrumbs.push({
      name: `Поиск по запросу: ${search}`,
      link: `${pathname}`,
    });
  }

  return <>
    {!loading ? (
      <div className={s.breadcrumb}>
        <Container>
          <ul className={s.list}>
            {breadcrumbs?.map((item, index) => (
              <li key={`bc${index}`} className={s.item}>
                <Link
                  className={
                    breadcrumbs.length - 1 !== index ?
                      s.link :
                      `${s.link} ${s.disabled}`
                  }
                  to={item?.link}>
                  {item?.name}
                </Link>
                <span className={s.separator}>➡</span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    ) : <div className={s.loading}></div>}
  </>;
}

export default Breadcrumbs;
