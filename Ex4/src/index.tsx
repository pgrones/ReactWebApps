import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {NavBar} from "./navBar";
import {Form} from "./form";

type Props = {
    title: string;
    unreadMessages: number;
}

const Header = (props: Props) => (
    <div className="header">
        <h1>{props.title}</h1>
        <p>{props.unreadMessages} unread messages</p>
    </div>
);

const App = () => {
    const [notificationAmount, setNotificationAmount] = useState(0);
    const [isMessageView, setMessageView] = useState(true);

    return (
        <>
            <NavBar notificationAmount={notificationAmount} setMessageView={setMessageView}/>
            <div className='main'>
                <div className='content'>
                    {isMessageView ?
                        <Header title="Hello !" unreadMessages={5}/> :
                        <Form notificationAmount={notificationAmount} setNotificationAmount={setNotificationAmount}/>}
                </div>
            </div>
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
