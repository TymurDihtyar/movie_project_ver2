import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types";

const posterSetvice = {
    getPoster: (key: string):IRes<any> => axiosService.get(urls.poster(key))
}

export {posterSetvice}