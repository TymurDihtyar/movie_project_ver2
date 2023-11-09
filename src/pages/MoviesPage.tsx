import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {moviesService} from "../services";
import {IMovie} from "../interfaces";
import {Movies} from "../Components";
import {useAppContext} from "../hooks";

const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')
    const {setBaseMovies} = useAppContext()

    useEffect(() => {
        moviesService.getAll(page).then(({data}) => {
            setMovies(data.results)
            setBaseMovies(data.results)
        })
    }, [page]);

    return (
        <div>
            <Movies movies={movies} setQuery={setQuery} page={page}/>
        </div>
    );
};

export {MoviesPage};