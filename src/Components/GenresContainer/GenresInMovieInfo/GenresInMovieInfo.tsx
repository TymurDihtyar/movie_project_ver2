import {FC, PropsWithChildren} from 'react';
import css from "./GenresInMovieInfo.module.css";

interface IProps extends PropsWithChildren {
    item: {id:number, name:string}
}

const GenresInMovieInfo:FC<IProps> = ({item}) => {
    const {id:idGenre, name:nameGenre} = item
    return (
            <h4 className={css.genre}>{nameGenre}</h4>
    );
};

export {GenresInMovieInfo};