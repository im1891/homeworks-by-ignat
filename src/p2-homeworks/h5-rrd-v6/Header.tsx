import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'


function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const openHandler = () => {
        console.log(isOpen)
        setIsOpen(!isOpen)
    }

    const closeHandler = () => {
        console.log(isOpen)
        isOpen && setTimeout(openHandler, 100)
    }

    return (<div className={s.headerWrapper}>


            <div onMouseLeave={closeHandler} className={`${s.linksBlock} ${isOpen ? s.open : s.close}`}>

                <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                <NavLink to={PATH.JUNIOR}>junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}>junior+</NavLink>

            </div>

            <div className={`${s.button} ${isOpen ? s.buttonHidden : ''}`} onMouseOver={openHandler}></div>


        </div>

    )
}

export default Header
