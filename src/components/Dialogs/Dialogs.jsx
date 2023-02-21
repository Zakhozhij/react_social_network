import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} photo={m.photo} userSend={m.userSend} />);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <ul className={s.messagesList}>
                    {messagesElements}
                </ul>
                
                <div className={s.writeMessage}>
                    <textarea placeholder='Write your message'></textarea>
                </div>
                <div className={s.buttonSendMessage}>
                    <button>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;