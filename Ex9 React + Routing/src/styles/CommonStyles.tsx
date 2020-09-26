import withStyles from "@material-ui/core/styles/withStyles";
import {Container, TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";

export const StyledContainer = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }
})(Container);

export const StyledFormatContainer = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 400
    }
})(Container);

export const StyledTextField = withStyles({
    root: {
        backgroundColor: '#4e5663',
        minWidth: 70,
        width: 400,
        paddingLeft: 25,
        paddingRight: 10,
        borderRadius: 5,
        margin: 20,
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

export const StyledComboField = withStyles({
    root: {
        backgroundColor: '#4e5663',
        minWidth: 100,
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

export const StyledGenderContainer = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})(Container);

export const StyledInfoContainer = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 50,
        fontSize: 18
    }
})(Container);
