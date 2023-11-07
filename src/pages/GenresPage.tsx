import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {IGenre} from "../interfaces";
import {Genres} from "../Components/GenresContainer";
import {genresService} from "../services";

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