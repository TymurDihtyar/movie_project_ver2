import {ButtonGroup} from "@mui/material";

import {Genre} from "../Genre";
import css from './Genres.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {moviesActions} from "../../../redux/slices";


const Genres = () => {
    const {genres} = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch();
    const resetPage = () => {
        dispatch(moviesActions.setPage({page:'1'}))
    }

    return (
        <ButtonGroup onClick={resetPage} className={css.buttGroup} variant="contained" aria-label=" outlined primary button group" size={"large"} color='warning'>
            {genres && genres.map(item => <Genre key={item.id} item={item}/>)}
        </ButtonGroup>
    );
};

export {Genres};