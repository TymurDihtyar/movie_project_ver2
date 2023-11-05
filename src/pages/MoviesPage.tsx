import {Outlet, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {moviesService} from "../services";
import {IMovie} from "../interfaces";
import {Movies} from "../Components";

const MoviesPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        moviesService.getAll('1').then(({data}) => {
            setMovies(data.results)
        })
    }, []);


    return (
        <div>
            <Movies movies={movies}/>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};