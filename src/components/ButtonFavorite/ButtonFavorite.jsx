import "./ButtonFavorite.scss";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favorites/favorites.slice";

function ButtonFavorite({ className, id }) {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite.favoriteList);

  const isFavorite = favoriteList.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
      console.log("Товар удалён из избранного");
    } else {
      dispatch(addFavorite(id));
      console.log("Товар добавлен в избранное");
    }
  };

  return (
    <button className={isFavorite ?
      `${className} favorite__active` :
      `${className} `} data-id={id} aria-label="Добавить в избранное" onClick={handleFavoriteClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        {/* eslint-disable-next-line max-len */}
        <path d="M8.41325 13.8733C8.18659 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32659 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z"
          stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        </path>
      </svg>
    </button>
  );
}

export default ButtonFavorite;
