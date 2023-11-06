import {FC, PropsWithChildren} from 'react';
import {Rating} from "@mui/material";

import {IMovie} from "../../../interfaces";
import {urls} from "../../../constants/urls";
import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    item: IMovie
}

const Movie: FC<IProps> = ({item}) => {
    const {id, original_title, poster_path, vote_average} = item;
    const navigate = useNavigate()

    return (
        <div className={css.movie}>
            <img onClick={() => navigate(`/movies/${id}`)} src={`${urls.poster(poster_path)}`} alt="original_title"/>
            <Rating name="customized-10" defaultValue={vote_average} precision={0.1} max={10} readOnly/>
            <h3>{original_title}</h3>
        </div>
    );
};

export {Movie};