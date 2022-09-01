import { useState, useEffect } from "react";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMassage/ErrorMassage";

import "./comicsList.scss";

const ComicsList = () => {
  const [list, setList] = useState([]);
  const [newItemLoading, setItemLoading] = useState(false);
  const [offset, setOffset] = useState(7);
  const [charEnded, setCharEnded] = useState(false);

  const { loading, error, getAllComics } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setItemLoading(false) : setItemLoading(true);
    getAllComics(offset).then(getLoadingChar);
  };

  const getLoadingChar = (newList) => {
    let ended = false;
    if (newList.length < 8) {
      ended = true;
    }
    setList([...list, ...newList]);
    setItemLoading(false);
    setOffset(offset + 8);
    setCharEnded(ended);
  };

  const Comics = ({comics}) => {
    const { thumbnail, price, title } = comics;

    return (
      <li className="comics__item">
        <a href="#">
          <img
            src={thumbnail}
            alt="title"
            className="comics__item-img"
          />
          <div className="comics__item-name">{title}</div>
          <div className="comics__item-price">{price}</div>
        </a>
      </li>
    );
  };

  const renderAllComics = (list) => {
    let arr = [];

    list.forEach((element) => {
      arr.push(<Comics comics={element} key={element.id} />);
    });

    return arr;
  };

  const comicsAll = renderAllComics(list);

  return (
    <div className="comics__list">
      <ul className="comics__grid">{comicsAll}</ul>
      <button onClick={onRequest} className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
