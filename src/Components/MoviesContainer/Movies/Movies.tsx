import {ChangeEvent, FC, PropsWithChildren} from 'react';
import {SetURLSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

import {IMovie} from "../../../interfaces";
import {Movie} from "../Movie";
import {useAppSelector} from "../../../hooks";
import css from './Movies.module.css'

interface IProps extends PropsWithChildren {
    movies: IMovie[]
    setQuery: SetURLSearchParams
    page: string
    maxPage: number
}

const Movies: FC<IProps> = ({movies, setQuery, page, maxPage}) => {
    const {theme} = useAppSelector(state => state.theme)

    const handlerPageChange = (event: ChangeEvent<unknown>, page: number): void => {
        setQuery({page: `${page}`})
    }

    return (
        <>
            <div className={`${theme ? css.dark : css.light} ${css.allMovies}`}>
                {movies.map(item => <Movie key={item.id} item={item}/>)}
            </div>
            <div className={css.paginator}>
                <Pagination page={+page} count={(maxPage > 500) ? 500 : maxPage} variant="outlined" color="standard"
                            shape="rounded" size="large" onChange={handlerPageChange}/>
            </div>
        </>
    );
};

export {Movies};