import {createContext, ReactNode, useState} from "react";
import {IMovie} from "../interfaces";
import {IContext} from "../hooks";

const Context = createContext<IContext>(null)
const ContextProvider = ({children}: { children: ReactNode }) => {
    const [state, setState] = useState<IMovie[]>(null);

    const contextValue: IContext = {state, setState};

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider, Context};
