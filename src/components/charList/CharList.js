import { Component } from 'react';
import MarvelService from '../../services/MarvelService';

import CharItem from '../charItem/CharItem';

import './charList.scss';


class CharList extends Component {
 
    state = {
        list: []
    }; 
    
    marvelService = new MarvelService();

    componentDidMount () {
        this.marvelService.getAllCharacters().then(el => {
            this.setState({list: el})          
        });
    }

    getCharItem = (list) => {
        let arr = []
           list.forEach(element => {
           arr.push(<CharItem name={element.name} thumbnail={element.thumbnail} key={element.id}/>) 
        })
        return arr;
    }


    render() {
        const {list} = this.state;
        
        let listHEroes = this.getCharItem(list)

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {listHEroes}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;