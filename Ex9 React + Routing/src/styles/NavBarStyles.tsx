import withStyles from "@material-ui/core/styles/withStyles";
import {AppBar, Button, Container, TextField, Toolbar} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";

export const StyledAppBar = withStyles({
    root: {
        background: '#2a2f36',
        boxShadow: '1px 3px 12px 5px #000'
    }
})(AppBar);

export const StyledToolBar = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: 80,
        margin: '0 50px 0 30px'
    }
})(Toolbar);

export const StyledButton = withStyles({
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

export const StyledTextField = withStyles({
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

export const StyledComboBox = withStyles({
    root: {
        marginLeft: 10,
        '& .MuiIconButton-root': {
            color: '#FE6B8B'
        }
    }
})(Autocomplete);

export const StyledHeaderContainer = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})(Container);

export const StyledButtonContainer = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})(Container);

export const StyledLocaleContainer = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})(Container);
