import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types";
import {IData} from "../interfaces";

const moviesService = {
    getAll: (page:string): IRes<IData> => axiosService.get(urls.movies, {params:{page}})
}

export {moviesService}