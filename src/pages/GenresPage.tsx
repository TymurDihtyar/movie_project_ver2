import {useEffect, useState} from "react";

import {genresService} from "../services/genresService";
import {IGenre} from "../interfaces";
import {Genres} from "../Components/GenresContainer";

const GenresPage = () => {
    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(() => {
        genresService.getAll().then(({data:{genres}}) => setGenres(genres))
    }, []);


    return (
        <div>
            <Genres genres={genres}/>
        </div>
    );
};

export {GenresPage};