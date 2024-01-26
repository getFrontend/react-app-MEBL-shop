import s from "./TitleMain.module.scss";

function TitleMain({ className, title }) {
  return (
    <h2 className={className ? `${className}` : s.title}>
      {title}
    </h2>
  );
}

export default TitleMain;
