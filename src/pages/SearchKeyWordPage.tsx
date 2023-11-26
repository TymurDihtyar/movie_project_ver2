import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {Movies} from "../Components";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {moviesActions} from "../redux/slices/moviesSlice";

const SearchKeyWordPage = () => {
    let {searchWord} = useParams<string>()
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') ? query.get('page') : '1'

    const {movies, moviesByKeyWord, total_pages} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMoviesByKeyWord({page, query: searchWord}))
    }, [page, searchWord]);

    return (
        <div>
            <Movies movies={(searchWord === ':searchWord') ? movies : moviesByKeyWord} page={page} setQuery={setQuery}
                    maxPage={total_pages}/>
        </div>
    );
};

export {SearchKeyWordPage};