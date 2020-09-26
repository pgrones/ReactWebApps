import withStyles from "@material-ui/core/styles/withStyles";
import {CircularProgress, Container} from "@material-ui/core";
import React from 'react';

type Props = {
    error: boolean
}

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

export const LoadingScreen = ({error}: Props) => {
    return (
        <StyledContainer>
            {error ?
                <div>An error occurred while fetching. Please reload the page.</div>
                : <StyledProgress/>
            }
        </StyledContainer>
    )
};
