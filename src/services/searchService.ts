import {IRes} from "../types";
import {IData} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const searchService = {
    getByKeyWord: (page:string, query:string):IRes<IData> => axiosService.get(urls.search, {params:{page, query}})
}

export {searchService}