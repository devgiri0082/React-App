import React, { useContext } from 'react';
import CounterContext from '../Contexts/counterContext';
import "./style.css";

export default function Counter() {
    let contextData = useContext(CounterContext);
    return (
        <div className="counter-card">
            <button className="button plus" onClick={() => contextData.dispatch("decrement")}>-</button><span className="count">{contextData.counterState.counterValue}</span><button className="button minus" onClick={() => contextData.dispatch("increment")}>+</button>
            <button className="button reset" onClick={() => contextData.dispatch("reset")}>Reset</button>
        </div>
    )
}
