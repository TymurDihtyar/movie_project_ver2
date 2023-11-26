import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {MovieInfo} from "../Components";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {moviesActions} from "../redux/slices/moviesSlice";

const MovieInfoPage = () => {
    const {id} = useParams<string>()
    const {movieById, characters} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMovieById({id}))
        dispatch(moviesActions.getCharacters({id}))
    }, [id]);

    return (
        <div>
            {movieById && <MovieInfo movie={movieById} characters={characters}/>}
        </div>
    );
};

export {MovieInfoPage};