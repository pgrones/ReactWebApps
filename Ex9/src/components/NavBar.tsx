import React from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom'
import {getLocale} from "./Index";
import {
    StyledAppBar, StyledButton, StyledButtonContainer, StyledComboBox, StyledHeaderContainer,
    StyledLocaleContainer, StyledTextField, StyledToolBar
} from "../styles/NavBarStyles";

export const NavBar = () => {
    const history = useHistory();
    const location = useLocation();
    const locale = getLocale(location);

    // Uses the url to set the right header
    const getLocation = (): string => {
        return location.pathname.length > 1 ?
            location.pathname.substring(1)[0].toUpperCase() + location.pathname.slice(2)
            : 'i18n'
    };

    return (
        <StyledAppBar position="fixed">
            <StyledToolBar>
                <StyledHeaderContainer>
                    <h1>{getLocation()}</h1>
                </StyledHeaderContainer>
                <StyledButtonContainer>
                    <Link to={{pathname: "/numbers", search: "?locale=" + locale}}>
                        <StyledButton>Numbers</StyledButton>
                    </Link>
                    <Link to={{pathname: "/dates", search: "?locale=" + locale}}>
                        <StyledButton>Dates</StyledButton>
                    </Link>
                    <Link to={{pathname: "/text", search: "?locale=" + locale}}>
                        <StyledButton>Text</StyledButton>
                    </Link>
                </StyledButtonContainer>
                <StyledLocaleContainer>
                    Locale
                    <StyledComboBox
                        id="combo-box"
                        value={locale}
                        onChange={(e, newValue) => {
                            history.push(`${location.pathname}?locale=${newValue}`)
                        }}
                        disableClearable={true}
                        options={['en', 'de', 'ja']}
                        style={{width: 70}}
                        renderInput={(params) => <StyledTextField {...params}/>}
                    />
                </StyledLocaleContainer>
            </StyledToolBar>
        </StyledAppBar>
    )
};
