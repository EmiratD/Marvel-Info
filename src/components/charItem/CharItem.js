import React from "react";

const CharItem = ({name, thumbnail, kay}) => {

    return (
      <li className="char__item" kay={kay}>
        <img src={thumbnail} alt="abyss" />
        <div className="char__name">{name}</div>
      </li>
    );
}

export default CharItem;