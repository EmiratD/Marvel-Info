import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMassage/ErrorMassage";

import "./charList.scss";

class CharList extends Component {
  state = {
    list: [],
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.marvelService
      .getAllCharacters()
      .then(this.getLoadingChar)
      .catch(this.getErrorMassege);
  }

  getLoadingChar = (list) => {
    this.setState({ list, loading: false });
  };

  getErrorMassege = () => {
    this.setState({
      Error: true,
    });
  };

  getCharItem = (list) => {
    let arr = [];

    list.forEach((element) => {
      arr.push(
        <CharItem
          heroes={element}
          onCharSelected={this.props.onCharSelected}
          key={element.id}
        />
      );
    });
    return arr;
  };

  render() {
    const { list, loading, error} = this.state;

    let listHEroes = this.getCharItem(list);

    const errorMessage = error ? (<ul className="char__grid2"> <ErrorMessage /> </ul>): null;
    const spinner = loading ? (<ul className="char__grid2"> <Spinner /> </ul>) : null;
    const content = !(loading || error) ? listHEroes : null;

    return (
      <div className="char__list">
        <ul className="char__grid">{content}{errorMessage}{spinner}</ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

const CharItem = ({ heroes, onCharSelected }) => {
  const { id, name, thumbnail } = heroes;

  let ojFit =
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ? "contain"
      : "cover";

  return (
    <li className="char__item" key={id} onClick={() => onCharSelected(id)}>
      <img src={thumbnail} alt={name} style={{ objectFit: `${ojFit}` }}/>
      <div className="char__name">{name}</div>
    </li>
  );
};

export default CharList;
