import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {NavBar} from "./navBar";
import {Form} from "./form";
import {Messages} from "./messages";

const App = () => {
    const [notificationAmount, setNotificationAmount] = useState(0);
    const [isMessageView, setMessageView] = useState(false);
    const [messages, setMessages] = useState([]);

    const addMessage = (message: { subject: string, body: string, read: boolean }) => {
        setMessages([...messages, message]);
        setNotificationAmount(notificationAmount + 1);
    };

    const markAsRead = (index: number) => {
        let m = [...messages];
        m[index].read = true;
        setMessages(m);
        setNotificationAmount(notificationAmount - 1);
    };

    return (
        <>
            <NavBar notificationAmount={notificationAmount} setMessageView={setMessageView}/>
            <div className='main'>
                <div className='content'>
                    {isMessageView ?
                        <Messages messages={messages} notificationAmount={notificationAmount}
                                  markAsRead={markAsRead}/> :
                        <Form addMessage={addMessage}/>}
                </div>
            </div>
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
