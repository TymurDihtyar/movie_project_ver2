import {FC, PropsWithChildren} from 'react';
import css from "./GenresInMovieInfo.module.css";

interface IProps extends PropsWithChildren {
    item: {id:number, name:string}
}

const GenresInMovieInfo:FC<IProps> = ({item}) => {
    const {id:idGenre, name:nameGenre} = item
    return (
            <p className={css.genre}>{nameGenre}</p>
    );
};

export {GenresInMovieInfo};