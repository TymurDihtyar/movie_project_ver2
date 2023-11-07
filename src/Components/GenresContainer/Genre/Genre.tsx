import {FC, PropsWithChildren} from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../../interfaces";
import css from './Genre.module.css'

interface IProps extends PropsWithChildren {
    item: IGenre
}

const Genre: FC<IProps> = ({item}) => {
    const {id:idGenres, name: nameGenre} = item;
    const navigate = useNavigate()

    return (
        <Button style={{fontFamily: 'Bebas Neue, sans-serif', fontSize:'18px'}} className={css.butt} onClick={() => navigate(`${idGenres}`)}>{nameGenre}</Button>
    );
};

export {Genre};