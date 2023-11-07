import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {IMovie} from "../interfaces";
import {Movies} from "../Components";
import {genresService} from "../services";

const GenreIdPage = () => {
    const {idGenres} = useParams<string>()
    const [genreMovies, setGenreMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') ? query.get('page') : '1'

    useEffect(() => {
        genresService.getMoviesById(page, idGenres).then(({data}) => setGenreMovies(data.results))
    }, [page, idGenres]);

    return (
        <div>
            <Movies movies={genreMovies} page={page} setQuery={setQuery}/>
        </div>
    );
};

export {GenreIdPage};