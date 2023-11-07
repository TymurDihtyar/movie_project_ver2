import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {IKeyWord} from "../../../interfaces";
import css from './SearchForm.module.css'

const SearchForm = () => {
    const {reset, handleSubmit, register} = useForm()
    const navigate = useNavigate()

    const search = (keyWord: IKeyWord) => {
        const searchWord =  keyWord.Keyword
        navigate(`${searchWord}`)
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