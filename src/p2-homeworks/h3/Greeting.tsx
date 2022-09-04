import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

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
        <div>
            <input value={name}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setNameCallback(e)}
                   className={errorClass}
                   placeholder='Enter your name!'
                   onKeyPress={(e) => onEnterPressHandler(e)}/>

            {error ? <button className={`${s.button} ${s.buttonError}`} disabled>add</button> :
                <button onClick={addUser} className={s.button}>add</button>}

            <span className={s.totalCount}>Total users: {totalUsers}</span>
            <div>
                <span className={s.error}>{error}</span>
            </div>

        </div>
    )
}

export default Greeting
