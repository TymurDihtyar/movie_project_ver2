import {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../interfaces";
import {Movie} from "./Movie";

interface IProps extends PropsWithChildren {
    movies: IMovie[]
}

const Movies:FC<IProps> = ({movies}) => {
    return (
        <div>
            {movies.map(item => <Movie key={item.id} item={item}/>)}
        </div>
    );
};

export {Movies};