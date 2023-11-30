import {Outlet} from "react-router-dom";

import {Header} from "../Components";
import {LinearProgress} from "@mui/material";
import {useAppSelector} from "../hooks";
import css from './pages.module.css'
import {Paginator} from "../Components/PaginatorContainer/Paginator";

const MainLayOut = () => {
    const {movieById, isLoading} = useAppSelector(state => state.movies)

    return (
        <div>
            <Header/>
            {!isLoading? <div className={css.loader}></div> : <LinearProgress color={"error"}/>}
            <Outlet/>
            {!movieById && <Paginator/>}
        </div>
    );
};

export {MainLayOut};