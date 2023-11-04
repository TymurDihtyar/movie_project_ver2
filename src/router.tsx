import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayOut} from "./layouts";
import {GenresPage, MovieInfoPage, MoviesPage, SearchPage} from "./pages";

const router = createBrowserRouter([
        {path:'', element:<MainLayOut/>, children:[
                {index:true, element:<Navigate to={'movies'}/>},
                {path:'movies', element:<MoviesPage/>,children:[
                                {path:':id', element:<MovieInfoPage/>}
                        ]},
                {path:'genres', element:<GenresPage/>},
                {path:'search', element:<SearchPage/>}
        ]}
])

export {router}