import withStyles from "@material-ui/core/styles/withStyles";
import {CircularProgress, Container} from "@material-ui/core";
import React from 'react';

const StyledContainer = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }
})(Container);

const StyledProgress = withStyles({
    root: {
        color: '#FE6B8B',
    }
})(CircularProgress);

export const LoadingScreen = () =>{

    return(
        <StyledContainer>
            <StyledProgress />
        </StyledContainer>
    )
};
