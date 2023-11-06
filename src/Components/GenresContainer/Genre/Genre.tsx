import {FC, PropsWithChildren} from 'react';
import {Button} from "@mui/material";

import {IGenre} from "../../../interfaces";
import css from './Genre.module.css'

interface IProps extends PropsWithChildren {
    item:IGenre
}

const Genre:FC<IProps> = ({item}) => {
    const {id:idGenre, name:nameGenre} = item;


    return (
            <Button className={css.genreButt}>{nameGenre}</Button>
    );
};

export {Genre};