import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMassage/ErrorMassage";

import "./charList.scss";

const CharList = (props) => {

  const [list, setList] = useState([]);
  const [newItemLoading, setItemLoading] = useState(false);
  const [offset, setOffset] = useState(7);
  const [charEnded, setCharEnded] = useState(false);

  const {loading, error, getAllCharacters} = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setItemLoading(false) : setItemLoading(true);
    getAllCharacters(offset)
      .then(getLoadingChar)
  };


  const getLoadingChar = (newList) => {
    let ended = false;
    if (newList.length < 9) {
      ended = true;
    }
    setList([...list, ...newList]);
    setItemLoading(false);
    setOffset(offset + 9);
    setCharEnded(ended);
  };

  const getCharItem = (list) => {
    let arr = [];

    list.forEach((element) => {
      arr.push(
        <CharItem
          heroes={element}
          onCharSelected={props.onCharSelected}
          key={element.id}
        />
      );
    });
    return arr;
  };

  let listHEroes = getCharItem(list);

  const errorMessage = error ? (
    <ul className="char__grid2">
      <ErrorMessage />
    </ul>
  ) : null;
  const spinner = loading && !newItemLoading ? (
    <ul className="char__grid2">
      <Spinner />
    </ul>
  ) : null;

  return (
    <div className="char__list">
      <ul className="char__grid">
        {listHEroes}
        {errorMessage}
        {spinner}
      </ul>
      <button
        className="button button__main button__long"
        style={{ display: charEnded ? "none" : "block" }}
        disabled={newItemLoading}
        onClick={() => {
          onRequest(offset);
        }}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

const CharItem = ({ heroes, onCharSelected }) => {
  const { id, name, thumbnail } = heroes;

  let ojFit =
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ? "contain"
      : "cover";

  return (
    <li
      className="char__item"
      key={id}
      onClick={() => onCharSelected(id)}
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === " " || e.key === "Enter") {
          onCharSelected(id);
        }
      }}
    >
      <img src={thumbnail} alt={name} style={{ objectFit: `${ojFit}` }} />
      <div className="char__name">{name}</div>
    </li>
  );
};

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
