import {FC, PropsWithChildren} from 'react';
import {SetURLSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

import {IMovie} from "../../../interfaces";
import {Movie} from "../Movie";
import css from './Movies.module.css'


interface IProps extends PropsWithChildren {
    movies: IMovie[]
    setQuery: SetURLSearchParams
    page: string
}

const Movies: FC<IProps> = ({movies, setQuery, page}) => {

    const handlerPageChange = (event: any, page: number): void => {
        setQuery({page: `${page}`})
    }

    return (
        <>
            <div className={css.allMovies}>
                {movies.map(item => <Movie key={item.id} item={item}/>)}
            </div>
            <div className={css.paginator}>
                <Pagination page={+page} count={500}
                            variant="outlined" color="standard"
                            shape="rounded" size="large"
                            onChange={handlerPageChange}/>
            </div>
        </>
    );
};

export {Movies};