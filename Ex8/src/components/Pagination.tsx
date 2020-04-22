import {NavigateBefore, NavigateNext} from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {Button, Container, BottomNavigation, TextField} from "@material-ui/core";

type Props = {
    currentPage: number,
    totalPages: number,
    setCurrentPage: Function
}

const StyledNavigation = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        minHeight: 80,
        width: '100%',
        position: 'fixed',
        bottom: 0,
        background: '#2a2f36',
        boxShadow: '1px -3px 12px 5px #000'
    }
})(BottomNavigation);

const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: 48,
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
        '& label.Mui-focused': {
            color: '#fafafa',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fafafa',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#fafafa',
            },
            '&:hover fieldset': {
                borderColor: '#fafafa',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#fafafa',
            },
        },
        maxWidth: 100,
        marginRight: 10
    }
})(TextField);

export const Pagination = (props: Props) => {
    const [page, setPage] = useState(props.currentPage + 1);

    const changePage = (e: any) => {
        if (e.key === 'Enter') {
            if (!isNaN(page)) {
                props.setCurrentPage(page - 1)
            } else {
                setPage(1);
                props.setCurrentPage(0)
            }
        }
    };

    useEffect(() => {
        setPage(props.currentPage + 1)
    }, [props.currentPage]);

    return (
        <StyledNavigation>
            <StyledButton
                disabled={props.currentPage < 1}
                onClick={() => props.setCurrentPage(props.currentPage - 1)}
            >
                <NavigateBefore/>
            </StyledButton>
            <StyledBottomNav>
                <StyledTextField
                    id="standard-number"
                    type="number"
                    value={page ? page : ''}
                    onKeyPress={(e) => changePage(e)}
                    onBlur={() => changePage({key: 'Enter'})}
                    onChange={(e) => setPage(parseInt(e.target.value))}
                />
                {' / ' + props.totalPages}
            </StyledBottomNav>
            <StyledButton
                disabled={props.currentPage === props.totalPages}
                onClick={() => props.setCurrentPage(props.currentPage + 1)}
            >
                <NavigateNext/>
            </StyledButton>
        </StyledNavigation>
    )
};
