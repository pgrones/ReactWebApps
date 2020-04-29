import React, {useState} from "react";
import {FormattedMessage, IntlProvider} from 'react-intl';
import {
    StyledComboBox, StyledComboField, StyledContainer, StyledFormatContainer, StyledGenderContainer,
    StyledInfoContainer, StyledTextField
} from "../styles/CommonStyles"
import {useLocation} from 'react-router-dom';
import {getLocale} from "./Index";

const messages = {
    gender_en: "{gender, select, male {He} female {She}}",
    gender_de: "{gender, select, male {Er} female {Sie}}",
    gender_ja: "{gender, select, male {彼} female {彼女}}",
    plural_en: "{itemCount, plural, =0 {No apples} =1 {# apple} other {# apples}}",
    plural_de: "{itemCount, plural, =0 {Keine Äpfel} =1 {# Apfel} other {# Äpfel}}",
    plural_ja: "{itemCount, plural, =0 {林檎が無い} =1 {林檎が一個} =2 {林檎が二個} =3 {林檎が三個} other {林檎が沢山}}",
    gender_plural_en: "{gender, select, male {He} female {She}} has {itemCount, plural, =0 {no apples} =1 {# apple} other {# apples}}",
    gender_plural_de: "{gender, select, male {Er} female {Sie}} hat {itemCount, plural, =0 {keine Äpfel} =1 {# Apfel} other {# Äpfel}}",
    gender_plural_ja: "{gender, select, male {彼} female {彼女}}は{itemCount, plural, =0 {林檎を無い} =1 {林檎を一個} =2 {林檎を二個} =3 {林檎を三個} other {林檎を沢山}}"
};

export const Text = () => {
    const [value, setValue] = useState('0');
    const [gender, setGender] = useState('male');
    const locale = getLocale(useLocation());

    return (
        <IntlProvider locale={locale} messages={messages}>
            <StyledContainer>
                <StyledGenderContainer>
                    <StyledTextField type="number" value={value}
                                     onChange={(e) => setValue(parseInt(e.target.value) >= 0 ? e.target.value : '0')}/>
                    <StyledComboBox
                        id="combo-box"
                        value={gender}
                        onChange={(e, newValue) => {
                            setGender(newValue);
                        }}
                        disableClearable={true}
                        options={['male', 'female']}
                        style={{width: 70}}
                        renderInput={(params) => <StyledComboField {...params}/>}
                    />
                </StyledGenderContainer>
                <StyledFormatContainer>
                    <div>Gender</div>
                    <FormattedMessage id={"gender_" + locale} values={{gender: gender}}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>Plural</div>
                    <FormattedMessage id={"plural_" + locale} values={{itemCount: parseFloat(value)}}/>
                </StyledFormatContainer>
                <StyledFormatContainer>
                    <div>Gender + Plural</div>
                    <FormattedMessage id={"gender_plural_" + locale}
                                      values={{gender: gender, itemCount: parseFloat(value)}}/>
                </StyledFormatContainer>
                {locale === 'ja' && <StyledInfoContainer>
                    {"japanese doesn't have plurals, only the numbers are changed"}
                    <br/>
                    {"e.g. 無い = no, 一個 = 1, 二個 = 2, 三個 = 3, 沢山 = many"}
                </StyledInfoContainer>}
            </StyledContainer>
        </IntlProvider>
    )
};
