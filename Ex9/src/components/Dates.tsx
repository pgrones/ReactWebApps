import React, {useState} from "react";
import {FormattedDate, FormattedTime, IntlProvider} from 'react-intl';
import {StyledContainer, StyledFormatContainer, StyledTextField} from "../styles/CommonStyles"
import moment, {Moment} from 'moment';
import {useLocation} from 'react-router-dom';
import {getLocale} from "./Index";

export const Dates = () => {
    const [value, setValue] = useState(moment());

    const setDate = (date: Moment) =>{
        if(date.isValid()){
            setValue(date);
        }
    };

    const getValue = (): string => {
        return value.format();
    };

    return (
        <IntlProvider locale={getLocale(useLocation())}>
            <StyledContainer>
                <StyledTextField
                    type="date"
                    value={value.format('YYYY-MM-DD')}
                    onChange={(e) => setDate(moment(e.target.value))}
                />
                <StyledFormatContainer>
                    <div>Date</div>
                    <FormattedDate value={getValue()}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>Time</div>
                    <FormattedTime value={getValue()}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>Weekday</div>
                    <FormattedDate value={getValue()} weekday={'long'}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>Long Month</div>
                    <FormattedDate value={getValue()} day={'numeric'} month={'long'} year={'numeric'}/>
                </StyledFormatContainer>
            </StyledContainer>
        </IntlProvider>
    )
};
