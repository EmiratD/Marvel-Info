import React from "react";

const CharItem = ({name, thumbnail}) => {
    // const {thumbnail, name} = object;

    return (
      <li className="char__item">
        <img src={thumbnail} alt="abyss" />
        <div className="char__name">{name}</div>
      </li>
    );
}

export default CharItem;