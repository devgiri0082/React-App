import { createContext, useReducer } from "react";


let CounterContext = createContext()

export default CounterContext;

export function CounterContextProvider(props) {
    let inititalState = { counterValue: 0, value: 1 };
    let reducer = (state, action) => {
        switch (action) {
            case "increment":
                return { counterValue: state.counterValue + 1 };
            case "decrement":
                return { counterValue: state.counterValue - 1 };
            case "reset":
                return { counterValue: 0 };
            default:
                throw new Error("error");
        }
    }
    let [counterState, dispatch] = useReducer(reducer, inititalState);
    return (
        <CounterContext.Provider value={{
            counterState,
            dispatch
        }}>
            {props.children}
        </CounterContext.Provider>
    )
}

