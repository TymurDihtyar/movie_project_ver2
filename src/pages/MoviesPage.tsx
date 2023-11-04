import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {moviesService} from "../services/moviesService";

const MoviesPage = () => {
    const [movies, setMovies] = useState<any>([])
    // const [query, setQuery] = useSearchParams<any>({page: '1'});

    useEffect(() => {
        moviesService.getAll('1').then(({data}: any) => {
            setMovies(data)
            console.log(data);
        })
    }, []);




    return (
        <div>
            MoviesPage
            <Outlet/>
        </div>
    );
};

export {MoviesPage};