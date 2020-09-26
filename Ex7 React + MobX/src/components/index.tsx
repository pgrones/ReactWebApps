import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {GlobalStyle} from "../styles/globalStyle";
import {Deck} from './deck'
import {Game} from '../businessLogic/game'
import {observer} from "mobx-react";
import {autorun} from "mobx";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;  
`;

const ButtonWrapper = styled.div`
    display: flex; 
    justify-content: space-between; 
    width: 200px;

`;

const StyledButton = styled.button`
    background-color: #2a2f36;
    padding: 10px;
    border: 1px solid #3C434D;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    transition: 0.2s linear;
    margin-bottom: 20px;
    align-self: center;
    
    &:hover{
        background-color: #3C434D;
        transform: scale(1.1);
    }
    
    &:disabled{
        color: #3C434D;        
    }
    
    &:disabled:hover{
        transform: none;
        cursor: default;
        background-color: #2a2f36;
    }
`;

const game = new Game();

autorun(() => {
    console.log('Card: ' + (game.index + 1) + '/52');
    console.log('Score: ' + game.score);
});

const App = observer(() => {
    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <h1>Score: {game.score}</h1>
                <Deck card={game.currentCard}/>
                <ButtonWrapper>
                    <StyledButton onClick={(): void => game.draw('lower')} disabled={game.isOver()}>Lower</StyledButton>
                    <StyledButton onClick={(): void => game.draw('higher')} disabled={game.isOver()}>Higher</StyledButton>
                </ButtonWrapper>
            </Wrapper>
        </>
    )
});

ReactDOM.render(<App/>, document.getElementById('root'));
