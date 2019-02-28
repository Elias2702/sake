import * as React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

// COMPONENTS IMPORT //

import Login from "./connection/connectionPanel";
import Home from "./home";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/coucou" component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
