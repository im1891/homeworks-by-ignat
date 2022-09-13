import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnterPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnterPressHandler} // деструктуризация пропсов
) => {
    const errorClass = error ? `${s.inputClass} ${s.inputError}` : s.inputClass; // need to fix with (?:)

    return (
        <div className={s.greeting}>

            <SuperInputText value={name} className={errorClass}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNameCallback(e)}
                            placeholder='Enter your name!' onKeyUp={(e) => onEnterPressHandler(e)} error={error}
                            spanClassName={s.error} onBlur={setNameCallback}/>

            <SuperButton onClick={addUser} className={`${s.button} ${error ? s.buttonError : ''}`}
                         disabled={!!error}>Add</SuperButton>


            <span className={s.totalCount}>Total users: {totalUsers}</span>


        </div>
    )
}

export default Greeting
