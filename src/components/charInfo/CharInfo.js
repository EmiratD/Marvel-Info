import { useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMassage/ErrorMassage";
import Skeleton from "../skeleton/Skeleton";

import "./charInfo.scss";

const CharInfo = (props) => {
  const [char, setChar] = useState(null);

  const {loading, error, getCharacter} = useMarvelService();


  useEffect(()=>{upDateChar()},[props])

  const upDateChar = useCallback(() => {
    const { charId } = props;
    if (!charId) {
      return;
    }
    getCharacter(charId)
      .then(onCharloaded)
  }, [getCharacter, props]);

  const onCharloaded = (char) => {
    setChar(char)
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

const View = ({char}) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;

  let infoSize = description.length > 164 ? description.substring(0, 164) + "..." : description;
  let info = description === "" ? "if you need more information click on homepage or wiki." : infoSize;
  let ojFit = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? "contain" : "cover";

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={{ objectFit: `${ojFit}` }}/>
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{info}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        { comics.length === 0 ?  (<li className="char__comics-item" key={785412369}>sorry no information</li>) : null}
        {comics.map((item, i) => {
          if(i < 6){
            return (
              <li className="char__comics-item" key={i}>
                {item.name}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
}

export default CharInfo;
