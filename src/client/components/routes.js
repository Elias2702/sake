import * as React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

// COMPONENTS IMPORT //

import Login from "./login";
/* import Home from "./home"; */
import Gameboard from "./gameboard";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/game" component={Gameboard} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
