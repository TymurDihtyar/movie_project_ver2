import React, {FC, PropsWithChildren} from 'react';
import {ButtonGroup} from "@mui/material";

import {IGenre} from "../../../interfaces";
import {Genre} from "../Genre";
import css from './Genres.module.css'

interface IProps extends PropsWithChildren {
    genres:IGenre[]
}

const Genres:FC<IProps> = ({genres}) => {

    return (
        <ButtonGroup className={css.buttGroup} variant="contained" aria-label=" outlined primary button group" size={"large"} color='warning'>
            {genres && genres.map(item => <Genre key={item.id} item={item}/>)}
        </ButtonGroup>
    );
};

export {Genres};