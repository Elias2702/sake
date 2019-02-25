/* becodeorg/bookshelf
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";

/* import HelloWorld from "./components/hello"; */
import Home from "./components/home";

ReactDOM.render(<Home />, document.querySelector("#app"));
