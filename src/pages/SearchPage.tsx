import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {Movies, SearchForm} from "../Components";
import {IMovie} from "../interfaces";
import {searchService} from "../services";

const SearchPage = () => {
    const [KeyWord, setKeyWord] = useState<string>( 'porn')
    const [moviesKeyWord, setMoviesKeyWord] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') ? query.get('page') : '1'

    useEffect(() => {
        searchService.getByKeyWord(page, KeyWord).then(({data}) => setMoviesKeyWord(data.results))
    }, [page, KeyWord]);

    return (
        <div>
            <SearchForm setKeyWord={setKeyWord}/>
            <hr/>
            <Movies movies={moviesKeyWord} page={page} setQuery={setQuery}/>
        </div>
    );
};

export {SearchPage};