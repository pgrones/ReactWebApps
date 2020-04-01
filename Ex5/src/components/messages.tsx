import React from 'react';
import styled, {css} from 'styled-components';
import {Theme} from "../styles/colors";

type Props = {
    messages: { subject: string, body: string, read: boolean }[],
    notificationAmount: number,
    markAsRead: Function
}

const MessageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Header = styled.h1`
    font-size: 40px;
    font-weight: normal;
    margin: 50px 0 10px 0;
`;

const NotificationText = styled.h2`
    font-size: 24px;
    font-weight: normal;
    color: #b5002a;
    background-color: ${(props: {theme: Theme}) => props.theme.accentBetween};
    border-radius: 10px;
    padding: 5px 10px;
    margin-bottom: 10px;
`;

const Message = (theme: Theme) => css`
    padding: 10px;
    margin: 5px;
    border: 1px solid ${theme.accentBetween};
    border-radius: 10px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 80px;
`;

const ReadMessage = styled.div`
    ${(props: {theme: Theme}) => Message(props.theme)}
`;

const UnreadMessage = styled.div`
    ${({theme}) => Message(theme)};
    background-color: ${(props: {theme: Theme}) => props.theme.accentBetween};
    cursor: pointer;
    transition: 0.2s linear;
    
    &:hover{
        background-color: ${(props: {theme: Theme}) => props.theme.background};
        transform: scale(1.05);
    }
`;

export const Messages = (props: Props) =>
    <MessageContainer>
        <Header>Messages</Header>
        {props.messages.length > 0 &&
        <>
            {props.notificationAmount > 0 &&
            <NotificationText>{props.notificationAmount} New
                Message{props.notificationAmount > 1 && 's'}
            </NotificationText>}
            {props.messages.map((m, index) =>
                !m.read ?
                    <UnreadMessage key={index} onClick={() => props.markAsRead(index)}>
                        Subject: {m.subject}<br/>Message: {m.body}
                    </UnreadMessage>
                    : <ReadMessage key={index}>
                        Subject: {m.subject}<br/>Message: {m.body}
                    </ReadMessage>)
            }
        </>
        }
    </MessageContainer>
;
