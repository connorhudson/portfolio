import { Component, h } from "preact";
import Category, { CategoryInfo } from "../../models/Category";
import * as style from "./style.css";

interface Props {
    category: Category;
}

export default class ProjectDisplay extends Component<Props> {

    // gets called when this route is navigated to
    public componentDidMount() {
    }

    // gets called just before navigating away from the route
    public componentWillUnmount() {
    }

    public render({ category }: Props) {
        return (
            <div class={style.projectDisplay}>
                <h1>{CategoryInfo[category].title}</h1>
                <p>{CategoryInfo[category].description}</p>
            </div>
        );
    }
}
