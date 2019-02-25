import * as React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

// COMPONENTS IMPORT //

import Login from "./login";
import Home from "./home";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/coucou" component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
