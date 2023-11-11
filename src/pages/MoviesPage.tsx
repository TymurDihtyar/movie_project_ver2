import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {moviesService} from "../services";
import {IMovie} from "../interfaces";
import {Movies} from "../Components";

const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')
    const [maxPage, setMaxPage] = useState<number>(500)

    useEffect(() => {
        moviesService.getAll(page).then(({data}) => {
            setMovies(data.results)
            setMaxPage(data.total_pages)
        })
    }, [page]);

    return (
        <div>
            <Movies movies={movies} setQuery={setQuery} page={page} maxPage={maxPage}/>
        </div>
    );
};

export {MoviesPage};