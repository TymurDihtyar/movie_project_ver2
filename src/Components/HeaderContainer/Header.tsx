import {NavLink} from "react-router-dom";

import './Header.css'

import {Switcher} from "./Switcher";

const Header = () => {
    return (
        <div id={'header'}>
            <div className={'logo'}>The MovieDB</div>
            <div>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres/:idGenres'}>Genres</NavLink>
                <NavLink to={'search/:searchWord'}>Search</NavLink>
            </div>
            <div className={'switchUser'}>
                <Switcher/>
                <div className={'user'}>
                    <img src="https://cdn-icons-png.flaticon.com/512/848/848006.png" alt="user"/>
                    <h6>User77</h6>
                </div>
            </div>
        </div>
    );
};

export {Header};