import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)

    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString() // fix with date
    const stringDate = date?.toLocaleDateString()// fix with date

    return (
        <div style={{height: '65px'}}>
            <div style={{display: 'inline-block', minHeight: '22px'}} onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}>
                {stringTime}
            </div>
            <div style={{minHeight: '22px'}}>
                {show && stringDate}
            </div>
            <div style={{display: 'flex'}}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
