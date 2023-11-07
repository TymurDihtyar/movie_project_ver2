import {FC, PropsWithChildren} from 'react';
import {useForm} from "react-hook-form";
import {IKeyWord} from "../../../interfaces/keyWordInterface";
import {ISetState} from "../../../types";

interface IProps extends PropsWithChildren {
    setMovieKeyWord: ISetState<IKeyWord>
}

const SearchForm:FC<IProps> = ({setMovieKeyWord}) => {
    const {reset, handleSubmit, register} = useForm()

    const search = async (keyWord: IKeyWord) => {
        setMovieKeyWord(keyWord)
        reset()
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'Keywords'} {...register('Keywords')}/>
            <button>Search</button>
            <hr/>
        </form>
    );
};

export {SearchForm};