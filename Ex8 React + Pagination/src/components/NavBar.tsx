import React, {useEffect, useRef} from 'react';
import {Search, TrendingUp} from '@material-ui/icons';
import {AppBar, Button, Slide, TextField, Toolbar, Tooltip} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {observer} from "mobx-react";
import {useStore} from "../businessLogic/StoreContext";

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

const StyledTextField = withStyles({
    root: {
        backgroundColor: '#4e5663',
        minWidth: 300,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#FF8E53',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#FE6B8B',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FE6B8B',
        },
    }
})(TextField);

export const NavBar = observer(() => {
    const store = useStore();
    const ref = useRef<HTMLInputElement>();

    // Empty and focus the search field on screen change
    useEffect(() => {
        if (store.screen !== 'Trending') {
            store.search('');
            ref.current.focus();
        }
    }, [store.screen]);

    return (
        <StyledAppBar position="fixed">
            <StyledToolBar>
                <div>
                    {/*A click on the screen name at the top left loads the first page*/}
                    <h1 onClick={() => {
                        if (store.currentPage > 0) {
                            store.setCurrentPage(0);
                            store.fetch();
                        }
                    }}>
                        {store.screen}
                    </h1>
                </div>
                <Slide direction={'left'} in={store.screen !== 'Trending'}>
                    <StyledTextField
                        inputRef={ref}
                        id="standard"
                        type="text"
                        placeholder={'Search...'}
                        value={store.searchString}
                        onChange={(e) => {
                            store.search(e.target.value);
                        }}
                    />
                </Slide>
                <div>
                    <Tooltip title="Trending">
                        <StyledButton onClick={() => store.setScreen('Trending')}>
                            <TrendingUp/>
                        </StyledButton>
                    </Tooltip>
                    <Tooltip title="Search">
                        <StyledButton onClick={() => store.setScreen('Search')}>
                            <Search/>
                        </StyledButton>
                    </Tooltip>
                </div>
            </StyledToolBar>
        </StyledAppBar>
    )
});
