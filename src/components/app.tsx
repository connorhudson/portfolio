import { Component, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import ProjectDisplay from "../routes/project-display";
import Header from "./header";

if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

export default class App extends Component {
    public currentUrl?: string;
    public handleRoute = (e: RouterOnChangeArgs) => {
        this.currentUrl = e.url;
    };

    public render() {
        return (
            <div id="app">
                <Router onChange={this.handleRoute}>
                    <Route path="/" component={Home} />
                    <Route path="/:category" component={ProjectDisplay} />
                </Router>
            </div>
        );
    }
}
