import React from 'react';
import styled from 'styled-components';
import {Theme} from "../styles/theme";

type Props = {
    messages: { subject: string, body: string, read: boolean }[],
    setMessageView: Function,
    changeStyle: Function
}

const Background = styled.div`
    background-color: ${(props: { theme: Theme }) => props.theme.accent};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70px;    
`;

const NavBtn = styled.a`
    margin: 10px 20px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    transition: 0.2s linear;
    display: flex;
    flex-direction: row;
    
    &:hover{
        background-color: ${(props: { theme: Theme }) => props.theme.background};
        transform: scale(1.1);
    }
`;

const Notification = styled.span`
    margin-left: 5px;
    margin-top: -5px;
    background-color: ${(props: { theme: Theme }) => props.theme.notificationColor};
    border-radius: 50%;
    font-size: 14px;
    width: 15px;
    height: 15px;
    padding: 5px 5px 5px 4px;
    text-align: center;
`;

export const NavBar = (props: Props) => {
    const notifications = props.messages.filter(item => !item.read).length;

    return (
        <Background>
            <NavBtn onClick={() => props.setMessageView(true)}>
                Messages
                {notifications > 0 &&
                <Notification>{notifications > 5 ? '5+' : notifications}</Notification>}
            </NavBtn>
            <NavBtn onClick={() => props.setMessageView(false)}>New Message</NavBtn>
            <NavBtn onClick={() => props.changeStyle()}>Theme</NavBtn>
        </Background>
    )
};
