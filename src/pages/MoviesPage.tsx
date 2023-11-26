import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {Movies} from "../Components";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {moviesActions} from "../redux/slices/moviesSlice";

const MoviesPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')
    const dispatch = useAppDispatch();
    const {movies, total_pages} = useAppSelector(state => state.movies)

    useEffect(() => {
        dispatch(moviesActions.getMovies({page}))
    }, [page, dispatch]);

    return (
        <div>
            <Movies movies={movies} setQuery={setQuery} page={page} maxPage={total_pages}/>
        </div>
    );
};

export {MoviesPage};