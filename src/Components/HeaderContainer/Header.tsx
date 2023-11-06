import {NavLink} from "react-router-dom";

import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.logo}>The MovieDB</div>
            <div className={css.mid}>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres/:idGenres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
            </div>
            <div className={css.user}>
                <img src="https://cdn-icons-png.flaticon.com/512/848/848006.png" alt="user"/>
                <h6>User77</h6>
            </div>
        </div>
    );
};

export {Header};