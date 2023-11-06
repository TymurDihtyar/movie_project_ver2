import {FC, PropsWithChildren} from 'react';
import {Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import {ICast, IOneMove} from "../../../interfaces";
import {urls} from "../../../constants/urls";
import {GenresInMovieInfo} from "../../GenresContainer/GenresInMovieInfo";
import {CharactersInMovieInfo} from "../../CharactersContainer";
import css from './MovieInfo.module.css'

interface IProps extends PropsWithChildren {
    movie: IOneMove
    characters: ICast[]
}

const MovieInfo: FC<IProps> = ({movie, characters}) => {
    const {poster_path, original_title, overview, vote_average, genres, release_date, runtime} = movie

    return (
        <div className={css.all}>
            <div className={css.info}>
                <div>
                    <img src={`${urls.poster(poster_path)}`} alt="original_title"/>
                </div>
                <div className={css.movieInfo}>
                    <h3>{original_title}</h3>
                    <div className={css.genresBox}>
                        <h4>Genres:</h4>
                        <div className={css.genresBoxParagraf}>
                            {genres.map(item => <GenresInMovieInfo key={item.id} item={item}/>)}
                        </div>
                    </div>
                    <div className={css.rating}>
                        <h4>Rating:</h4>
                        <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} size="large"
                                emptyIcon={<StarIcon style={{opacity: 1, color: 'gray'}} fontSize="inherit"/>}
                                readOnly/>
                    </div>
                    <p>{overview}</p>
                    <p>Release date: {release_date}</p>
                    <p>Runtime: {runtime} min</p>
                </div>
            </div>
            <h4>Main Cast:</h4>
            <div className={css.charactersBox}>
                {characters.map(item => <CharactersInMovieInfo key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

export {MovieInfo};