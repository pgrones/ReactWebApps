import React from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import {Card} from "../businessLogic/card";

type Props = {
    isFlipped: boolean,
    card: Card
}

const Wrapper = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     width: 500px;
     height: 300px;
     margin: 20px;
     padding: 10px;
     overflow: auto;
`;

const CardDiv = styled.div`
    background-color: #2a2f36; 
    border: 1px solid #4e5663;
    box-shadow: -10px 10px #2a2f36;
    border-radius: 15px;
    width: 180px;
    height: 290px;     
`;

const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2a2f36; 
    border: 1px solid #4e5663;
    border-radius: 15px;
    width: 180px;
    height: 290px;  
    font-size: 100px;
`;

export const Deck = (props: Props) => {
    return (
        <Wrapper>
            <CardDiv>
                <ReactCardFlip isFlipped={props.isFlipped} flipDirection="horizontal" infinite={true}
                               flipSpeedBackToFront={2} flipSpeedFrontToBack={2}>
                    <TopCard>
                        {props.card ? <><img src={props.card.suit} width='40%' alt='Spades'/>
                        {props.card.value} </> : <></>}
                    </TopCard>
                    <TopCard/>
                </ReactCardFlip>
            </CardDiv>
        </Wrapper>
    )
};
