import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.scss";

function SearchForm(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchQUery = event.target.search.value;

    if (searchQUery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQUery)}`);
      event.target.reset();
    }
  };

  return (
    <form className={`${styles["form"]} ${props.className}`} method="get" onSubmit={handleSubmit}>
      <input className={styles["input"]}
        type="search"
        name="search"
        placeholder="Введите запрос"
        autoComplete="off" />
      <button className={styles["search-button"]} type="submit" aria-label="Поиск">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* eslint-disable-next-line max-len */}
          <path d="M7.66634 13.9999C11.1641 13.9999 13.9997 11.1644 13.9997 7.66659C13.9997 4.16878 11.1641 1.33325 7.66634 1.33325C4.16854 1.33325 1.33301 4.16878 1.33301 7.66659C1.33301 11.1644 4.16854 13.9999 7.66634 13.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          {/* eslint-disable-next-line max-len */}
          <path d="M14.6663 14.6666L13.333 13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
    </form >
  );
}

export default SearchForm;
