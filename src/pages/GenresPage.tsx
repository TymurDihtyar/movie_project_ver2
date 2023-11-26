import {useEffect} from "react";
import {Outlet} from "react-router-dom";

import {Genres} from "../Components";
import {useAppDispatch} from "../hooks/reduxHooks";
import {moviesActions} from "../redux/slices/moviesSlice";

const GenresPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(moviesActions.getGenres())
    }, []);

    return (
        <div>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};