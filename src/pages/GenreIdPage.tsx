import {useEffect, useState} from "react";
import {IMovie} from "../interfaces";
import {useParams, useSearchParams} from "react-router-dom";

import {genresService} from "../services/genresService";
import {Movies} from "../Components";

const GenreIdPage = () => {
    const {idGenres} = useParams<string>()
    const [ganerMovies, setGanerMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')

    useEffect(() => {
        genresService.getMoviesById(page, idGenres).then(({data})=> setGanerMovies(data.results))
    }, [page, idGenres]);

    console.log(idGenres);

    return (
        <div>
            <Movies movies={ganerMovies} page={page} setQuery={setQuery}/>
        </div>
    );
};

export {GenreIdPage};