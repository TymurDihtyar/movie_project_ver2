import {FC, PropsWithChildren} from 'react';
import {useForm} from "react-hook-form";

import {IKeyWord} from "../../../interfaces";
import {ISetState} from "../../../types";

interface IProps extends PropsWithChildren {
    setKeyWord: ISetState<string>
}

const SearchForm:FC<IProps> = ({setKeyWord}) => {
    const {reset, handleSubmit, register} = useForm()

    const search = async (keyWord: IKeyWord) => {
        setKeyWord(keyWord.Keyword)
        reset()
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'Keyword'} {...register('Keyword')}/>
            <button>Search</button>
        </form>
    );
};

export {SearchForm};