import {FC, PropsWithChildren, useState} from 'react';
import {IMovie} from "../../interfaces";
import {urls} from "../../constants/urls";

interface IProps extends PropsWithChildren {
    item:IMovie
}

const Movie:FC<IProps> = ({item}) => {
    const {id, original_title, poster_path, vote_average} = item;

    return (
        <div>
            <img src={`${urls.poster(poster_path)}`} alt="original_title"/>

            <h3>{original_title}</h3>
        </div>
    );
};

export {Movie};