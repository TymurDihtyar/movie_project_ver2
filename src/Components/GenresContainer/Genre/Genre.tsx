import {FC, PropsWithChildren} from 'react';
import {Button} from "@mui/material";

import {IGenre} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    item: IGenre
}

const Genre: FC<IProps> = ({item}) => {
    const {id:idGenres, name: nameGenre} = item;
    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate(`${idGenres}`)}>{nameGenre}</Button>
    );
};

export {Genre};