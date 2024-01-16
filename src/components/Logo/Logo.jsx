import { Link } from "react-router-dom";
import siteLogo from "/images/logo.png";

function Logo(props) {
  return (
    <Link to="/">
      <img src={siteLogo} className={props.className} alt="MEBL logo image" />
    </Link>
  );
}

export default Logo;
