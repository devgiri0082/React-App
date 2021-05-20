import React from 'react'
import Content from '../Content';
import { CounterContextProvider } from '../Contexts/counterContext';
import Navbar from "../Navbar";
import Sidebar from '../Sidebar';
import "./style.css";

export default function Main() {
    return (
        <CounterContextProvider>
            <div className="main-container">
                <Navbar />
                <div className="inner-container">
                    <Sidebar>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <button>add Item</button>
                    </Sidebar>
                    <Content />
                </div>
            </div>
        </CounterContextProvider>
    )
}
