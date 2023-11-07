import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {Movies} from "../Components";
import {IMovie} from "../interfaces";
import {searchService} from "../services";

const SearchKeyWordPage = () => {
    let {searchWord} = useParams<string>()
    const [moviesKeyWord, setMoviesKeyWord] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') ? query.get('page') : '1'

    if (searchWord === ':searchWord') {
        searchWord = 'war'
    }

    useEffect(() => {
        searchService.getByKeyWord(page, searchWord).then(({data}) => {
            setMoviesKeyWord(data.results)
        })
    }, [page, searchWord]);

    return (
        <div>
            <Movies movies={moviesKeyWord} page={page} setQuery={setQuery}/>
        </div>
    );
};

export {SearchKeyWordPage};