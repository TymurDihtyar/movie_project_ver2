import {Outlet} from "react-router-dom";

import {Header} from "../Components";
import {LinearProgress} from "@mui/material";
import {useAppSelector} from "../hooks";

const MainLayOut = () => {
    const {isLoading} = useAppSelector(state => state.movies)
    return (
        <div>
            <Header/>
            {isLoading && <div><LinearProgress/></div>}
            <Outlet/>
        </div>
    );
};

export {MainLayOut};