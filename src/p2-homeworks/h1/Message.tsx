import React from 'react'
import styles from './Message.module.css'

export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

export function Message(props: MessagePropsType) {
    return (
        <div>
            <div className={styles.messageWrapper}>
                <div className={styles.messageAvatar}>
                    <img src={props.avatar} alt="avatar"/>
                </div>

                <div className={styles.main}>
                    <div>
                        <div className={styles.name}>
                            <h3>{props.name}</h3>
                        </div>
                        <div className={styles.messageText}>
                            <span>{props.message}</span>
                        </div>
                    </div>
                    <div className={styles.messageTime}>
                        <span>{props.time}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message
