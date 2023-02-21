import React from 'react';
import s from './Message.module.css'
const Message = (props) => {

 

  return (
    <li className={`${s.message} ${(props.userSend==1 ? s.messageRight : s.messageLeft)}`}>
        <div className={s.photo}><img src={props.photo} /></div>
        <div className={s.messageText}>{props.message}</div>
        <div className={s.emptyArea}></div>
    </li>
  )
}
export default Message;