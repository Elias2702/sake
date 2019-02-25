import * as React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

// COMPONENTS IMPORT //

import Login from "./login";
import Home from "./home";
import Chat from "./chat";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="/chat" component={Chat} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routes;
