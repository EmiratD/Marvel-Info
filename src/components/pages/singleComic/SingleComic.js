import { useState, useEffect, useCallback} from "react";
import { useParams, Link } from "react-router-dom";

import useMarvelService from "../../../services/MarvelService";

import Spinner from "../../spinner/Spinner";
import ErrorMessage from "../../errorMassage/ErrorMassage";

import './singleComic.scss';

const SingleComic = () => {

    const {comicId} = useParams()

    const [comic, setComic] = useState(null);

    const {loading, error, getComic, clearError} = useMarvelService();


    useEffect(()=>{upDateChar()},[comicId])
  
    const upDateChar = useCallback(() => {
      getComic(comicId)
        .then(onComicloaded)
    });
  
    const onComicloaded = (comic) => {
      setComic(comic)
    };

    const View = ({comic}) => {

        const {title, description, thumbnail, pageCount, language, price} = comic;
    
        return(
            <div className="single-comic">
                <img src={thumbnail} alt={title} className="single-comic__img"/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{description}</p>
                    <p className="single-comic__descr">{pageCount}</p>
                    <p className="single-comic__descr">Language: {language}</p>
                    <div className="single-comic__price">{price}</div>
                </div>
                <Link to="/comics" className="single-comic__back">Back to all</Link>
            </div>
        )
    }
  
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

export default SingleComic;