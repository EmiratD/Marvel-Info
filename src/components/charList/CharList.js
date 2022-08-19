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
    newItemLoading: false,
    offset: 1544,
    charEnded: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelService
        .getAllCharacters(offset)
        .then(this.getLoadingChar)
        .catch(this.getErrorMassege);
  }

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    })
  }

  getLoadingChar = (newList) => {
    let ended = false;
    if (newList.length < 9){
      ended = true;
    }

    this.setState(({list, offset}) => ({
      list: [...list, ...newList],
      loading: false ,
      newItemLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }));
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
    const { list, loading, error,offset, newItemLoading, charEnded} = this.state;

    let listHEroes = this.getCharItem(list);

    const errorMessage = error ? (<ul className="char__grid2"> <ErrorMessage /> </ul>): null;
    const spinner = loading ? (<ul className="char__grid2"> <Spinner /> </ul>) : null;
    const content = !(loading || error) ? listHEroes : null;

    return (
      <div className="char__list">
        <ul className="char__grid">{content}{errorMessage}{spinner}</ul>
        <button 
          className="button button__main button__long"
          style={{'display': charEnded ? 'none' : 'block'}}
          disabled={newItemLoading}
          onClick={() => {this.onRequest(offset)}}>
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
