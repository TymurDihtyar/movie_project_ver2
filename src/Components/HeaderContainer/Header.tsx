import {NavLink} from "react-router-dom";

import {Switcher} from "./Switcher";
import {useAppDispatch, useAppSelector} from "../../hooks";
import css from './Header.module.css'
import {moviesActions} from "../../redux/slices";

const Header = () => {
    const {theme} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch();
    // const resetPage = () => {
    //     dispatch(moviesActions.setPage({page:'1'}))
    // }

    return (
        <div className={`${theme ? css.dark : css.light} ${css.header}`}>
            <div className={css.logo}>The MovieDB</div>
                <div>
                    <NavLink to={'movies'}>Movies</NavLink>
                    <NavLink to={'genres/:idGenres'}>Genres</NavLink>
                    <NavLink to={'search/:searchWord'}>Search</NavLink>
                </div>
            <div className={css.switchUser}>
                <Switcher/>
                <div className={css.user}>
                    <img src="https://cdn-icons-png.flaticon.com/512/848/848006.png" alt="user"/>
                    <h6>User77</h6>
                </div>
            </div>
        </div>
    );
};

export {Header};