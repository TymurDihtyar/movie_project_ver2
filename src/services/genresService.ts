import {IRes} from "../types";
import {IGenres} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const genresService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genre)
}

export {genresService}