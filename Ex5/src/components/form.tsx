import React, {useState, useEffect, useRef} from 'react';
import styled, {css} from 'styled-components'
import {Theme} from "../styles/colors";

type Props = {
    addMessage: Function
}

const FormContainer = styled.div`
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

const FormStyle = styled.form`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 50%;
`;

const FormWrapper = (theme: Theme) => css`
    display: block;
    background-color: ${theme.accentBetween};
    padding: 10px;
    border: none;
    border-radius: 10px;
    outline: none;
    margin-top: 5px;
    margin-bottom: 10px;
    resize: none;
    width: 100%;
`;

const Subject = styled.input`
    ${(props: {theme: Theme}) => FormWrapper(props.theme)}
`;

const Body = styled.textarea`
    ${(props: {theme: Theme}) => FormWrapper(props.theme)};   
    height: 100%;
    min-height: 50%;
`;

const Button = styled.button`
    background-color: ${(props: {theme: Theme}) => props.theme.accent};
    padding: 10px;
    border: 1px solid ${(props: {theme: Theme}) => props.theme.background};
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    transition: 0.2s linear;
    margin-bottom: 20px;
    align-self: center;
    width: 93%;
    
    &:hover{
        background-color: ${(props: {theme: Theme}) => props.theme.background};
        transform: scale(1.1);
    }
    
    &:disabled{
        color: ${(props: {theme: Theme}) => props.theme.background};        
    }
    
    &:disabled:hover{
        transform: none;
        cursor: default;
        background-color: ${(props: {theme: Theme}) => props.theme.accent};
    }
`;

export const Form = (props: Props) => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const subjectRef = useRef<HTMLInputElement>();

    useEffect(() => {
        subjectRef.current.focus();
    }, []);

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        props.addMessage({subject: subject, body: body, read: false});
        setSubject('');
        setBody('');
        subjectRef.current.focus();
    };

    return (
        <FormContainer>
            <Header>New Message</Header>
            <FormStyle onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='subject'>Subject</label>
                <Subject
                    ref={subjectRef}
                    type="text"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject || ''}
                />
                <label htmlFor='body'>Message</label>
                <Body
                    name="body"
                    onChange={(e) => setBody(e.target.value)}
                    value={body || ''}
                />
                <Button disabled={!(subject && body)}>Submit</Button>
            </FormStyle>
        </FormContainer>
    )
};
