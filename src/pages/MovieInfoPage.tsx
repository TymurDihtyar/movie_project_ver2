import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {moviesService, characterService} from "../services";
import {IOneMove, ICast} from "../interfaces";
import {MovieInfo} from "../Components";

const MovieInfoPage = () => {
    const {id} = useParams<string>()
    const [movie, setMovie] = useState<IOneMove>(null)
    const [characters, setCharacters] = useState<ICast[]>([])

    useEffect(() => {
        moviesService.getById(id).then(({data}) => setMovie(data))
        characterService.getById(id).then(({data: {cast}}) => setCharacters(cast))
    }, [id]);

    return (
        <div>
            {movie && <MovieInfo movie={movie} characters={characters}/>}
        </div>
    );
};

export {MovieInfoPage};