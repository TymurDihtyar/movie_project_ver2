import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import {Movies} from "../Components";
import {IMovie} from "../interfaces";
import {moviesService, searchService} from "../services";

const SearchKeyWordPage = () => {
    let {searchWord} = useParams<string>()
    const [moviesKeyWord, setMoviesKeyWord] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const [maxPage, setMaxPage] = useState<number>(500)
    const page = query.get('page') ? query.get('page') : '1'

    useEffect(() => {
        if (searchWord === ':searchWord') {
            moviesService.getAll(page).then(({data}) => {
                setMoviesKeyWord(data.results)
                setMaxPage(data.total_pages)
            })

        } else {
            searchService.getByKeyWord(page, searchWord).then(({data}) => {
                setMoviesKeyWord(data.results)
                setMaxPage(data.total_pages)
            })
        }
    }, [page, searchWord]);

    return (
        <div>
            <Movies movies={moviesKeyWord} page={page} setQuery={setQuery} maxPage={maxPage}/>
        </div>
    );
};

export {SearchKeyWordPage};