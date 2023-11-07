import {FC, PropsWithChildren} from 'react';
import {useForm} from "react-hook-form";

import {IKeyWord} from "../../../interfaces";
import {ISetState} from "../../../types";
import css from './SearchForm.module.css'

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
        <form className={css.myForm} onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'Search by keyword'} {...register('Keyword')}/>
            <button>Search</button>
        </form>
    );
};

export {SearchForm};