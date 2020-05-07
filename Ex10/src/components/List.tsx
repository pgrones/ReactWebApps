import React from "react";

type Props = {
    items: string[]
}

export const List = ({items}: Props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            marginBottom: 20
        }}>
            {items.map((item, index) => {
                return <div key={index} style={{ display: 'flex', justifyContent: 'center', fontSize: 30, fontFamily: 'Arial', backgroundColor: index % 2 === 0 ? 'lightgrey' : 'white'}}>{item}</div>
            })}
        </div>
    )
};
