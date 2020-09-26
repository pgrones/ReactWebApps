import React from "react";
import ReactDOM from 'react-dom';
import {NavBar} from "./NavBar";
import {GlobalStyles} from "../styles/GlobalStyles";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Numbers} from "./Numbers";
import {Dates} from "./Dates";
import {Text} from "./Text";

export const getLocale = (location: any): string => {
    const l = location.search.split('=')[1];
    return l ? l : 'en'
};

const App = () => {
    return (
        <Router hashType={'noslash'}>
            <GlobalStyles/>
            <NavBar/>
            <Switch>
                <Route path="/numbers">
                    <Numbers/>
                </Route>
                <Route path="/dates">
                   <Dates/>
                </Route>
                <Route path="/text">
                    <Text/>
                </Route>
            </Switch>
        </Router>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
