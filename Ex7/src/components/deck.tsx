import React from 'react';
import styled from 'styled-components';
import {Card} from "../businessLogic/card";

type Props = {
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
                <TopCard>
                    <img src={props.card.suit.path} width='40%' alt={props.card.suit.alt}/>
                    {props.card.value}
                </TopCard>
            </CardDiv>
        </Wrapper>
    )
};
