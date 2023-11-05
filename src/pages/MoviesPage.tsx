import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {moviesService} from "../services";
import {IMovie} from "../interfaces";
import {Movies} from "../Components";

const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState<{ prev: string; next: string }>({prev: null, next: null})
    const page = query.get('page')

    useEffect(() => {
        moviesService.getAll(page).then(({data}) => {
            setMovies(data.results)
            setPrevNext({prev: `${data.page}`, next: `${data.total_pages}`})
        })
    }, [page]);

    return (
        <div>
            <Movies movies={movies} setQuery={setQuery} prevNext={prevNext} page={page}/>
        </div>
    );
};

export {MoviesPage};