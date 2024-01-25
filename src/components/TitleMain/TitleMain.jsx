import s from "./TitleMain.module.scss";

function TitleMain({ className, title }) {
  return (
    <h1 className={className ? `${className}` : s.title}>
      {title}
    </h1 >
  );
}

export default TitleMain;
