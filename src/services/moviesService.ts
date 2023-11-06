import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";
import {IRes} from "../types";
import {IData, IOneMove} from "../interfaces";


const moviesService = {
    getAll: (page:string): IRes<IData> => axiosService.get(urls.movies, {params:{page}}),
    getById: (id:string):IRes<IOneMove> => axiosService.get(urls.movie(id))
}

export {moviesService}