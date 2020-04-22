import React from 'react';
import {Search, TrendingUp} from '@material-ui/icons';
import {AppBar, Button, Toolbar, Tooltip} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

type Props = {
    screen: string,
    setScreen: Function
};

const StyledAppBar = withStyles({
    root: {
        background: '#2a2f36',
        boxShadow: '1px 3px 12px 5px #000'
    }
})(AppBar);

const StyledToolBar = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: 80,
        margin: '0 30px 0 30px'
    }
})(Toolbar);

const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 20px',
        marginRight: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'none',
    },
})(Button);

export const NavBar = (props: Props) => {
    return (
        <StyledAppBar position="fixed">
            <StyledToolBar>
                <div>
                    <h1>{props.screen}</h1>
                </div>
                <div>
                    <Tooltip title="Trending">
                        <StyledButton onClick={() => props.setScreen('Trending')}>
                            <TrendingUp/>
                        </StyledButton>
                    </Tooltip>
                    <Tooltip title="Search">
                        <StyledButton onClick={() => props.setScreen('Search')}>
                            <Search/>
                        </StyledButton>
                    </Tooltip>
                </div>
            </StyledToolBar>
        </StyledAppBar>
    )
};
