import {FC, PropsWithChildren} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {Movie} from "../Movie";
import css from './Movies.module.css'

interface IProps extends PropsWithChildren {
    movies: IMovie[]
    prevNext: { prev: string; next: string }
    setQuery: SetURLSearchParams
    page: string
}

const Movies: FC<IProps> = ({movies, prevNext, setQuery, page}) => {

    function prevHandler() {
        const prevPage = +page - 1;
        setQuery({page: prevPage.toString()});
    }

    function nextHandler() {
        const nextPage = +page + 1;
        setQuery({page: nextPage.toString()});
    }

    console.log(prevNext.prev);
    console.log(prevNext.next);

    return (
        <div className={css.allMovies}>
            {movies.map(item => <Movie key={item.id} item={item}/>)}
            <div className={css.butt}>
                <button disabled={!prevNext.prev} onClick={prevHandler}>prev</button>
                <p>{`${page} from ${prevNext.next}`}</p>
                <button disabled={!prevNext.next} onClick={nextHandler}>next</button>
            </div>
        </div>
    );
};

export {Movies};