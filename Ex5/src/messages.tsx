import React from 'react';

type Props = {
    messages: { subject: string, body: string, read: boolean }[],
    notificationAmount: number,
    markAsRead: Function
}

export const Messages = (props: Props) =>
    <div className="messageContainer">
        <h1>Messages</h1>
        {props.messages.length > 0 &&
        <>
            {props.notificationAmount > 0 &&
            <h2>{props.notificationAmount} New
                Message{props.notificationAmount > 1 && 's'}</h2>}
            {props.messages.map((m, index) =>
                <div className={!m.read ? 'messages unread' : 'messages'} key={index}
                     onClick={() => !m.read ? props.markAsRead(index) : null}>Subject: {m.subject}<br/>Message: {m.body}
                </div>)}
        </>
        }
    </div>
;
