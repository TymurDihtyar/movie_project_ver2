import {FC, PropsWithChildren} from 'react';
import css from "./GenresInMovieInfo.module.css";

interface IProps extends PropsWithChildren {
    item: {id:number, name:string}
}

const GenresInMovieInfo:FC<IProps> = ({item}) => {
    const {id:idGenre, name:nameGenre} = item
    return (
        <div>
            <p className={css.genre}>{nameGenre}</p>
        </div>
    );
};

export {GenresInMovieInfo};