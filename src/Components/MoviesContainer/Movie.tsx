import {FC, PropsWithChildren} from 'react';
import {Rating} from "@mui/material";

import {IMovie} from "../../interfaces";
import {urls} from "../../constants/urls";
import css from './Movie.module.css'

interface IProps extends PropsWithChildren {
    item:IMovie
}

const Movie:FC<IProps> = ({item}) => {
    const {id, original_title, poster_path, vote_average} = item;

    return (
        <div className={css.movie}>
            <img src={`${urls.poster(poster_path)}`} alt="original_title"/>
            <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} />
            <h3>{original_title}</h3>
        </div>
    );
};

export {Movie};