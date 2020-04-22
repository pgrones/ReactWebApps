import {CardComponent} from "./Card";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {Container} from "@material-ui/core";

type Props = {
    gifs: {
        title: string,
        url: string
    }[],
}

const StyledContainer = withStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 0,
        marginTop: 90,
        marginBottom: 90,
        maxWidth: '100%'
    }
})(Container);

export const ContainerComponent = (props: Props) => {
    return (
        <>
            <StyledContainer>
                {props.gifs.map((item, index) =>
                    <CardComponent key={index} title={item.title} url={item.url}/>
                )}
            </StyledContainer>
        </>
    )
};
