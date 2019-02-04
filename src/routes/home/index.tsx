import { Component, h } from "preact";
import { Link } from "preact-router";
import * as style from "./style.css";

interface Props {}
export default class Home extends Component<Props> {
    public render() {
        return (
            <div class={style.home}>
                <h1 className="name">Connor Hudson</h1>
                <h3 className="description">design + web dev</h3>
                <div className="section-link-container">
                    <Link href="/school" className="section-link">School</Link>
                    <Link href="/personal" className="section-link">Personal</Link>
                    <Link href="/professional" className="section-link">Professional</Link>
                </div>
            </div>
        );
    }
}
