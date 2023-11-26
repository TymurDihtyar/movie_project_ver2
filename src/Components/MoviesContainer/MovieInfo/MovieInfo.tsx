import {Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import {urls} from "../../../constants";
import {GenresInMovieInfo} from "../../GenresContainer";
import {CharactersInMovieInfo} from "../../CharactersContainer";
import {useAppSelector} from "../../../hooks";
import css from './MovieInfo.module.css'

const MovieInfo= () => {
    const {movieById, characters} = useAppSelector(state => state.movies)
    const {poster_path, original_title, overview, vote_average, genres, release_date, runtime} = movieById

    return (
        <div className={css.all}>
            <div className={css.info}>
                <div>
                    {
                        poster_path ?
                            <img src={`${urls.poster(poster_path)}`} alt={original_title}/>
                            :
                            <img src='https://w7.pngwing.com/pngs/130/516/png-transparent-brown-hair-anime-blond-amagi-brilliant-park-fiction-anime-cg-artwork-black-hair-hand-thumbnail.png'
                                 alt={original_title}/>
                    }
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
                        <h4>Rating: {Math.round(vote_average*10)/10}</h4>
                        <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} size="large"
                                emptyIcon={<StarIcon style={{opacity: 1, color: 'gray'}} fontSize="inherit"/>}
                                readOnly/>
                    </div>
                    <p>{overview}</p>
                    <p>Release date: {release_date}</p>
                    <p>Runtime: {runtime} min</p>
                </div>
            </div>
            <div>
                <h4>Main Cast:</h4>
                <div className={css.charactersBox}>
                    {characters.map(item => <CharactersInMovieInfo key={item.id} item={item}/>)}
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};