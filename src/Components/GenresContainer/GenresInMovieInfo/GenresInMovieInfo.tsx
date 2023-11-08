import {FC, PropsWithChildren} from 'react';
import css from "./GenresInMovieInfo.module.css";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    item: {id:number, name:string}
}

const GenresInMovieInfo:FC<IProps> = ({item}) => {
    const {id:idGenres, name:nameGenre} = item
    const navigate = useNavigate()

    return (
            <p className={css.genre} onClick={()=> navigate(`/genres/${idGenres}`)}>{nameGenre}</p>
    );
};

export {GenresInMovieInfo};