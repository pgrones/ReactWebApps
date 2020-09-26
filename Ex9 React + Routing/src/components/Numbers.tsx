import React, {useState} from "react";
import {FormattedNumber, IntlProvider} from 'react-intl';
import { StyledContainer, StyledFormatContainer, StyledTextField} from "../styles/CommonStyles"
import {useLocation} from 'react-router-dom';
import {getLocale} from "./Index";

export const Numbers = () => {
    const [value, setValue] = useState('0');
    const locale = getLocale(useLocation());

    const getValue = (): number => {
        return parseFloat(value.replace(',', '.'));
    };

    const getCurrency = () => {
        switch (locale) {
            case 'de':
                return 'EUR';
            case 'ja':
                return 'JPY';
            default:
                return 'USD';
        }
    };

    return (
        <IntlProvider locale={locale}>
            <StyledContainer>
                <StyledTextField type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
                <StyledFormatContainer>
                    <div>Standard</div>
                    <FormattedNumber value={getValue()}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>5 Fraction Digits</div>
                    <FormattedNumber minimumFractionDigits={5} value={getValue()}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>Megabyte</div>
                    <FormattedNumber style="unit" unit="megabyte" value={getValue()}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>Currency</div>
                    <FormattedNumber currency={getCurrency()} style="currency" value={getValue()}/>
                </StyledFormatContainer>
            </StyledContainer>
        </IntlProvider>
    )
};
