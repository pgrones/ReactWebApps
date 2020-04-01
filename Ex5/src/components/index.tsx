import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from "./navBar";
import {Form} from "./form";
import {Messages} from "./messages";
import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle} from "../styles/globalStyle";
import {darkTheme, lightTheme, Theme} from "../styles/theme";

const MainContainer = styled.main`
    position: absolute;
    top: 80px;
    bottom: 10px;
    left: 5%;
    right: 5%;
    background-color: ${(props: { theme: Theme }) => props.theme.accent};
    margin: 10px;
    border-radius: 10px;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

const App = () => {
    const [notificationAmount, setNotificationAmount] = useState(0);
    const [isMessageView, setMessageView] = useState(false);
    const [messages, setMessages] = useState([]);
    const [theme, setTheme] = useState(darkTheme);

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

    const changeStyle = () => {
        if (theme === darkTheme) {
            setTheme(lightTheme);
        } else {
            setTheme(darkTheme)
        }
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <NavBar notificationAmount={notificationAmount} setMessageView={setMessageView}
                        changeStyle={changeStyle}/>
                <MainContainer>
                    <Content>
                        {isMessageView ?
                            <Messages messages={messages} notificationAmount={notificationAmount}
                                      markAsRead={markAsRead}/>
                            : <Form addMessage={addMessage}/>}
                    </Content>
                </MainContainer>
            </ThemeProvider>
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
