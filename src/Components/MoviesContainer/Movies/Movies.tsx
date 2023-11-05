import {FC, PropsWithChildren} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {Movie} from "../Movie";
import css from './Movies.module.css'

interface IProps extends PropsWithChildren {
    movies: IMovie[]
    setQuery: SetURLSearchParams
    page: string
}

const Movies: FC<IProps> = ({movies, setQuery, page}) => {

    function prevHandler() {
        const prevPage = +page - 1;
        setQuery({page: prevPage.toString()});
    }

    function nextHandler() {
        const nextPage = +page + 1;
        setQuery({page: nextPage.toString()});
    }

    return (
        <div className={css.allMovies}>
            {movies.map(item => <Movie key={item.id} item={item}/>)}
            <div className={css.butt}>
                <button disabled={page==='1'} onClick={prevHandler}>prev</button>
                <p>{`${page} from 500`}</p>
                <button disabled={page==='500'} onClick={nextHandler}>next</button>
            </div>
        </div>
    );
};

export {Movies};