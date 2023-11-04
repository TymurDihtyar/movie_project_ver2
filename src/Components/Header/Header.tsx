import {NavLink} from "react-router-dom";

import css from './Header.module.css'
const Header = () => {
    return (
        <div className={css.Header}>
            <div>The MovieDB</div>
            <div>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
            </div>
            <div>
                <img src="#" alt="user"/>
            </div>
        </div>
    );
};

export {Header};