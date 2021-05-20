import React from 'react'
import sideBar from "./style.module.css";

export default function Sidebar(props) {
    return (
        <div className={sideBar.sidebar}>
            <h1>Sidebar</h1>
            {props.children}
        </div>
    )
}
