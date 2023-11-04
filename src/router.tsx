import {createBrowserRouter} from "react-router-dom";
import {MainLayOut} from "./mainlayout/MainLayOut";

const router = createBrowserRouter([
    {path:'', element:<MainLayOut/>}
])

export {router}