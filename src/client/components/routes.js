import * as React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

// COMPONENTS IMPORT //

import Login from "./login";
import Gameboard from "./gameboard";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Gameboard} />
                        <Route path="/coucou" component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
