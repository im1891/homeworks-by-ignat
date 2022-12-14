import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (userName: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any

        let newName = e.currentTarget.value;

        if (newName !== '' && !isFinite(parseInt(newName))) {
            setName(newName)
            setError('')
        } else {
            setName('')
            setError('Please, enter correct name!')
        }
    }


    const addUser = () => {
        if (name.trim() === '') {
            setError('Please, enter correct name!')

        } else {
            setError('')
            addUserCallback(name)  // need to fix
            alert(`Hello ${name}!`)
            setName('');
        }

    }


    const onEnterPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && addUser()
    }

    const totalUsers: number = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}

            onEnterPressHandler={onEnterPressHandler}

        />
    )

}
export default GreetingContainer;
