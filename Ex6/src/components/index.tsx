import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {GlobalStyle} from "../styles/globalStyle";
import {Deck} from './deck'
import {Game} from '../businessLogic/game'

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const game = new Game();

const App = () => {
    const [isFlipped, setFlipped] = useState(false);
    const [card, setCard] = useState(game.currentCard);
    const [score, setScore] = useState(game.score);

    // Flips the card again, to be face-up
    useEffect(() => {
        if (isFlipped) {
            setFlipped(!isFlipped);
        }
    }, [isFlipped]);

    const getNextCard = (prediction: string): void => {
        setFlipped(!isFlipped);
        game.draw(prediction);
        // Not the best solution, but I wanted to set the state when the card is face-down
        // As this is not part of the exercise, imagine sleep() is never called
        sleep(300).then(() => setCard(game.currentCard));
        sleep(1000).then(() => setScore(game.score))
    };

    const handleLower = (): void => {
        getNextCard('lower')
    };

    const handleHigher = (): void => {
        getNextCard('higher')
    };

    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <h1>Score: {score}</h1>
                <Deck isFlipped={isFlipped} card={card}/>
                <ButtonWrapper>
                    <StyledButton onClick={(): void => handleLower()} disabled={!card}>Lower</StyledButton>
                    <StyledButton onClick={(): void => handleHigher()} disabled={!card}>Higher</StyledButton>
                </ButtonWrapper>
            </Wrapper>
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
