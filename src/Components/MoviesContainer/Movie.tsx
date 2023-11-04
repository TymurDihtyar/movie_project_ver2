import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces";

interface IProps extends PropsWithChildren {
    item:IMovie
}

const Movie:FC<IProps> = ({item}) => {
    const {id, original_title, poster_path, vote_average} = item;


    return (
        <div>
            <img src="" alt="original_title"/>

        </div>
    );
};

export {Movie};