import {useContext} from "react";
import {Context} from "../hoc";
import {IMovie} from "../interfaces";
import {ISetState} from "../types";

export interface IContext {
    state: IMovie[]
    setState: ISetState<IMovie[]>
}

const useAppContext = () => {
    const {state, setState} = useContext<IContext>(Context)
    return {
        baseMovies: state,
        setBaseMovies: (value:IMovie[]): void => setState(value)
    }
}

export {useAppContext}