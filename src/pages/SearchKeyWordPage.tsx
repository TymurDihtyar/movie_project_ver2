import {Movies} from "../Components";
import {useEffect, useState} from "react";
import {IMovie} from "../interfaces";
import {useParams, useSearchParams} from "react-router-dom";
import {searchService} from "../services";

const SearchKeyWordPage = () => {
    const {searchWord}=useParams<string>()
    const [moviesKeyWord, setMoviesKeyWord] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') ? query.get('page') : '1'

    useEffect(() => {
        searchService.getByKeyWord(page, searchWord).then(({data}) => setMoviesKeyWord(data.results))
    }, [page, searchWord]);

    return (
        <div>
            <Movies movies={moviesKeyWord} page={page} setQuery={setQuery}/>
        </div>
    );
};

export {SearchKeyWordPage};