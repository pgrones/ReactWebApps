import React from 'react';
import {AppBar, Button, Container, TextField, Toolbar, Tooltip} from "@material-ui/core";
import {Autocomplete} from '@material-ui/lab';
import withStyles from "@material-ui/core/styles/withStyles";

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
        margin: '0 50px 0 30px'
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
        minWidth: 70,
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

const StyledComboBox = withStyles({
    root: {
        marginLeft: 10,
        '& .MuiIconButton-root': {
            color: '#FE6B8B'
        }
    }
})(Autocomplete);

const StyledButtonContainer = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})(Container);

const StyledLocaleContainer = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})(Container);

export const NavBar = () => {
    const [value, setValue] = React.useState(locales[0]);

    return (
        <StyledAppBar position="fixed">
            <StyledToolBar>
                <StyledButtonContainer>
                    <Tooltip title="Numbers">
                        <StyledButton onClick={() => {
                        }}>
                            Numbers
                        </StyledButton>
                    </Tooltip>
                    <Tooltip title="Dates">
                        <StyledButton onClick={() => {
                        }}>
                            Dates
                        </StyledButton>
                    </Tooltip>
                    <Tooltip title="Text">
                        <StyledButton onClick={() => {
                        }}>
                            Text
                        </StyledButton>
                    </Tooltip>
                </StyledButtonContainer>
                <StyledLocaleContainer>
                    Locale
                    <StyledComboBox
                        id="combo-box"
                        value={value}
                        onChange={(e, newValue) => {
                            setValue(newValue);
                        }}
                        disableClearable={true}
                        options={locales}
                        style={{width: 70}}
                        renderInput={(params) => <StyledTextField {...params} value={'en'}/>}
                    />
                </StyledLocaleContainer>
            </StyledToolBar>
        </StyledAppBar>
    )
};

const locales = [
    'en',
    'de',
    'zu'
];
