import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const moviesService = {
    getAll: (page:string): any => axiosService.get(urls.movies, {params:{page}})
}

export {moviesService}