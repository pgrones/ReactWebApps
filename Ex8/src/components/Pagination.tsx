import {NavigateBefore, NavigateNext} from "@material-ui/icons";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {Button, Container, TextField} from "@material-ui/core";
import {useStore} from "../businessLogic/StoreContext";
import {observer} from "mobx-react";

const StyledNavigation = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 80,
        width: '100%',
        maxWidth: '100%',
        position: 'fixed',
        bottom: 0,
        background: '#2a2f36',
        boxShadow: '1px -3px 12px 5px #000'
    }
})(Container);

const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: 48,
        marginLeft: 20,
        marginRight: 20,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    disabled: {
        background: '#aaadb5',
        boxShadow: 'none'
    },
    label: {
        textTransform: 'none',
    },
})(Button);

const StyledBottomNav = withStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    }
})(Container);

const StyledTextField = withStyles({
    root: {
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#FF8E53',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#FE6B8B',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FE6B8B',
        },
        maxWidth: 80,
        marginRight: 8
    }
})(TextField);

const WaterMarkContainer = withStyles({
    root: {
        position: 'absolute',
        bottom: 100,
        right: -20,
        textAlign: 'right'
    }
})(Container);

export const Pagination = observer(() => {
    const store = useStore();

    // Set the page and fetch the results
    // If the page is too large or empty, -1 is passed as page
    const setPage = (page: number) => {
        if (!isNaN(page) && page >= 0 && page < store.totalPages) {
            store.setCurrentPage(page);
            store.fetch();
        } else {
            store.setCurrentPage(-1);
        }
    };

    // Set the page back to 0 if the field loses focus and is empty
    const onBlur = () => {
        if (store.currentPage === -1) {
            store.setCurrentPage(0);
            store.fetch();
        }
    };

    return (
        <StyledNavigation>
            <StyledButton
                disabled={store.currentPage < 1 || store.totalPages <= 1}
                onClick={() => setPage(store.currentPage - 1)}
            >
                <NavigateBefore/>
            </StyledButton>
            <StyledBottomNav>
                <StyledTextField
                    id="standard-number"
                    type="number"
                    value={store.getCurrentPage}
                    inputProps={{min: "0"}}
                    disabled={store.totalPages < 2}
                    onBlur={() => onBlur()}
                    onChange={(e) => setPage(parseInt(e.target.value) - 1)}
                />
                {' / ' + store.totalPages}
            </StyledBottomNav>
            <StyledButton
                disabled={store.currentPage + 1 >= store.totalPages}
                onClick={() => setPage(store.currentPage + 1)}
            >
                <NavigateNext/>
            </StyledButton>
            <WaterMarkContainer>
                Powered By GIPHY
            </WaterMarkContainer>
        </StyledNavigation>
    )
});
