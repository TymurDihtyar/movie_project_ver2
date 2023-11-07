import {SearchForm} from "../Components/SearchContainer/SearchForm";
import {useEffect, useState} from "react";
import {IMovie} from "../interfaces";
import {useSearchParams} from "react-router-dom";
import {Movies} from "../Components";
import {IKeyWord} from "../interfaces/keyWordInterface";
import {searchService} from "../services/searchService";

const SearchPage = () => {
    const [movieKeyWord, setMovieKeyWord] = useState<IKeyWord>({Keywords:'dead'})
    const [moviesKeyWord, setMoviesKeyWord] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page') ? query.get('page') : '1'

    useEffect(() => {
        searchService.getByKeyWord(page, movieKeyWord.Keywords).then(({data})=>setMoviesKeyWord(data.results))
    }, [page, movieKeyWord]);

    return (
        <div>
            <SearchForm setMovieKeyWord={setMovieKeyWord}/>
            <Movies movies={moviesKeyWord} page={page} setQuery={setQuery}/>
        </div>
    );
};

export {SearchPage};