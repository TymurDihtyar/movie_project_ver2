import {Outlet} from "react-router-dom";
import {Header} from "../Components";

const MainLayOut = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayOut};