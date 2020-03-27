import React from 'react';

type Props = {
    notificationAmount: number,
    setMessageView: Function
}

export const NavBar = (props: Props) =>
    <div className="nav-bar">
        <a onClick={() => props.setMessageView(true)}>
            Messages
            {props.notificationAmount > 0 &&
            <span className="notification">{props.notificationAmount > 5 ? '5+' : props.notificationAmount}</span>}
        </a>
        <a onClick={() => props.setMessageView(false)}>New Message</a>
    </div>
;
