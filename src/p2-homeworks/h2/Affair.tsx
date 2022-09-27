import React from 'react'
import {AffairType} from "./HW2";
import style from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={style.affair}>
            <div className={style.affairItem}>{props.affair.name}</div>
            <div className={style.affairItem}>[{props.affair.priority}]</div>

            <div className={style.affairItem}>
                <SuperButton onClick={deleteCallback}>X</SuperButton>
            </div>
        </div>
    )
}

export default Affair
