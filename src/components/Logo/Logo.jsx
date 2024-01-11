import siteLogo from "/images/logo.png";

function Logo(props) {
  return (
    <a href="/">
      <img src={siteLogo} className={props.className} alt="MEBL logo image" />
    </a>
  );
}

export default Logo;
