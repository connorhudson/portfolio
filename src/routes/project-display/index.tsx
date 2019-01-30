import { Component, h } from "preact";
import Category from "../../models/Category";
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
        let title = ''
        switch (category) {
            case Category.PERSONAL:
                title = "Personal Projects"
                break
            case Category.PROFESSIONAL:
                title = "Professional Work"
                break
            case Category.SCHOOL:
                title = "School Projects"
                break
        }
        return (
            <div class={style.projectDisplay}>
                <h1>{title}</h1>
            </div>
        );
    }
}
