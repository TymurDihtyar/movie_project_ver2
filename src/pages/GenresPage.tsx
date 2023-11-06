import {useEffect, useState} from "react";

import {genresService} from "../services/genresService";
import {IGenre} from "../interfaces";
import {Genres} from "../Components/GenresContainer";
import {Outlet} from "react-router-dom";

const GenresPage = () => {
    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(() => {
        genresService.getAll().then(({data:{genres}}) => setGenres(genres))
    }, []);


    return (
        <div>
            <Genres genres={genres}/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};