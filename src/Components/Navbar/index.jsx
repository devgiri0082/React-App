import React, { useContext } from 'react'
import CounterContext from '../Contexts/counterContext';
import styling from "./style.module.css";

export default function Navbar() {
    let { counterState } = useContext(CounterContext);
    return (
        <div className={styling.navbar}>
            <h1 >Navbar</h1>
            <h1>{counterState.counterValue}</h1>
        </div>
    )
}
