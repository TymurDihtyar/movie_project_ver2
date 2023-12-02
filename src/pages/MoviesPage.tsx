import {useEffect} from "react";

import {Movies} from "../Components";
import {useAppDispatch, useAppSelector} from "../hooks";
import {moviesActions} from "../redux/slices";
import {useSearchParams} from "react-router-dom";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const {page, movies} = useAppSelector(state => state.movies)
    const [, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery({page})
    }, []);

    useEffect(() => {
        page && dispatch(moviesActions.getMovies({page}))
    }, [page, dispatch]);

    return (
        <div>
            <Movies movies={movies}/>
        </div>
    );
};

export {MoviesPage};