import {Outlet} from "react-router-dom";

import {SearchForm} from "../Components";

const SearchPage = () => {

    return (
        <div>
            <SearchForm/>
            <Outlet/>
        </div>
    );
};

export {SearchPage};