import React, {useState} from "react";
import {FormattedDate, FormattedTime, IntlProvider} from 'react-intl';
import {StyledContainer, StyledFormatContainer, StyledTextField} from "../styles/CommonStyles"
import moment from 'moment';
import {useLocation} from 'react-router-dom';
import {getLocale} from "./Index";

export const Dates = () => {
    const [value, setValue] = useState(moment());

    return (
        <IntlProvider locale={getLocale(useLocation())}>
            <StyledContainer>
                <StyledTextField
                    type="date"
                    value={value.format('YYYY-MM-DD')}
                    onChange={(e) => setValue(moment(e.target.value))}
                />
                <StyledFormatContainer>
                    <div>Date</div>
                    <FormattedDate value={value.format()}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>Time</div>
                    <FormattedTime value={value.format()}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>Weekday</div>
                    <FormattedDate value={value.format()} weekday={'long'}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>Long Month</div>
                    <FormattedDate value={value.format()} day={'numeric'} month={'long'} year={'numeric'}/>
                </StyledFormatContainer>
            </StyledContainer>
        </IntlProvider>
    )
};
